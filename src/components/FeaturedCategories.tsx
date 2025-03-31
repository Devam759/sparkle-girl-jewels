import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Earrings",
    description: "Stunning earrings to frame your beautiful face",
    image: "https://images.unsplash.com/photo-1687139569587-4741ed047796?q=80&w=1374&auto=format&fit=crop",
    link: "/earrings"
  },
  {
    id: 2,
    name: "Necklaces",
    description: "Elegant necklaces for any occasion",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1287&auto=format&fit=crop",
    link: "/necklaces"
  },
  {
    id: 3,
    name: "Bracelets",
    description: "Delicate bracelets to complement your style",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1288&auto=format&fit=crop",
    link: "/bracelets"
  },
  {
    id: 4,
    name: "Rings",
    description: "Beautiful rings to express your personality",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1287&auto=format&fit=crop",
    link: "/rings"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-light/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="jewel-card group hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-dancing mb-1">{category.name}</h3>
                      <p className="text-sm text-white/90 mb-3 line-clamp-2">{category.description}</p>
                      <Button asChild className="jewel-btn-primary w-full">
                        <Link to={category.link}>Shop Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
