import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import "normalize.css";
import "./style.css";

export const createApp = ViteSSG(App);
