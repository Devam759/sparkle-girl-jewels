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

        {/* Main Content */}
        <div className="mt-8 md:mt-0">
          {/* Mobile Layout: Heading → Image → Content */}
          <div className="flex flex-col md:hidden">
            {/* Heading */}
            <h2 className="text-4xl font-dancing font-bold mb-6 text-pink-dark animate-float text-center">
              Elegance in Every Detail
            </h2>
            {/* Image */}
            <div className="flex justify-center mb-6">
              <div className="relative max-w-[80%] mx-auto">
                <div className="absolute -top-4 -left-4 w-48 h-48 rounded-full bg-purple-light blur-3xl opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-pink-light blur-3xl opacity-60"></div>
                <img
                  src="public/necklace_hero.webp"
                  alt="Jewelry Collection"
                  className="w-full h-auto rounded-lg shadow-xl relative z-10 hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
            {/* Content */}
            <div className="text-center mb-8">
              <p className="text-lg max-w-md mx-auto text-gray-700 leading-relaxed">
                Discover Subhag's exquisite collection of handcrafted jewelry that captures the essence of timeless beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="jewel-btn-secondary hover:scale-105 transition-transform">New Arrivals</Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Image on right, Heading + Content on left */}
          <div className="hidden md:flex md:flex-row items-center px-8">
            {/* Left Side: Heading + Content */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-6xl font-dancing font-bold mb-6 text-pink-dark animate-float">
                Elegance in Every Detail
              </h2>
              <p className="text-xl mb-6 max-w-md text-gray-700 leading-relaxed">
                Discover Subhag's exquisite collection of handcrafted jewelry that captures the essence of timeless beauty.
              </p>
              <div className="flex gap-4 justify-start">
                <Button className="jewel-btn-secondary hover:scale-105 transition-transform">New Arrivals</Button>
              </div>
            </div>
            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative max-w-[80%] mx-auto">
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
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gold-light rounded-full blur-2xl opacity-30"></div>
      <div className="absolute top-12 right-12 w-16 h-16 bg-pink rounded-full blur-2xl opacity-30"></div>
    </section>
  );
};

export default Hero;