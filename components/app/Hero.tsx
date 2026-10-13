export default function Hero() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground">
            {/* Animated hero content */}
            <div></div>
            <div className="flex flex-col mt-8 text-left font-nunito">
                <h1 className="flex flex-col text-5xl font-extrabold ">
                    <span className="text-steel-blue-500">games,</span>
                    <span className="text-onyx-600">experiments,</span>
                    <span className="text-rosy-copper-500">and interactive stuff.</span>
                </h1>
                <p className="mt-4 text-lg">Your ultimate destination for games, blogs, and more.</p>
            </div>
        </div>
    )
}