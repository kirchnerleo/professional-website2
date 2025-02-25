<template>
  <!-- <div class="aboutBackground flex align-items-center"> -->
  <Card class="aboutCard border-1" style="margin-top: 100px">
    <template #title>
      <div class="sm:text-5xl text-4xl">> This Site</div>
    </template>
    <template #content>
      <div class="sm:text-base text-xs">
        If you want to take a look at some of my work, you already have! The first
        iteration of this website was a project that was originally assigned as a
        final project for CS248 - Web and Internet Programming, which I took in
        the spring of 2023. The website utilized the various skills I learned over
        the course of that class, including HTML, CSS, Javascript, and PHP. I
        wrote all of the sourcecode using Notepad++, and hosted it on the
        University of Wisconsin - Stout's development server before moving it to
        Nixihost for more permanent hosting. The project was challenging but
        extremely rewarding, both with regards to the final product and the skills
        I learned along the way. I'm always thrilled to learn something new, and
        this project was the perfect opportunity to do so. However, I decided
        early on that as my skills improved, I would continue to improve the site.
        What you are viewing now is the second and most recent iteration of this
        project. During my time working on our Software Engineering capstone
        project in the spring of 2024, my team and I worked with Prime Vue for our front end
        development, and I enjoyed using it so much I decided to remake my
        professional website using Prime Vue and Vue.js.</div>
      <div>
        <Galleria v-model:visible="OldWebsiteDisplay" :value="oldWebsiteImages" :responsiveOptions="responsiveOptions"
          :numVisible="4" containerStyle="max-width: 50%" :circular="true" :fullScreen="true"
          :showItemNavigators="true">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block;"
              class="h-2rem lg:h-4rem w-auto" />
          </template>
        </Galleria>
        <div> <Button label="Screenshots" icon="pi pi-external-link" @click="OldWebsiteDisplay = true"
            severity="success" style="position: static; margin-right: 10px" class="w-full sm:w-auto" />

          <a href="https://github.com/kirchnerleo/professional-website2.git"><Button label="View on GitHub"
              severity="success" icon="pi pi-github" style="position: static;" class="w-full sm:w-auto" /></a>
        </div>

      </div>
    </template>
  </Card>
  <Card class="aboutCard border-1">
    <template #title>
      <div class="sm:text-5xl text-4xl">> Backpacker's Toolbox</div>
    </template>
    <template #content>
      <div class="sm:text-base text-xs">
        In the Fall of 2024, I led a semester long senior capstone project called
        Backpacker's Toolbox.
        The vision was to create a website that backpackers could use to plan their trips, and
        would include a variety of tools (hence a "toolbox"). The final product includes a tool
        to keep track of the people one might be hiking with as well as crucial information like
        allergies and emergency contact information, which is especially crucial for treks with
        young campers. Additionally, we developed a tool for planning out hiking routes, which uses
        Geoapify and Leaflet to display and generate routes. We used and MVC model with ASP.NET as
        well as a custom interface written with HTML, CSS, and JavaScript.</div>
      <Galleria v-model:visible="BPTDisplay" :value="BPTImages" :responsiveOptions="responsiveOptions" :numVisible="13"
        containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block;"
            class="h-2rem lg:h-4rem w-auto" />
        </template>
      </Galleria>
      <Sidebar position="full" v-model:visible="BPTDemoDisplay">
        <video width="100%" controls>
          <source src="/src/assets/BPT_Screenshots/BPTDemo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </Sidebar>

      <Button label="Screenshots" icon="pi pi-external-link" @click="BPTDisplay = true" severity="success"
        style="position: static; margin-right: 10px" class="w-full sm:w-auto" />
      <Button label="Video Demo" icon="pi pi-external-link" severity="success" style="position: static;"
        @click="BPTDemoDisplay = true" class="w-full sm:w-auto" />
    </template>
  </Card>
  <Card class="aboutCard border-1">
    <template #title>
      <div class="sm:text-5xl text-4xl">> Spacebox</div>
    </template>
    <template #content>
      <div class="sm:text-base text-xs">
        In the spring of 2024, I was a part of a semester long senior capstone project
        called SpaceBox.
        SpaceBox is a mapping application for solar systems, which could be used by a wide variety of users from
        teachers
        to sci-fi writers to table top game masters. SpaceBox primarly uses Vue with TypeScript, along with a RESTful
        API.
        Most of my work for this project was for the frontend, and it's where I was first introduced to Vue.</div>
      <Galleria v-model:visible="SpaceboxDisplay" :value="SpaceBoxImages" :responsiveOptions="responsiveOptions"
        :numVisible="8" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block;"
            class="h-2rem lg:h-4rem w-auto" />
        </template>
      </Galleria>
      <Sidebar v-model:visible="SpaceboxDemoDisplay" position="full">
        <video width="100%" controls>
          <source src="/src/assets/Spacebox_Screenshots/SpaceboxDemo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </Sidebar>

      <Button label="Screenshots" icon="pi pi-external-link" @click="SpaceboxDisplay = true" severity="success"
        style="position: static; margin-right: 10px" class="w-full sm:w-auto" />
      <Button label="Video Demo" icon="pi pi-external-link" severity="success" style="position: static;"
        @click="SpaceboxDemoDisplay = true" class="w-full sm:w-auto" />
    </template>
  </Card>
</template>
<script>
import { PhotoService } from '@/services/PhotoService';

export default {
  data() {
    return {
      oldWebsiteImages: null,
      BPTImages: null,
      SpaceBoxImages: null,
      responsiveOptions: [
        {
          breakpoint: '1500px',
          numVisible: 4
        },
        {
          breakpoint: '1024px',
          numVisible: 3
        },
        {
          breakpoint: '768px',
          numVisible: 2
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ],
      OldWebsiteDisplay: false,
      BPTDisplay: false,
      SpaceboxDisplay: false,
      SpaceboxDemoDisplay: false,
      BPTDemoDisplay: false
    };
  },
  mounted() {
    PhotoService.getOldWebsiteImages().then((data) => (this.oldWebsiteImages = data));
    PhotoService.getBPTImages().then((data) => (this.BPTImages = data));
    PhotoService.getSpaceboxImages().then((data) => (this.SpaceBoxImages = data));
  }
};

</script>
<style>
.aboutCard {
  background: rgba(34, 197, 94, 0.04);
  margin: 2%;
  border-color: #4ade80;
}
</style>