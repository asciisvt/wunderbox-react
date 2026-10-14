import MainNavBar from "../components/navigation/MainNavBar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";

export default function Home() {
  return (
    <div>
      <MainNavBar />
      <Hero />
      <FeaturedProject />
    </div>
  );
}
