import { Icon } from "@iconify-icon/react";

export default function Featured() {
  return (
    <div
      id="featured"
      className="font-nunito bg-parchment-200 after:bg-rosy-copper-500 relative mx-8 mb-16 px-8 py-14 shadow-[5px_5px_0_var(--color-onyx-900)] after:absolute after:inset-0 after:-z-10 after:translate-x-3.5 after:translate-y-6 after:-rotate-1 after:content-['']"
    >
      <h1 className="text-rosy-copper-500 bg-parchment-200 absolute -top-4 -left-3 flex w-fit -rotate-6 items-center px-6 py-4 text-4xl font-bold tracking-wider shadow-[10px_10px_0_var(--color-onyx-900)]">
        <Icon icon="charm:north-star" className="mr-2 inline-block"></Icon>
        featured project
      </h1>
      <div className="flex h-full w-full items-stretch justify-center gap-8">
        <div className="flex flex-1 overflow-hidden border-4">
          <img
            src="/images/bombvest-concept.png"
            className="object-cover"
          ></img>
        </div>
        <div className="text-parchment-900 flex h-full w-full flex-1 flex-col items-start justify-start">
          <h2 className="text-2xl font-light tracking-wider">
            IN DEVELOPMENT<span className="text-rosy-copper-500 mx-4">/</span>
            SINGLE-PLAYER FPS
          </h2>
          <hr className="border-onyx-900 mt-2 mb-4 w-full border" />
          <div className="h-auto w-full">
            <img src="/images/bombvestlogo.svg" className="h-auto w-full"></img>
          </div>
          <h2 className="font-oswald mt-8 text-2xl font-bold tracking-widest">
            PREFORM, SURVIVE, REPAY YOUR DEBTS.
          </h2>
          <hr className="border-onyx-900 mt-2 mb-4 w-full border" />
          <p className="max-w-[90%] text-xl font-semibold tracking-wide">
            Armed with bomb vests and a limited arsenal, enter the arena.
            Complete challenges, scavange for supplies, and decide how much
            you're willing to risk to entertain the crowd. Put on a good show,
            and break a leg.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/software/bombvest"
              className="text-rosy-copper-500 bg-banana-cream-500 border-onyx-900 flex items-center border-3 px-8 py-4 text-3xl font-semibold shadow-[10px_10px_0_var(--color-onyx-900)]"
            >
              <Icon
                icon="charm:north-star"
                className="mr-2 inline-block"
              ></Icon>
              view game
            </a>
            <a
              href="/software"
              className="flex items-center px-8 py-4 text-xl font-medium"
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
