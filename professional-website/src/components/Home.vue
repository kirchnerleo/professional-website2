<template>
  <div class="grid flex align-items-center">
    <div class="col">
      <Card class="card">
        <template #title>Hello!</template>
        <template #content>
          I'm Leo Kirchner, a B.S. Computer Science - Interdisciplinary student
          at the University of Wisconsin - Stout. I started my college education
          at Normandale Community College in 2019, where I discovered my love
          for programming and computers. I transferred to Stout in the fall of
          2022 where I will be finishing my degree. I'm always excited to learn
          new things, and in the ever expanding field of computer science, I'm
          confident I'll never run out of opportunities to expand my knowledge.
        </template>
      </Card>
    </div>
    <div class="col">
      <div class="card flex justify-content-center">
        <img
          src="/src/assets/portrait_placeholder.png"
          alt="Headshot"
          width="400"
          class="portrait"
        />
      </div>
    </div>
  </div>
</template>

<style>
.portrait {
  border-radius: 50%;
}
</style>
