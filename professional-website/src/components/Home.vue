<template>
  <div class="flex flex-column-reverse lg:flex-row" style="margin-top: 100px">
    <div class="flex justify-content-center lg:w-11">
      <Card class="card homeCard border-1">
        <template #title>> Hello!</template>
        <template #content>
          <div class="sm:text-base text-xs">
            I'm Leo Kirchner, a B.S. Computer Science - Interdisciplinary graduate
            from the University of Wisconsin - Stout. I started my college education
            at Normandale Community College in 2019, where I discovered my love for
            programming and computers. I transferred to Stout in the fall of 2022
            where I graduated in December 2024. I'm always excited to learn new things,
            and in the ever expanding field of computer science, I'm confident I'll
            never run out of opportunities to expand my knowledge.
          </div>

        </template>
      </Card>
    </div>
    <div class="card flex justify-content-center align-items-center">
      <img src="/src/assets/GradHeadshot.jpg" alt="Headshot" style="width:60%" class="portrait border-2 w-5 lg:w-7" />
    </div>
  </div>
</template>

<style>
.portrait {
  border-radius: 50%;
  border-color: #fbbf24;
}

.homeCard {
  background: rgba(249, 115, 22, 0.04);
  border-color: #fbbf24;
  margin: 2%;
}
</style>
