import CallToAction from "../../components/CallToAction";

export default function Hero() {
    return (
        <div className="w-full h-[calc(100vh-5rem)] flex flex-row gap-10 items-center">
            <div className="flex-1 text-center text-onyx-900 flex flex-col items-end font-nunito">
                <div className="text-right w-full">
                    <h1 className="text-6xl font-fredoka font-semibold">
                        <span className="inline-block bg-steel-blue-500 text-parchment-100 px-6 py-2 w-[60%]">games,</span>
                        <br />
                        <span className="inline-block bg-onyx-700 text-parchment-100 px-6 py-2 w-[85%]">experiments,</span>
                        <br />
                        <span className="block bg-rosy-copper-500 text-parchment-100 px-6 py-2 w-full">and interactive software.</span>
                    </h1>
                </div>
                <p className="mt-4 text-xl"><span className="text-rosy-copper-500 font-bold">wunderbox.games</span> is a indie game development studio </p>
                <p className="text-xl">focused on making fun and experimental software.</p>
                <CallToAction href="/projects" text="explore projects" buttonColor="bg-rosy-copper-500" textColor="text-parchment-100"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="m9 15l-2.968 2.968A2.362 2.362 0 0 1 2 16.298V15l1.357-6.784A4 4 0 0 1 7.279 5h9.442a4 4 0 0 1 3.922 3.216L22 15v1.297a2.362 2.362 0 0 1-4.032 1.67L15 15z" />
                            <path d="m9 5l1 2h4l1-2" />
                        </g>
                    </svg>
                    } />
            </div>
            <div id="hero-grid" className="flex-1/4 h-full grid grid-cols-3 gap-4 bg-rosy-copper-500 border-l border-onyx-900 p-12 overflow-hidden">
                <div className="bg-parchment-100 rounded-lg border border-onyx-900 shadow-[3px_3px_0_var(--color-onyx-900)]">
                </div>
                <div className="bg-parchment-100 rounded-lg border border-onyx-900 shadow-[3px_3px_0_var(--color-onyx-900)]">
                </div>
                <div className="bg-parchment-100 rounded-lg border col-span-2 border-onyx-900 shadow-[3px_3px_0_var(--color-onyx-900)]">
                </div>
                <div className="bg-parchment-100 rounded-lg border border-onyx-900 shadow-[3px_3px_0_var(--color-onyx-900)]">
                </div>
                <div className="bg-parchment-100 rounded-lg border border-onyx-900 shadow-[3px_3px_0_var(--color-onyx-900)]">
                </div>
                <div className="flex flex-col align-middle justify-center">
                </div>
                <div className="flex flex-col align-middle justify-center origin-right scale-[2]">
                    <h2 className="text-5xl font-medium font-fredoka text-banana-cream-500 origin-center">
                        wunderbox.
                    </h2>
                    <h2 className="text-5xl font-medium font-fredoka text-banana-cream-500 origin-center">
                        games.
                    </h2>
                </div>
            </div>
            {/* <a href="#featured-project" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-rosy-copper-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path fill="currentColor" fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                </svg>
            </a> */}
        </div>
    )
}