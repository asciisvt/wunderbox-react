import MainNavLinks from "./MainNavLinks";
import Logo from "./Logo";

export default function MainNavBar() {
    return (
        <div className="w-full sticky top-0 left-0 px-12 py-6 bg-parchment-100 border-b border-onyx-900 shadow-xs">
            <nav className="flex flex-row justify-between items-center h-12 bg-background text-foreground">
                <Logo logoColor="var(--color-onyx-800)" />
                <MainNavLinks />
            </nav>
        </div >
    )
}