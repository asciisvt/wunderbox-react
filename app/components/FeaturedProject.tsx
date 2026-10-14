import CallToAction from "../../components/CallToAction";

export default function FeaturedProject() {
    return (
        <div className="h-[50dvh] w-full flex flex-row px-12 py-6 bg-rosy-copper-500">
            <div className="flex-1">

            </div>
            <div className="flex-1 flex flex-col items-start justify-around text-parchment-100 font-nunito">
                <div>
                    <p>wunderbox.games presents...</p>
                    <h2 className="text-6xl font-extrabold ">BOMBVEST</h2>

                    <p className="mt-4 text-lg font-bold italic">PERFORM, SURVIVE, REPAY YOUR DEBTS!</p>
                    <p className="text-lg">Strap a bomb to your chest and enter the arena. Complete challenges, scavange for supplies,
                        and decide how far you're willing to stray from the beaten path before the clock runs out.
                        The audience is watching. The host is waiting. Put on a good show, and break a leg.</p>
                </div>
                <div className="">
                    <CallToAction href="/featured-project" text="Learn More" icon="" />
                </div>
            </div>
        </div>
    );
}