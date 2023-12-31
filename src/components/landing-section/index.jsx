import { Button } from "@nextui-org/react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.jpg";

const LandingSection = () => {
  return (
    <section id="landing" className="flex items-center p-10 gap-5">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          ¿Cómo podemos ayudarte hoy?
        </h1>
        <h2 className="text-xl text-zinc-500">
          Nuestro equipo de psiquiatras altamente calificados en Apodaca está
          aquí para acompañarte en tu viaje hacia el bienestar emocional.
        </h2>
        <Button className="w-full md:w-fit" size="lg" color="primary">
          <a href="https://wa.link/vlynwc" target="_blank">
            Contáctanos
          </a>
        </Button>
      </div>
      <Image
        className="hidden rounded-full md:block"
        width={500}
        alt="consciencia hero image"
        src={heroImage}
      />
    </section>
  );
};

export default LandingSection;
