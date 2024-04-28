"use client"

import { FaGithub, FaHashnode, FaLinkedin, FaMailchimp, FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { Button, FloatButton, Tag, Tooltip } from 'antd';
import Project from "./components/project";
import { Container } from "./components/container";
import Feedbacks from "./components/feedbackcard";
import { MdEmail } from "react-icons/md";
import { SiShowwcase } from "react-icons/si";
import Outro from "./components/outro";
import SlantingCardsContainer from "./components/slanting-cards";

export default function Page() {
  return (
    <Container className="mx-auto flex max-w-3xl flex-col items-stretch gap-10 py-10">
      <div className='w-full grid justify-items-center gap-y-3 sm:grid-cols-2 sm:justify-self-stretch sm:gap-y-0 sm:justify-items-start'>
        <h1 className='mb-2 text-2xl font-extrabold tracking-tighter'>{`Hi, I'm Shivam 👋`}</h1>
        <div className='grid w-full justify-center sm:justify-end'>
          <div className='w-full grid grid-cols-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] justify-items-end gap-3'>
            <Link href="https://github.com/Shivam-Katare" target='_blank'>
              <FaGithub className='text-2xl' />
            </Link>

            <Link href="https://twitter.com/Shivamkatare_27" target='_blank'>
              <FaSquareXTwitter className='text-2xl' />
            </Link>

            <Link href="https://www.linkedin.com/in/shivam-katare/" target='_blank'>
              <FaLinkedin className='text-2xl' style={{ color: "blue" }} />
            </Link>

            <Link href="https://shivamkatareblog.hashnode.dev/" target='_blank'>
              <FaHashnode className='text-2xl text-blue-500' />
            </Link>

            <Link href="mailto:katare27451@gmail.com" target='_blank'>
              <MdEmail className='text-2xl' style={{ color: "red" }} />
            </Link>

            <Link href="https://www.showwcase.com/shivam-katare" target='_blank'>
              <SiShowwcase className='text-2xl' style={{ color: "black" }} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p>I am a frontend developer and technical writer who loves being a part of the open-source community.
          I work at <Link href="https://triallies.com/" target='_blank'><Tag className="mr-2" color='volcano'>Triallies LLC</Tag></Link>as a frontend developer,
          where I enjoy collaborating with and learning from my colleagues. I am also a contributor at <Link href="https://reactplay.io/" target='_blank'><Tag className='mr-2 font-bold text-black' color='#1d1628'>ReactPlay</Tag></Link> and have worked with various communities and organizations. Check out about my work <Link href="/work" className='text-blue-500 font-extrabold'>here</Link>.
        </p>
      </div>

      <div className='text-center'>
        I write about web development, including JavaScript, React, Next.js, Tailwind CSS, and more.
        Also, I share my experiences as a developer and the latest tech industry trends.
      </div>

      <h2 className='text-[30px] text-center font-semibold tracking-tighter'>Projects</h2>
      <Project />

      <div className="w-full grid place-items-center">
      <Tooltip title="Take me to Github" placement="bottom" className='mt-3'>
          <Link href='https://github.com/Shivam-Katare?tab=repositories' target='_blank'>
            <Button className='bg-black text-white hover:bg-white' icon={<FaGithub />}>
              See all on Github
            </Button>
          </Link>
        </Tooltip>
      </div>

      <div className='text-center'>
        <p>
          I participate in hackathons and writeathons to improve my skills, learn new technologies, and connect with other developers. Below are some of my winning projects and articles.
        </p>
      </div>

      <SlantingCardsContainer />

      <h3 className='text-[20px] font-normal text-center'>A collection of kind words and positive comments from others. 😊</h3>

      <Feedbacks />

      <Outro />
      <FloatButton.BackTop />
    </Container>
  )
}
