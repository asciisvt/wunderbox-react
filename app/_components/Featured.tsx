import { Icon } from "@iconify-icon/react";

export default function Featured() {
  return (
    <div
      id="featured"
      className="font-nunito bg-parchment-100 shadow-[8px_8px_0_#FFF] relative mx-8 mb-8  px-8 py-14"
    >
      <h1 className="text-rosy-copper-500 bg-parchment-100 absolute shadow-[5px_4px_0_var(--color-onyx-900)] -top-4 -left-3 flex w-fit items-center px-6 py-4 text-4xl font-bold tracking-wider">
        <Icon icon="charm:north-star" className="mr-2 inline-block"></Icon>
        featured project
      </h1>
      <div className="flex h-full w-full justify-center items-stretch gap-8">
        <div className="border-parchment-100 flex flex-1 overflow-hidden border-2">
          <img
            src="/images/bombvest-concept.png"
            className="object-cover"
          ></img>
        </div>
        <div className="text-parchment-100 flex h-full w-full flex-1 flex-col items-start justify-start">
          <h2 className="text-2xl font-light tracking-wider">
            IN DEVELOPMENT<span className="text-parchment-100 mx-4">/</span>
            SINGLE-PLAYER FPS
          </h2>
          <hr className="border-parchment-100 mt-2 mb-4 w-full" />
          <div className="h-auto w-full">
            <img src="/images/bombvestlogo.svg" className="h-auto w-full"></img>
          </div>
          <h2 className="font-oswald mt-8 text-2xl font-bold tracking-widest">
            PREFORM, SURVIVE, REPAY YOUR DEBTS.
          </h2>
          <hr className="border-parchment-100 mt-2 mb-4 w-full" />
          <p className="max-w-[90%] text-xl tracking-wide font-semibold">
            Armed with bomb vests and a limited arsenal, enter the arena.
            Complete challenges, scavange for supplies, and decide how much
            you're willing to risk to entertain the crowd. Put on a good show,
            and break a leg.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/software/bombvest"
              className="text-rosy-copper-500 bg-banana-cream-500 shadow-[4px_4px_0_var(--color-onyx-900)] flex items-center  px-8 py-4 text-3xl font-semibold"
            >
              <Icon
                icon="charm:north-star"
                className="mr-2 inline-block"
              ></Icon>
              view game
            </a>
            <a
              href="/software"
              className="flex items-center  px-8 py-4 text-xl font-medium"
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
    </div>
  );
}
