"use client"

import Navbar from "@/components/Navbar";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const handleOpenWebApp = () => {
    router.push('https://web.strafe.chat');
  };

  const handleJoinDiscord = () => {
    router.push('https://discord.com/invite/XPyjQXaXKG');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-4 pt-[75px] text-center w-full">
        <div className="max-w-7xl mx-auto py-32 px-3 xl:px-0 xl:min-h-screen xl:py-0 text-center">
          <div className="flex gap-2 flex-row items-center space-x-44 text-center">
            <div className="flex flex-col gap-6 text-center w-full">
              <div className="">
                <h1 className="xl:text-7xl font-bold text-center">
                  No Censorship,<br></br> Just Communication.
                </h1>
                <p className="mt-2 text-[17px] text-center">
                  StrafeChat is a web application focused on no censorship. We
                  believe that people with any belief,<br></br> opinion, or view should
                  be able to communicate with each other freely.
                </p>
                <div className="flex flex-col mt-5 items-center gap-2 w-full text-center whitespace-nowrap">
                <span>
                <Button onClick={handleOpenWebApp} className="bg-[#232428] text-white font-bold rounded-[5px]" size="lg">Open Web App</Button> &nbsp;&nbsp;
                <Button onClick={handleJoinDiscord} className="bg-[white] text-gray-600 font-bold rounded-[5px]" size="lg">Join our Discord</Button>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
