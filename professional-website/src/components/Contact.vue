<template>
  <!-- <div class="contactBackground"> -->
  <Card class="contactCard border-1" style="margin-top: 66px">
    <template #title>> Contact Information</template>
    <template #content
      >Looking to get in touch? You can email me at kirchnera2707@my.uwstout.edu
      or find me at any of the following...
      <div class="flex flex-row gap-2">
        <a href="https://www.linkedin.com/in/leo-kirchner-121bb5267"
          ><Button label="LinkedIn" severity="info" icon="pi pi-linkedin" />
        </a>
        <a href="https://github.com/kirchnerleo?tab=overview"
          ><Button label="GitHub" severity="info" icon="pi pi-github" />
        </a>
        <a href="https://uwstout.joinhandshake.com/stu/users/45045598"
          ><Button label="HandShake" severity="info" />
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
