"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Team ThorVG"
          paragraph="ThorVG is a community-driven project with a team of dedicated developers and designers. We are passionate about creating powerful, accessible tools for everyone."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <img src="https://contrib.rocks/image?repo=thorvg/thorvg" alt="video image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
