<template>
  <!-- <div class="contactBackground"> -->
  <Card class="contactCard border-1" style="margin-top: 100px">
    <template #title>
      <div class="sm:text-5xl text-4xl"> > Contact Information</div>
    </template>
    <template #content>
      <div class="sm:text-base text-xs">
        Looking to get in touch? I'd love to hear from you! You can email me at
        kirchnera2707@my.uwstout.edu
        or find me at any of the following...
      </div>

      <div class="flex sm:flex-row flex-column">
        <a href="https://www.linkedin.com/in/leo-kirchner-121bb5267"><Button label="LinkedIn" severity="info"
            icon="pi pi-linkedin" class="sm:w-auto w-full" style="margin-right: 10px" />
        </a>
        <a href="https://github.com/kirchnerleo?tab=overview"><Button label="GitHub" severity="info" icon="pi pi-github"
            class="sm:w-auto w-full" style="margin-right: 10px" />
        </a>
        <a href="https://uwstout.joinhandshake.com/stu/users/45045598"><Button label="HandShake" severity="info"
            class="sm:w-auto w-full" />
        </a>
      </div>
    </template>
  </Card>
  <!-- </div> -->
</template>
<style>
.contactCard {
  background: rgba(56, 189, 248, 0.04);
  margin: 2%;
  border-color: #38bdf8;
}
</style>
