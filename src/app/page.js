import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomeName from "@/components/homeName";
import HomeOfferings from "@/components/HomeOfferings";
import HomeAbout from "@/components/homeAbout";
import HomeForm from "@/components/homeForm";

export default function Home() {
  return (
    <main className="w-screen h-fit flex flex-col items-center justify-center">
      <Navbar />
      
      <HomeName />

      <HomeAbout />

      <HomeOfferings />

      <HomeForm />

      <Footer />
    </main>
  );
}
