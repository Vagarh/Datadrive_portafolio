"use client";

import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

import { recommendProjects } from '@/ai/flows/smart-project-recommendations';
import { projects } from '@/lib/portfolio-data';
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from 'lucide-react';
import type { Project } from '@/lib/portfolio-data';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const projectDescriptions = projects.map(
  (p) => `Title: ${p.title}. Description: ${p.description}. Technologies: ${p.technologies.join(', ')}.`
);

export default function ContactSection() {
  const [recommended, setRecommended] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { ref, inView } = useScrollIntoView();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const messageValue = form.watch("message");

  useEffect(() => {
    if (!messageValue || messageValue.length < 20) {
      setRecommended([]);
      return;
    }

    const handler = setTimeout(async () => {
      setIsLoading(true);
      try {
        const result = await recommendProjects({
          userQuery: messageValue,
          projectDescriptions: projectDescriptions,
        });
        setRecommended(result.recommendedProjects || []);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        toast({
            title: "AI Error",
            description: "Could not get recommendations. Please try again.",
            variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [messageValue, toast]);
  

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I will get back to you soon.",
    });
    form.reset();
    setRecommended([]);
  };

  const recommendedProjectDetails: Project[] = useMemo(() => {
    if (recommended.length === 0) return [];
    return projects.filter(p => recommended.some(rec => rec.includes(p.title)));
  }, [recommended]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background" ref={ref}>
      <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Have a data or AI challenge?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">Let's talk. Fill out the form or contact me at <a href="mailto:juan.felipe@email.com" className="text-accent hover:underline">juan.felipe@email.com</a></p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div>
                <Card className="bg-secondary">
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
                                <Button type="submit" disabled={form.formState.isSubmitting} className="w-full md:w-auto">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col">
                <Card className="bg-secondary flex-grow flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            Recommended Projects for You
                            {isLoading && <Loader2 className="ml-2 h-5 w-5 animate-spin text-primary" />}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        { !isLoading && recommendedProjectDetails.length > 0 ? (
                            <div className="space-y-4">
                                {recommendedProjectDetails.map((p) => (
                                    <Link key={p.title} href={p.link || '#'} passHref>
                                        <div className="p-4 border rounded-lg hover:bg-background/50 cursor-pointer transition-colors">
                                            <h4 className="font-semibold text-primary">{p.title}</h4>
                                            <p className="text-sm text-muted-foreground mt-1">{p.description.substring(0,100)}...</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="flex-grow flex items-center justify-center text-center text-muted-foreground py-8">
                                <p>
                                    {isLoading 
                                        ? "Analyzing your query..." 
                                        : "Type in the message and the AI will suggest relevant projects from my portfolio."}
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
