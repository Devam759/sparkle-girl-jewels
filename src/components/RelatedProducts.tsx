
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Mock related products - in Shopify this would come from collections or recommendations API
const relatedProducts = [
  {
    id: "2",
    name: "Pearl Pendant Necklace",
    price: 32.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88552?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Gold Chain Bracelet",
    price: 19.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Rose Quartz Heart Ring",
    price: 29.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603561591411-77139e09f96b?q=80&w=1480&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Silver Charm Bracelet",
    price: 24.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1288&auto=format&fit=crop"
  }
];

const RelatedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="jewel-card">
              <CardContent className="p-0">
                <div className="relative">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover object-center"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-pink-light hover:text-pink-dark"
                  >
                    <Heart size={18} />
                  </Button>
                  <div className="absolute bottom-2 left-2 flex items-center bg-white/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star size={16} className="fill-gold-dark text-gold-dark mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium text-lg mb-1 line-clamp-1 hover:text-pink-dark transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-pink-dark font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button className="jewel-btn-primary text-sm flex-grow">
                  <ShoppingCart size={16} className="mr-1" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
