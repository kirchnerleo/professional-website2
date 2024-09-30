<template>
  <!-- <div class="grid flex align-items-center resumeBackground"> -->
  <!--Will need to update resume before launch-->
  <div class="row">
    <Card class="resumeCard border-1" style="margin-top: 66px">
      <template #title>> Resume </template>
      <template #content>
        <a
          href="/src/assets/LeoKirchnerResume.pdf"
          download="Leo_Kirchner_Resume.pdf"
          ><Button
            label="Download a copy"
            severity="help"
            icon="pi pi-download"
            style="position: static"
          />
        </a>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>> Education</template>
      <template #content>
        <div class="subtitle">Current</div>
        <div class="content">
          University of Wisconsin - Stout, Fall 2023 - Fall 2024 <br />
          Degree: Bachelor of Science <br />
          Major: Computer Science <br />
          Concentration: Interdisciplinary <br />Fall 2022 and Spring 2023
          Dean's List<br />
        </div>
        <div class="subtitle">Previous</div>
        <div class="content">
          Normandale Community College, Fall 2019 - Spring 2022<br />
          Major: Computer Science Transfer Pathway<br />
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>> Technical Projects</template>
      <template #content>
        <div class="subtitle">
          Database Manipulation and Design Final Project
        </div>
        <div class="content">
          Utilized SQL and MySQL Workbench with relational database techniques
          to design and implement a working database complete with significant
          and realistic table sizes, some of the data of which was produced with
          C++ code. <br />
        </div>
        <div class="subtitle">Personal Website</div>
        <div class="content">
          As a final project for Web and Internet Programming, designed and
          created a professional website using HTML, CSS, JavaScript, and PHP.
          This website was remade using Vue.js and Prime Vue over the summer of
          2024.
        </div>
        <div class="subtitle">Software Engineering Practicum</div>
        <div class="content">
          Utilizing techniques learned in Software Engineering Principles such
          as Agile and Scrum, currently working on a semester long team project
          for the first part of the Computer Science capstone to create a
          website to create and edit maps of solar systems. <br />
          Using this opportunity to develop C# skills as well as continuing to
          develop proficiency GitHub for source code management and using Prime
          Vue in Visual Studio Code for front-end development. <br />
          Developed the skillset of leading by example as necessary to
          accomplish the project goals; especially with respect to group
          cohesion, cooperation, and morale.<br />
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>> Technical Skills</template>
      <template #content>
        <div class="subtitle">Programs</div>
        <div class="content">
          Visual Studio, Notepad++, MySQL Workbench, GitHub, Visual Studio
          Code<br />
        </div>
        <div class="subtitle">Operating Systems</div>
        <div class="content">Windows, Linux</div>
        <div class="subtitle">
          Languages (ranked from most to least experience)
        </div>
        <div class="content">
          C/C++, Python, HTML, SQL, CSS, JavaScript, PHP, Java, C#
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>> Relevant Coursework</template>
      <template #content>
        <div class="content">
          Data Structures Algorithm Design and Analysis, Database Manipulation
          and Design, Web and Internet Programming, Software Engineering
          Principles, Discrete Mathematics, Software Engineering Practicum,
          Operating Systems
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>> Previous work experience</template>
      <template #content>
        <div class="subtitle">
          Building Supervisor Independent School District 196, Fall 2019 -
          Summer 2022
        </div>
        <div class="content">
          Provided school building security during Community Education
          activities by directing participants and instructors to their assigned
          classrooms, areas, and building resources while monitoring the
          building for potential concerns.<br />
          Assisted instructors in setup and teardown and ensured that they had
          everything they needed to make their class or activity run
          smoothly.<br />
          Developed positive relationships with other building staff such as
          teachers, custodians, and administration and ensured that their
          classrooms and workspaces were respected by activity participants and
          ready for the next school day.<br />
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>> Community Engagement</template>
      <template #content>
        <div class="subtitle">
          OutFront Minnesota Youth Council and Volunteer Work
        </div>
        <div class="content">
          As a member of the Youth Council, provided youth insight to adult
          activists within the organization.<br />
          Participated in planning for OutFront’s Youth Summit and other youth
          events, as well as participating in wider organization activities such
          as fundraising events.<br />
          As a volunteer, assisted with data entry and organization as well as
          setup and tear down of demonstrations.<br />
        </div>
      </template>
    </Card>
  </div>
  <!-- </div> -->
</template>
<style>
.resumeCard {
  background: rgba(192, 132, 252, 0.04);
  margin: 2%;
  line-height: 2;
  border-color: #c084fc;
}
.subtitle {
  font-size: 20px;
}
.content {
  margin-left: 30px;
}
</style>
<script></script>
