
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-navy">Get in touch</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-navy hover:bg-navy/90">
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
