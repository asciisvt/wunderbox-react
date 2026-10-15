import CallToAction from "../../components/CallToAction";

export default function FeaturedProject() {
    return (
        <div id="featured-project" className="h-[50dvh] w-full flex flex-row gap-8 px-12 py-6 text-onyx-900">
            <div className="flex-1">
                <img src="images/bombvest-concept.png" alt="Bombvest Preview" className="w-full h-full object-cover rounded-lg border-onyx-900 border shadow-[3px_3px_0_var(--color-onyx-900)]" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-around font-nunito">
                <div>
                    <p>wunderbox.games presents...</p>
                    <h2 className="text-6xl font-extrabold ">BOMBVEST</h2>

                    <p className="mt-4 text-lg font-bold italic">PERFORM, SURVIVE, REPAY YOUR DEBTS!</p>
                    <p className="text-lg">Strap a bomb to your chest and enter the arena. Complete challenges, scavenge for supplies,
                        and decide how far you're willing to stray from the beaten path before the clock runs out.
                        The audience is watching. The host is waiting. Put on a good show, and break a leg.</p>
                </div>
                <div>
                    <CallToAction href="/featured-project" text="learn more" buttonColor="bg-rosy-copper-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>

                        }
                    />
                </div>
            </div>
        </div>
    );
}