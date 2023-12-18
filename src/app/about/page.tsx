"use client"
import Navbar from "@/components/Navbar";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-4 pt-[75px] w-full">
      <div className="center">
      <h1 className="xl:text-5xl font-bold">About</h1>
      <span className="inline-block w-[75%] pt-1">
      <p className="mt-.5 text-[17px] text-left">
        <b><a href="https://github.com/strafechat">StrafChat</a></b> is a web application created by <b><a href="https://github.com/brydenisnotsmart">Bryden Calawy</a></b> with the intentions to provide everyone an alterntive chatapp with freedown of speech. StrafeChat is committed to providing a <b>safe</b> and secure environment for everyone, with whatever beliefs.
      </p>
        </span>
        <h1 className="xl:text-3xl mt-5">Team Members:</h1>
        <span className="text-[17px] text-sm inline-block">
        <li className="text-left"><b><a href="https://github.com/brydenisnotsmart">BrydenIsNotSmart</a></b> (Founder & Developer)</li>
        <li className="text-left"> <b><a href="https://github.com/rtgamingwdt">YoItsRT</a></b> (Frontend & Backend Lead)</li>
        <li className="text-left"> <b><a href="https://github.com/shadowlp174">ShadowLp174</a></b> (Voice Server & OAuth Lead)</li>
        <li className="text-left"> <b><a href="https://github.com/forgetfulskybro">ForGetFulSkyBro 🐢</a></b> (Mascot)</li>
        <li className="text-left"> <b><a href="https://github.com/aleksdevscode">Aleks</a></b> (UI Desgin Lead)</li>
        <li className="text-left"> <b><a href="https://github.com/cinnamonsroll">Pancake</a></b> (Contributor)</li>
        </span>
        </div>
    </div>
    </div>
  );
}
