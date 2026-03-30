import HeroSection from "./components/HeroSection";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ContactButton />
    </main>
  );
}
