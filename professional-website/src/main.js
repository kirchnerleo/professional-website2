import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-dark-amber/theme.css";
import "primevue/resources/primevue.min.css";
import "/node_modules/primeflex/primeflex.css";
import Card from "primevue/card";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import Galleria from "primevue/galleria";
import Dialog from "primevue/dialog";

const app = createApp(App);
app.use(PrimeVue);
app.component("Card", Card);
app.component("Button", Button);
app.component("Galleria", Galleria);
app.component("Dialog", Dialog);
app.mount("#app");
