
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-light to-white py-12 md:py-20">
      <div className="absolute inset-0 bg-sparkle-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-dancing font-bold mb-4 text-pink-dark animate-float">
              Sparkle & Shine
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0 text-gray-700">
              Discover beautiful, handcrafted jewelry that makes you feel as special as you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="jewel-btn-primary">Shop Now</Button>
              <Button className="jewel-btn-secondary">View Collections</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 rounded-full bg-purple-light blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-pink-light blur-3xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1287&auto=format&fit=crop"
                alt="Jewelry Collection"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
