import 'vue-global-api/reactivity';
import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import App from './App.vue';

// windicss layers
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
// your custom styles here
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css';
// windicss devtools support (dev only)
import 'virtual:windi-devtools';

const routes = generatedRoutes;

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes });
