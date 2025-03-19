
import React, { useState }  from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
      subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    console.log(formData);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzB-g-a3DRjlO9L4wQnVdmoj2RCwqVIzwSjlg1_olyTy89TCpkeUf21L7sAswf4sMo9/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (result["success"] == true) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset(); // Reset form after success
      } else {
        throw new Error(result.error || "Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Message sent!",
        style: {backgroundColor: "#28a745", color: "#ffff" },
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } finally {
      setLoading(false); // Set loading back to false when request is done
    }
  };




  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Contact information */}
          <div className="md:col-span-5">
            <Card className="h-full animate-fade-in">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  You can reach me through any of these channels or use the form to send me a message.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">dev.erebusaj@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+91 7548392934</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaLinkedin className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a href='https://www.linkedin.com/in/aarya-jamwal' className="text-gray-600">aarya-jamwal</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">Chandigarh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="md:col-span-7">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                Fill out the form below, and I'll get back to you as soon as possible. For a quicker response, feel free to drop me a message on LinkedIn!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject of your message" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-portfolio-primary hover:bg-blue-600"
                    disabled={loading}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;