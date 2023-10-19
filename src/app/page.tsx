import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Countdown from "@/components/Countdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-4 ">
        <div className="max-w-7xl mx-auto py-32 px-3 xl:px-0 xl:min-h-screen xl:py-0">
          <div className="flex gap-2 items-center space-x-44">
            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              <div className="">
                <Countdown />
                <h1 className="text-6xl text-left font-bold">
                  No Censorship, Just Communication.
                </h1>
                <p className="mt-2 text-[17px]">
                  Strafe Chat is a web application focused on no censorship. We
                  believe that people with any belief, opinion, or view should
                  be able to communicate with each other freely.
                </p>
                <div className="flex flex-row mt-3 items-center gap-2">
                  <Input
                    className="hover:opacity-75 cursor-not-allowed"
                    placeholder="john.doe123@example.com"
                    type="email"
                  />
                  <Button className="w-[18rem] hover:opacity-75 cursor-not-allowed" variant={'default'}>Subscribe To Newsletter</Button>
                </div>
              </div>
            </div>
            <Image
            className="w-1/2 h-[560px] xl:block hidden"
              src={"/next.svg"}
              width={115}
              height={225}
              alt="StrafeChat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
