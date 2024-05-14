<template>
  <div>
    <a href="#/"> Home </a>
    <a href="#/Resume"> Resume </a>
    <a href="#/About">About this website </a>
    <a href="#/Contact">Contact</a>
  </div>
  <component :is="currentView" />
</template>

<script>
import Home from "./Home.vue";
import Resume from "./Resume.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";
const routes = {
  "/": Home,
  "/Resume": Resume,
  "/About": About,
  "/Contact": Contact,
};
export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>
