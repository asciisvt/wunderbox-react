import MainNav from "./_components/navigation/MainNav";
import Hero from "./_components/Hero";
import Featured from "./_components/Featured";
import LatestNews from "./_components/LatestNews";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-5 h-full bg-banana-cream-500 z-100">
      </div>
      <MainNav />
      <main>
        <Hero />
        <Featured />
        <LatestNews />
      </main>
    </div>
  );
}