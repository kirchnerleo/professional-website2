<template>
  <div class="header grid border-primary border-bottom-3 gap-1">
    <div class="col pl-3">Leo Kirchner</div>
    <div class="flex align-items-end">
      <a href="#/"
        ><Button
          label="Home"
          class="border-noround-bottom"
          :outlined="homeOutlined"
        ></Button>
      </a>
    </div>
    <div class="flex align-items-end">
      <a href="#/Resume"
        ><Button
          label="Resume"
          class="border-noround-bottom"
          :outlined="resumeOutlined"
      /></a>
    </div>
    <div class="flex align-items-end">
      <a href="#/About"
        ><Button
          label="About"
          class="border-noround-bottom"
          :outlined="aboutOutlined"
        ></Button
      ></a>
    </div>
    <div class="flex align-items-end pr-3">
      <a href="#/Contact"
        ><Button
          label="Contact"
          class="border-noround-bottom"
          :outlined="contactOutlined"
        ></Button
      ></a>
    </div>
  </div>
  <br />
  <component :is="currentView" />
</template>

<script>
import { ref, onMounted } from "vue";
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
//some styling depends on current page view
export default {
  data() {
    //checks for route, and outlines tab accordingly
    if (window.location.hash == "#/") {
      return {
        currentPath: window.location.hash,
        homeOutlined: false,
        resumeOutlined: true,
        aboutOutlined: true,
        contactOutlined: true,
      };
    } else if ((window.location.hash = "#/Resume")) {
      return {
        currentPath: window.location.hash,
        homeOutlined: true,
        resumeOutlined: false,
        aboutOutlined: true,
        contactOutlined: true,
      };
    } else if ((window.location.hash = "#/About")) {
      return {
        currentPath: window.location.hash,
        homeOutlined: true,
        resumeOutlined: true,
        aboutOutlined: false,
        contactOutlined: true,
      };
    } else if ((window.location.hash = "#/Contact")) {
      return {
        currentPath: window.location.hash,
        homeOutlined: true,
        resumeOutlined: true,
        aboutOutlined: true,
        contactOutlined: false,
      };
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
      //updating outlined tab as needed
      if (this.currentPath == "#/") {
        this.homeOutlined = false;
        this.resumeOutlined = true;
        this.aboutOutlined = true;
        this.contactOutlined = true;
      } else if (this.currentPath == "#/Resume") {
        this.homeOutlined = true;
        this.resumeOutlined = false;
        this.aboutOutlined = true;
        this.contactOutlined = true;
      } else if (this.currentPath == "#/About") {
        this.homeOutlined = true;
        this.resumeOutlined = true;
        this.aboutOutlined = false;
        this.contactOutlined = true;
      } else if (this.currentPath == "#/Contact") {
        this.homeOutlined = true;
        this.resumeOutlined = true;
        this.aboutOutlined = true;
        this.contactOutlined = false;
      }
    });
  },
};
</script>
<style>
.header {
  font-family: "VT323";
  font-size: 45px;
}
</style>
