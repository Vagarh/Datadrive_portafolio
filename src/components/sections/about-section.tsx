import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <div className="space-y-4 text-lg text-foreground/80">
                <p>
                I am a Biomedical Engineer by training, with a deep passion for deciphering the stories that data tells us. My career has led me to specialize in data science, where I combine my analytical rigor with creativity to build solutions in AI, Business Intelligence, and process automation (ETL).
                </p>
                <p>
                Outside the world of code and algorithms, I am fascinated by paleontology and the incredible history of dinosaurs. I also dedicate time to the conservation of exotic species, especially reptiles and birds. This mix of interests, between cutting-edge technology and nature, defines my approach to problem-solving: a holistic, curious, and always-oriented perspective to generate a positive impact.
                </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Photo of Juan Felipe Cardona Arango"
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
