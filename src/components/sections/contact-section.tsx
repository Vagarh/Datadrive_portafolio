
"use client";

import { useState, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Linkedin, Github, Mail } from 'lucide-react';
import { Loader2, Send } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { CVDownloadDialog } from '@/components/ui/cv-download-dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const inView = useIntersectionObserver(ref as React.RefObject<Element>);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSending(true);
    try {
      // Enviar el formulario de contacto
      const contactResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!contactResponse.ok) {
        throw new Error('Failed to send message.');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I will get back to you soon.",
      });
      form.reset();

      // Obtener recomendaciones de proyectos
      const recommendResponse = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: values.message }),
      });

      if (recommendResponse.ok) {
        const { recommendedProjects, aiReasoning } = await recommendResponse.json();
        if (recommendedProjects && recommendedProjects.length > 0) {
          toast({
            title: "Recommended Projects For You",
            description: (
              <div>
                <p className="mb-2">{aiReasoning}</p>
                <ul className="space-y-2">
                  {recommendedProjects.map((p: any) => (
                    <li key={p.id}>
                      <Link href={`#projects`} className="font-semibold text-primary hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          });
        }
      }

    } catch (error) {
      console.error("Error in contact form submission:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Have a data or AI challenge?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">Let's talk. Fill out the form below to get in touch.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col gap-12">
                <Card className="bg-background">
                    <CardHeader>
                        <CardTitle>Contact Form</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl><Input type="email" placeholder="you@email.com" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell me about your project or idea..."
                                                {...field}
                                                rows={6}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <Button type="submit" disabled={isSending} className="w-full md:w-auto">
                                    {isSending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                                    {isSending ? "Sending..." : "Send Message"}
                                 </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <Card className="bg-background">
                    <CardHeader>
                        <CardTitle>Get in Touch</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-primary" />
                            <span className="text-foreground">Use the contact form</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Linkedin className="h-5 w-5 text-primary" />
                            <a href="https://www.linkedin.com/in/juan-felipe-c-8a010b121/" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Github className="h-5 w-5 text-primary" />
                            <a href="https://github.com/Vagarh" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                        </div>
                         <CVDownloadDialog />
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col">
                <Card className="bg-background flex-grow flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            AI-Powered Recommendations
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-center justify-center text-center text-muted-foreground py-8">
                        <p>
                            After you send a message, our AI will analyze your query and suggest the most relevant projects from my portfolio in a notification.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
});
ContactSection.displayName = "ContactSection";

export default ContactSection;
