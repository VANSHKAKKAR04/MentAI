import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
            Powerful Features for Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {feature.icon}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto text-center">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <h3 className="text-5xl font-bold">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Follow four simple steps to advance your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mt-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {testimonial.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      width={40}
                      height={40}
                      src={item.image}
                      alt={item.author}
                      className="rounded-full border-2 border-primary/30"
                    />
                    <div>
                      <p className="font-semibold text-black">{item.author}</p>
                      <p className="text-sm text-black ">
                        {item.role} - {item.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-black italic relative">
                    “{item.quote}”
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full">
        <div className="mx-auto py-24 bg-blue-500 rounded-lg text-center">
          <h2 className="text-4xl text-black font-bold tracking-tight sm:text-5xl">
            Geared up for fastracking your career?
          </h2>
          <p className="text-black/90 mt-4 text-lg">
            Join thousands of professionals using AI-powered guidance.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="primary"
              className="mt-6 px-6 py-3 text-lg bg-black  text-white shadow-md hover:scale-105 transition"
            >
              Start writing your success story{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
