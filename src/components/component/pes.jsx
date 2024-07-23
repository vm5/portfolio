import { Badge } from './badge';
import Link from "next/link";

export default function Pes() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                Vedant Marathe
              </h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Computer Science Engineering Student | Analytical | Organized | Detail-oriented | Passionate Learner | Aspiring Computer Science student looking forward to contribute to the organization by ways of structured and meticulous work style 
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/pfp.png"
              width="400"
              height="400"
              alt="Vedant Marathe"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">PES University, Bangalore</h3>
              <p className="text-muted-foreground">Btech in Computer Science Engineering</p>
              <p className="text-muted-foreground">Expected Graduation: 2026</p>
              <p className="text-muted-foreground">CGPA: 8.38 (Until Sem-3)</p>
            </div>
            <img
              src="/pes.png"
              width="550"
              height="310"
              alt="PES University"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-4">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Web Development</h3>
                    <p className="text-muted-foreground">HTML, CSS, JavaScript, MongoDB, ReactJS, NodeJS, ExpressJS, NextJS</p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Programming Languages</h3>
                    <p className="text-muted-foreground">C, Python, Go, C++, Mojo for AI development, Javascript, Typescript, Linux commands (Ubuntu)</p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Computer Science Fundamentals</h3>
                    <p className="text-muted-foreground">Computer Networks, Computer Architecture, Operating Systems, Data structures, Algorithms</p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Databases</h3>
                    <p className="text-muted-foreground">MongoDB, MySQL</p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Other skills</h3>
                    <p className="text-muted-foreground">English Proficiency written and spoken, effective communication, listening and soft skills, Github commands</p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="/skills.png"
              width="550"
              height="310"
              alt="Skills"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Exam Registration portal</h3>
              <p className="text-muted-foreground">
                Developed a fully functional website using the MERN stack, including features like candidate registration and a list of other important information related to the examination.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">Vanilla Javascript</Badge>
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
            </div>
            <img
              src="/proj1.png"
              width="550"
              height="310"
              alt="exam Website"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/proj2.png"
              width="550"
              height="310"
              alt="cricket"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Cricket Match ticket booking portal</h3>
              <p className="text-muted-foreground">
                Developed a fully functional website using the MERN stack, including features like user sign up and sign in, booking a seat and using API for fetching data of lost and won cricket matches.
              </p>
              <div className="flex gap-2">
                <Badge variant = "secondary">API</Badge>
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Simple toll plaza system using Arduino Uno</h3>
              <p className="text-muted-foreground">
                Developed a fully functional toll plaza system where a HC-SR04 sensor was used to detect vehicle movements, thereby, allowing them to pass through.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Arduino IDE</Badge>
              </div>
            </div>
            <img
              src="/proj3.png"
              width="550"
              height="310"
              alt="arduino"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Rendering timezones by using a TCP connection (Transmission Control Protocol)</h3>
              <p className="text-muted-foreground">
                Developed a fully functional interface to fetch timezones like IST, GMT etc
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">SSL</Badge>
              </div>
            </div>
            <img
              src="/proj4.png"
              width="550"
              height="310"
              alt="arduino"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Clubs and Activities</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Avions- The aviation club</h3>
              <p className="text-muted-foreground">
                Served as a member of the Aviation Club.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Workshops</Badge>
                <Badge variant="secondary">Testing</Badge>
                <Badge variant="secondary">Designing</Badge>
                <Badge variant="secondary">Test and fabricate several UAVs (unmanned aerial vehicle)</Badge>
              </div>
            </div>
            <img
              src="/club.png"
              width="550"
              height="310"
              alt="Coding Club"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-12 w-full shrink-0 items-center px-4 md:px-6 border-t animate-fade-in">
        <p className="text-lg text-muted-foreground">Links to:</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://linkedin.com/in/vedant-marathe-723b1b243" className="text-lg hover:underline underline-offset-4 hover:animate-bounce" prefetch={false}>
            LinkedIn
          </Link>
          <Link href="https://github.com/vm5" className="text-lg hover:underline underline-offset-4 hover:animate-bounce" prefetch={false}>
            GitHub
          </Link>
          <Link href="https://leetcode.com/vm5" className="text-lg hover:underline underline-offset-4 hover:animate-bounce" prefetch={false}>
            Leetcode
          </Link>
          <Link href= "#"className="text-lg hover:underline underline-offset-4 hover:animate-bounce" prefetch={false}>
          Email: vedantmarathe050104@gmail.com 
          </Link>
        </nav>
      </footer>
    </div>
  )
}
