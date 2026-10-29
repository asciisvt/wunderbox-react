import HeroImage from "./HeroImage";
import { Icon } from "@iconify-icon/react";

export default function Hero() {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <HeroImage className="pointer-events-none absolute inset-x-0 inset-y-[25vmin] -z-10 h-full w-full" />
      <div className="font-nunito text-parchment-100 mt-10 flex h-full flex-col items-center justify-start">
        <h1 className="mb-4 text-center text-7xl font-extrabold">
          fun games<span className="text-rosy-copper-500">,</span> and <br />
          interactive software<span className="text-rosy-copper-500">.</span>
        </h1>
        <p className="text-center text-2xl">
          <span className="text-rosy-copper-500 font-bold">
            wunderbox<span className="text-parchment-100">.</span>games
          </span>{" "}
          is an indie game development studio <br />
          focused on creating fun and interactive software.
        </p>
        <div className="mt-8 flex flex-row gap-4">
          <a
            href="#featured"
            className="bg-rosy-copper-500 text-parchment-100 flex items-center rounded-full px-6 py-4 text-2xl font-bold"
          >
            <Icon icon="charm:north-star" className="mr-2 inline-block"></Icon>
            featured project
          </a>
          <a
            href="/software"
            className="flex items-center rounded-full px-6 py-4 text-xl font-medium"
          >
            <Icon
              icon="eos-icons:application-window"
              className="mr-3 inline-block"
            />
            explore software
          </a>
        </div>
      </div>
    </div>
  );
}
