import { ContactUs } from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Main } from "@/components/Main";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <Main />
      <ContactUs />
      <Footer />
    </main>
  )
}
