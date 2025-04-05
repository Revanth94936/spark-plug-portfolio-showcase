import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ib1dxi",   // Replace with your Service ID
        "template_6brt2y9",  // Replace with your Template ID
        form.current!,
        "edsCfofnpNkajojHD"    // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-navy">Get in touch</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="name"
            >
              Name
            </label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="message"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="min-h-[120px]"
              required
            />
          </div>
          <CardFooter className="p-0">
            <Button type="submit" className="w-full bg-navy hover:bg-navy/90">
              Send Message
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
