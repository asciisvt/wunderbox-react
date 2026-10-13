import MainNavBar from "../components/MainNavBar";
import Hero from "../components/app/Hero";
import FeaturedProject from "../components/app/FeaturedProject";

export default function Home() {
  return (
    <div>
      <MainNavBar />
      <Hero />
      <FeaturedProject />
    </div>
  );
}
