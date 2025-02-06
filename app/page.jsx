import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center place-items-center xl:place-items-end xl:text-right order-2 ">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-accent">Zoppa Christoppa M Mahde</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am an experienced Frontend Developer with 2 years of
              professional expertise in the field. My passion lies in creating
              seamless digital experiences, leveraging cutting-edge technologies
              to deliver scalable and efficient solutions.
            </p>
            {/* btn and sosmed */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg">
                <Link
                  className="uppercase flex items-center gap-2"
                  target="_blank"
                  href="https://drive.google.com/file/d/1VlCpclAu5-l2xbbgWrWdOZBIRbUa16oH/view?usp=drive_link"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1  mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
