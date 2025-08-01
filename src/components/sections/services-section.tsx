import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from '@/lib/portfolio-data';

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I offer my expertise to help you build robust and innovative data solutions.
          </p>
        </div>
        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="text-center p-4 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader className="items-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
