import CallToAction from "../../components/CallToAction";

export default function Hero() {
    return (
        <div className="w-full h-screen flex flex-col items-start justify-center p-12">
            {/* Animated hero content */}
            <div></div>
            <div className="flex flex-col mt-8 text-left font-nunito">
                <h1 className="flex flex-col text-5xl font-extrabold ">
                    <span className="text-steel-blue-500">games,</span>
                    <span className="text-onyx-700">experiments,</span>
                    <span className="text-rosy-copper-500">and interactive stuff.</span>
                </h1>
                <p className="mt-4 text-xl"><span className="text-rosy-copper-500 font-bold">wunderbox.games</span> is a indie game</p>
                <p className="text-xl">development studio focused on making fun</p>
                <p className="text-xl">and experimental software.</p>
            </div>
            <CallToAction href="/projects" text="explore projects" icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="m9 15l-2.968 2.968A2.362 2.362 0 0 1 2 16.298V15l1.357-6.784A4 4 0 0 1 7.279 5h9.442a4 4 0 0 1 3.922 3.216L22 15v1.297a2.362 2.362 0 0 1-4.032 1.67L15 15z" />
                    <path d="m9 5l1 2h4l1-2" />
                </g>
            </svg>
            } />
        </div>
    )
}