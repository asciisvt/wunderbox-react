import MainNav from "./_components/navigation/MainNav";
import Hero from "./_components/Hero";
import Featured from "./_components/Featured";
import LatestNews from "./_components/LatestNews";

export default function Home() {
  return (
    <div>
      <MainNav />
      <Hero />
      <Featured />
      <LatestNews />
    </div>
  );
}
