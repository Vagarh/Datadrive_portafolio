import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Sobre Mí</h2>
            <div className="space-y-4 text-lg text-foreground/80">
                <p>
                Soy un Ingeniero Biomédico de formación, con una profunda pasión por descifrar las historias que los datos nos cuentan. Mi carrera me ha llevado a especializarme en ciencia de datos, donde combino mi rigor analítico con la creatividad para construir soluciones de IA, Business Intelligence y automatización de procesos (ETL).
                </p>
                <p>
                Fuera del mundo del código y los algoritmos, me fascina la paleontología y la increíble historia de los dinosaurios. También dedico tiempo a la conservación de especies exóticas, especialmente reptiles y aves. Esta mezcla de intereses, entre la tecnología de punta y la naturaleza, define mi enfoque para resolver problemas: una perspectiva holística, curiosa y siempre orientada a generar un impacto positivo.
                </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Foto de Juan Felipe Cardona Arango"
                  width={400}
                  height={400}
                  className="relative rounded-full object-cover shadow-lg border-4 border-background"
                  data-ai-hint="professional portrait"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
