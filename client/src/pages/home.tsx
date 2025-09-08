import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Menu from "@/components/menu";
import Location from "@/components/location";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
