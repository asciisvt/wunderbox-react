import { Icon } from "@iconify-icon/react";

export default function Featured() {
  return (
    <div
      id="featured"
      className="font-nunito bg-onyx-900 border-parchment-100 h-min-[58dvh] relative mx-8 mb-8 overflow-clip rounded-xl border-2 px-8 py-12"
    >
      <h1 className="text-rosy-copper-500 bg-parchment-100 absolute top-0 left-0 flex w-fit items-center rounded-br-xl px-5 py-3 text-2xl font-bold">
        <Icon icon="charm:north-star" className="mr-2 inline-block"></Icon>
        featured project
      </h1>
      <div className="flex h-full w-full items-center justify-center gap-8">
        <div className="border-parchment-100 flex h-full w-full flex-1 overflow-hidden rounded-xl border-2">
          <img
            src="/images/bombvest-concept.png"
            className="object-cover"
          ></img>
        </div>
        <div className="text-parchment-100 flex h-full w-full flex-1 flex-col items-start justify-start">
          <h2 className="text-2xl font-light tracking-wider">
            IN DEVELOPMENT<span className="text-rosy-copper-500 mx-4">/</span>
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
          <p className="max-w-[90%] text-xl tracking-wide">
            Armed with bomb vests and a limited arsenal, enter the arena.
            Complete challenges, scavange for supplies, and decide how much
            you're willing to risk to entertain the crowd. Put on a good show,
            and break a leg.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/software/bombvest"
              className="bg-rosy-copper-500 text-parchment-100 flex items-center rounded-full px-8 py-4 text-3xl font-semibold"
            >
              <Icon
                icon="charm:north-star"
                className="mr-2 inline-block"
              ></Icon>
              view game
            </a>
            <a
              href="/software"
              className="flex items-center rounded-full px-8 py-4 text-xl font-medium"
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
