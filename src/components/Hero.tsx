import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-light via-white to-pink-light/20 py-16 md:py-24">
      <div className="absolute inset-0 bg-sparkle-pattern opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-20 px-4 py-3 md:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-pink-dark">Subhag</h1>
            <Button className="jewel-btn-primary">Menu</Button>
          </div>
        </nav>
        
        <div className="flex flex-col md:flex-row items-center mt-12 md:mt-0">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-dancing font-bold mb-6 text-pink-dark animate-float">
              Elegance in Every Detail
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0 text-gray-700 leading-relaxed">
              Discover Subhag's exquisite collection of handcrafted jewelry that captures the essence of timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* <Button className="jewel-btn-primary hover:scale-105 transition-transform">Explore Collection</Button> */}
              <Button className="jewel-btn-secondary hover:scale-105 transition-transform">New Arrivals</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-48 h-48 rounded-full bg-purple-light blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-pink-light blur-3xl opacity-60"></div>
              <img
                src="public/necklace_hero.webp"
                alt="Jewelry Collection"
                className="w-full h-auto rounded-lg shadow-xl relative z-10 hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gold-light rounded-full blur-2xl opacity-30"></div>
      <div className="absolute top-12 right-12 w-16 h-16 bg-pink rounded-full blur-2xl opacity-30"></div>
    </section>
  );
};

export default Hero;
