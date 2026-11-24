import ContactPage from "@/_components/contact";
import Footer from "@/_components/footer";
import Hero from "@/_components/hero";
import Services from "@/_components/services";
import WhyChooseUs from "@/_components/why-us";
import Image from "next/image";

export default function Home() {
  return (
   <main>
      <Hero />

      <section id="services">
        {/* Services section */}
        <Services/>
      </section>

      <section id="why-choose-us">
        {/* Projects section */}
      </section>

      <section id="about">
        {/* About section */}
        <WhyChooseUs/>
      </section>

      <section id="contact">
        {/* Contact section */}
        <ContactPage/>
      </section>
      <Footer/>
    </main>
  );
}
