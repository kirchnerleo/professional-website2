<template>
  <div class="grid flex align-items-center" style="margin-top: 66px;">
    <div class="col">
      <Card class="card homeCard border-1">
        <template #title>> Hello!</template>
        <template #content>
          I'm Leo Kirchner, a B.S. Computer Science - Interdisciplinary graduate
           from the University of Wisconsin - Stout. I started my college education
            at Normandale Community College in 2019, where I discovered my love for
             programming and computers. I transferred to Stout in the fall of 2022
              where I graduated in December 2024. I'm always excited to learn new things, 
              and in the ever expanding field of computer science, I'm confident I'll 
              never run out of opportunities to expand my knowledge.
        </template>
      </Card>
    </div>
    <div class="col">
      <div class="card flex justify-content-center">
        <img
          src="/src/assets/GradHeadshot.jpg"
          alt="Headshot"
          width="400"
          class="portrait border-2"
        />
      </div>
    </div>
  </div>
</template>

<style>
.portrait {
  border-radius: 50%;
  border-color:#fbbf24;
}
.homeCard {
  background: rgba(249, 115, 22, 0.04);
  border-color: #fbbf24;
  margin: 2%;
}
</style>
