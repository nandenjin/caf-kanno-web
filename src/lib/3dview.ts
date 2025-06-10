import {
  AmbientLight,
  AxesHelper,
  Color,
  Fog,
  Group,
  Mesh,
  MeshLambertMaterial,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  PointLightHelper,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { FilmPass } from "three/addons/postprocessing/FilmPass.js";
import model from "../assets/od_studio.glb?url";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { Sky } from "three/addons/objects/Sky.js";
import Stats from "stats.js";
import GUI from "lil-gui";

export class InteractiveViewHub {
  private width = 100;
  private height = 100;
  renderer = new WebGLRenderer({
    antialias: true,
  });
  effectComposer = new EffectComposer(this.renderer);
  camera = new PerspectiveCamera(60, 1, 0.1, 100);
  control = new OrbitControls(this.camera, this.renderer.domElement);
  private bloomPass = new UnrealBloomPass(new Vector2(600, 600), 0.2, 1, 0.5);
  private filmPass = new FilmPass(1, false);
  stats = new Stats();
  gui = new GUI({ autoPlace: false });
  private running = false;
  private lastRendered = performance.now();

  constructor() {
    const {
      renderer,
      camera,
      effectComposer,
      bloomPass,
      filmPass,
      gui,
      control,
    } = this;

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor(0x000000);

    const scene = new Scene();

    camera.position.set(0, 0, 5);

    const loader = new GLTFLoader();
    loader.load(model, (gltf) => {
      scene.add(transformObject(gltf.scene));
    });

    const sky = new Sky();
    sky.scale.setScalar(1000);
    sky.material.uniforms["turbidity"].value = 10;
    sky.material.uniforms["rayleigh"].value = 2;
    sky.material.uniforms["mieCoefficient"].value = 0.005;
    sky.material.uniforms["mieDirectionalG"].value = 0.8;
    sky.material.uniforms["sunPosition"].value.set(1, 0.2, 1);

    scene.add(sky);

    const ambient = new AmbientLight(new Color(0x99aa88).multiplyScalar(1.2));
    scene.add(ambient);
    gui.addColor(ambient, "color").name("ambientColor");

    const sun = new PointLight(new Color(0xffeeaa).multiplyScalar(0.8), 100);
    sun.position.set(4.86, 1.22, 3.98);
    sun.lookAt(0, 0, 0);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 512;
    sun.shadow.mapSize.height = 512;

    gui.addColor(sun, "color").name("sunColor");

    scene.add(sun);

    const fogGUI = gui.addFolder("fog");
    scene.fog = new Fog(new Color(0xddee88).multiplyScalar(0.5), 0, 3.5);
    fogGUI.addColor(scene.fog, "color").name("color");
    fogGUI.add(scene.fog, "near", 0, 10).name("near");
    fogGUI.add(scene.fog, "far", 0, 10).name("far");

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);
    effectComposer.addPass(bloomPass);
    effectComposer.addPass(filmPass);

    const postprocessingGUI = gui.addFolder("postprocessings");
    postprocessingGUI.add(bloomPass, "enabled").name("bloom");
    postprocessingGUI.add(filmPass, "enabled").name("film");

    const helpers = new Group();
    helpers.add(new PointLightHelper(sun, 1));
    helpers.add(new AxesHelper());
    helpers.visible = false;
    scene.add(helpers);

    control.enabled = false;
    gui.add(control, "enabled").name("Enable controls");
    gui.add(helpers, "visible").name("Show helpers");

    if (!this.running) {
      this.running = true;
      this.render();
    }
  }

  setSize(width: number, height: number) {
    if (this.width === width && this.height === height) return;

    this.width = width;
    this.height = height;

    const { effectComposer, renderer, camera } = this;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    effectComposer.setSize(width, height);
    effectComposer.setPixelRatio(window.devicePixelRatio);
  }

  private render() {
    const now = performance.now();
    this.stats.begin();
    // this.control.update();
    this.effectComposer.render((now - this.lastRendered) / 1000);
    this.stats.end();
    this.lastRendered = now;
    if (this.running) {
      requestAnimationFrame(this.render.bind(this));
    }
  }

  destroy() {
    this.running = false;

    // Dispose of the renderer
    this.renderer.dispose();

    // Dispose of the effect composer
    this.effectComposer.dispose();

    // Dispose of the controls
    this.control.dispose();

    // Dispose of the stats and GUI
    if (this.stats.dom.parentNode) {
      this.stats.dom.parentNode.removeChild(this.stats.dom);
    }
    if (this.gui.domElement.parentNode) {
      this.gui.domElement.parentNode.removeChild(this.gui.domElement);
    }
  }
}

function transformObject(obj: Object3D, replacedMap = new Map<string, any>()) {
  if (obj.children.length > 0) {
    obj.children = obj.children.map((child) =>
      transformObject(child, replacedMap)
    );
  }

  if (obj instanceof Mesh) {
    obj.castShadow = true;
    obj.receiveShadow = true;
    if (obj.material) {
      obj.material = replaceWith(
        obj.material.id,
        replacedMap,
        () =>
          new MeshLambertMaterial({
            color: obj.material.color,
            emissive: obj.material.emissive,
            emissiveIntensity: obj.material.emissiveIntensity,
          })
      );
    }
  }
  return obj;
}

function replaceWith<T>(
  originalId: string,
  map: Map<string, any>,
  generator: () => T
) {
  const t = map.get(originalId) ?? generator();
  map.set(originalId, t);
  return t;
}
