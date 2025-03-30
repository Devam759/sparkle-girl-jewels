
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You have successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-light/50 to-purple-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Join Our Sparkle Community</h2>
          <p className="text-lg mb-8 text-gray-700">
            Subscribe to our newsletter and get 10% off your first order, plus exclusive access to new arrivals and special offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-full bg-white/80 px-4 border-pink/30 focus-visible:ring-pink"
            />
            <Button type="submit" className="jewel-btn-primary h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
