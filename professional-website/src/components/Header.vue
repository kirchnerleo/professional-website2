<script setup></script>
<template>
  <div class="header grid column-gap-3">
    <div class="col pl-3">Leo Kirchner</div>
    <div class="flex align-items-end">
      <a href="#/"
        ><Button
          label="Home"
          class="border-noround-bottom"
          :outlined="homeOutlined"
          severity="warn"
        ></Button>
      </a>
    </div>
    <div class="flex align-items-end">
      <a href="#/Resume"
        ><Button
          label="Resume"
          class="border-noround-bottom resumeButton"
          :outlined="resumeOutlined"
          severity="help"
      /></a>
    </div>
    <div class="flex align-items-end">
      <a href="#/About"
        ><Button
          label="About"
          class="border-noround-bottom"
          :outlined="aboutOutlined"
          severity="success"
        ></Button
      ></a>
    </div>
    <div class="flex align-items-end pr-5">
      <a href="#/Contact"
        ><Button
          label="Contact"
          class="border-noround-bottom"
          :outlined="contactOutlined"
          severity="info"
        ></Button
      ></a>
    </div>
    <div
      class="divider"
      :class="{
        homeDivider: !homeOutlined,
        resumeDivider: !resumeOutlined,
        aboutDivider: !aboutOutlined,
        contactDivider: !contactOutlined,
      }"
    ></div>
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

const headerBorder = document.getElementById("headerBorder");

const routes = {
  "/": Home,
  "/Resume": Resume,
  "/About": About,
  "/Contact": Contact,
};
//some styling depends on current page view
export default {
  data() {
    //checks for route, and applies styling accordingly
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
<style scoped>
.header {
  font-family: "VT323";
  font-size: 45px;
  background-color: #121212;
  position: fixed;
  width: 100vw;
}
.divider {
  height: 5px;
  width: 100%;
}
.homeDivider {
  background-color: #fbbf24;
}
.resumeDivider {
  background-color: #c084fc;
}
.aboutDivider {
  background-color: #4ade80;
}
.contactDivider {
  background-color: #38bdf8;
}
</style>
