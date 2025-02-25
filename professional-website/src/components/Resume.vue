<template>
  <div class="row">
    <Card class="resumeCard border-1" style="margin-top: 100px">
      <template #title>
        <div class="sm:text-5xl text-4xl">> Resume</div>
      </template>
      <template #content> <!--Add option for word or pdf version-->
        <a href="/src/assets/LeoKirchnerResume02052025NoNum.pdf" download="Leo_Kirchner_Resume.pdf"><Button
            label="Download PDF" severity="help" icon="pi pi-download" style="position: static; margin-right:10px"
            class="sm:w-auto w-full" />
        </a>
        <a href="/src/assets/LeoKirchnerResume02052025NoNum.docx" download="Leo_Kirchner_Resume.docx"><Button
            label="Download DOCX" severity="help" icon="pi pi-download" style="position: static"
            class="sm:w-auto w-full" />
        </a>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>
        <div class="sm:text-5xl text-4xl">> Education</div>
      </template>
      <template #content>
        <div class="content sm:text-base text-xs">
          University of Wisconsin - Stout, Fall 2023 - Fall 2024 <br />
          Degree: Bachelor of Science <br />
          Major: Computer Science, Interdisciplinary <br />
          Minor: Mathematics <br />
          Fall 2022 and Spring 2023 Dean's List<br />
          3.6 Current GPA <br />
        </div>
        <br>
        <div class="content sm:text-base text-xs">
          Normandale Community College, Fall 2019 - Spring 2022<br />
          Major: Computer Science Transfer Pathway<br />
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>
        <div class="sm:text-5xl text-4xl">> Technical Projects</div>
      </template>
      <template #content>
        <div class="subtitle text-sm sm:text-xl">Software Engineering Practicum, Fall 2024</div>
        <div class="content sm:text-base text-xs">
          <ul style="padding-left: 0">
            <li>
              Led a semester long project for the second part of the Computer Science capstone.
              Developed proficiency in Agile techniques while working on a website designed to
              assist backpackers in trip planning.
            </li>
            <li>
              As team lead, built leadership skills by pursuing the spirit of an Agile and democratic team;
              encouraged team decision making, deferred to team member’s expertise, and supported team morale and
              learning.
            </li>
            <li>
              Used this project to continue to hone technical capabilities in JavaScript, C#, and .NET in
              addition to Visual Studio Code, Visual Studio, and GitHub.
            </li>
          </ul>
        </div>
        <div class="subtitle text-sm sm:text-xl">Software Engineering Practicum, Spring 2024</div>
        <div class="content sm:text-base text-xs">
          <ul style="padding-left: 0">
            <li>
              Utilized techniques learned in Software Engineering Principles
              course such as Agile and Scrum, worked on a semester long team
              project for the first part of the Computer Science capstone to
              create a website to create and edit maps of solar systems.
            </li>
            <li>
              Used this opportunity to develop C# skills as well as continuing
              to develop proficiency GitHub for source code management and using
              Vue with Typescript and Prime Vue in Visual Studio Code for
              front-end development.
            </li>
            <li>
              Developed the skillset of leading by example as necessary to
              accomplish the project goals; especially with respect to group
              cohesion, cooperation, and morale.
            </li>
          </ul>
        </div>
        <div class="subtitle text-sm sm:text-xl">Personal Website</div>
        <div class="content sm:text-base text-xs">
          <ul style="padding-left: 0">
            <li>
              As a final project for Web and Internet Programming, designed and
              created a professional website using HTML, CSS, JavaScript, and
              PHP.
            </li>
            <li>
              This website was remade using Vue.js and Prime Vue.
            </li>
          </ul>
        </div>
        <div class="subtitle text-sm sm:text-xl">
          Database Manipulation and Design Final Project
        </div>
        <div class="content sm:text-base text-xs">
          <ul style="padding-left: 0">
            <li>
              Utilized SQL and MySQL Workbench with relational database
              techniques to design and implement a working database complete
              with significant and realistic table sizes, some of the data of
              which was produced with C++ code.
            </li>
          </ul>
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>
        <div class="sm:text-5xl text-3xl">> Previous Work Experience</div>
      </template>
      <template #content>
        <div class="subtitle text-sm sm:text-xl">Assistant Teacher</div>
        <div class="content sm:text-base text-xs">
          Tech Academy of Minnesota, Summer 2024
          <ul class="sm:text-base text-xs">
            <li>
              Supporting teachers by working “behind the scenes” to keep the
              class running smoothly, such as technical troubleshooting, working
              with individual students, and providing extra supervision.
            </li>
            <li>
              Worked with students one on one who were struggling with material
              and explained complex technical problems in simple languages for
              young students to understand.
            </li>
            <li>
              Actively provided a positive learning environment by encouraging
              student creativity, supporting students’ confidence as they worked
              through problems, and starting every day with an enthusiastic and
              positive attitude.
            </li>
          </ul>
        </div>
        <div class="subtitle text-sm sm:text-xl">Building Supervisor</div>
        <div class="content sm:text-base text-xs">
          Independent School District 196, Fall 2019 - Summer 2022
          <ul class="sm:text-base text-xs">
            <li>
              Provided school building security during Community Education
              activities by directing participants and instructors to their
              assigned classrooms, areas, and building resources while
              monitoring the building for potential concerns.
            </li>
            <li>
              Assisted instructors in setup and teardown and ensured that they
              had everything they needed to make their class or activity run
              smoothly.
            </li>
            <li>
              Developed positive relationships with other building staff such as
              teachers, custodians, and administration and ensured that their
              classrooms and workspaces were respected by activity participants
              and ready for the next school day.
            </li>
          </ul>
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>
        <div class="sm:text-5xl text-4xl">> Technical Skills</div>
      </template>
      <template #content>
        <div class="flex sm:flex-row justify-content-around flex-column">
          <div>
            <div class="subtitle text-sm sm:text-xl">Programs</div>
            <div class="content sm:text-base text-xs">
              <ul style="padding-left: 0">
                <li>Visual Studio</li>
                <li>Notepad++</li>
                <li>Visual Studio Code</li>
                <li>GitHub</li>
                <li>MySQL Workbench</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="subtitle text-sm sm:text-xl">Languages and Frameworks</div>
            <div class="content sm:text-base text-xs">
              <ul style="padding-left: 0">
                <div class="flex flex-column sm:flex-row justify-content-between">
                  <div>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Prime Vue</li>
                  </div>
                  <div>
                    <li>Vue.js</li>
                    <li>C#</li>
                    <li>.NET</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>Java</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div>
            <div class="subtitle text-sm sm:text-xl">Operating Systems</div>
            <div class="content sm:text-base text-xs">
              <ul style="padding-left: 0">
                <li>Windows</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </Card>
    <Card class="resumeCard border-1">
      <template #title>
        <div class="sm:text-5xl text-4xl">> Relevant Coursework</div>
      </template>
      <template #content>
        <div class="content sm:text-base text-xs">
          <ul style="padding-left: 0">
            <div class="flex sm:flex-row flex-column justify-content-around">
              <div>
                <li>Data Structures</li>
                <li>Algorithm Design and Analysis</li>
                <li>Database Manipulation and Design</li>
                <li>Web and Internet Programming</li>
                <li>Human Computer Interaction</li>
              </div>
              <div>
                <li>Software Engineering Principles</li>
                <li>Discrete Mathematics</li>
                <li>Software Engineering Practicum</li>
                <li>Operating Systems</li>
              </div>
            </div>
          </ul>
        </div>
      </template>
    </Card>

    <Card class="resumeCard border-1">
      <template #title>
        <div class="sm:text-5xl text-4xl">> Community Engagement</div>
      </template>
      <template #content>
        <div class="subtitle text-sm sm:text-xl">
          OutFront Minnesota Youth Council and Volunteer Work
        </div>
        <div class="content sm:text-base text-xs">
          <ul style="padding-left: 0">
            <li>
              As a member of the Youth Council, provided youth insight to adult
              activists within the organization.
            </li>
            <li>
              Participated in planning for OutFront’s Youth Summit and other
              youth events, as well as participating in wider organization
              activities such as fundraising events.
            </li>
            <li>
              As a volunteer, assisted with data entry and organization as well
              as setup and tear down of demonstrations.
            </li>
          </ul>
          <br />
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
