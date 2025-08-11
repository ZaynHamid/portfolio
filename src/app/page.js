import ResponsiveAppBar from "./components/navbar";
import Hero from "./components/hero";
import Experience from "./components/experience";
import ContactForm from "./components/contact";
import Intro from "./components/intro";

export default function Home() {
  return (
    <>
    <ResponsiveAppBar/>
    <Hero />
    <Intro />
    <Experience />
    <ContactForm />
    <footer style={{ textAlign: "center", padding: "20px", borderTop: "0.05px solid #cccccc41" }}>
      Zayn
    </footer>
    </>
  );
}
