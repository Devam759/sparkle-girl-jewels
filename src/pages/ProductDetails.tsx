
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Plus, Minus, Heart, Share2, TruckIcon, RotateCcw, Shield } from "lucide-react";

// Mock product data (this would normally come from Shopify API)
const product = {
  id: "1",
  title: "Crystal Butterfly Earrings",
  price: 24.99,
  compareAtPrice: 34.99,
  description: "Beautiful handcrafted butterfly earrings with crystal details. These stunning earrings catch the light beautifully and add a touch of elegance to any outfit.",
  images: [
    "https://images.unsplash.com/photo-1635767798638-3665a373f195?q=80&w=1460&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1287&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88552?q=80&w=1374&auto=format&fit=crop"
  ],
  variants: [
    { id: "v1", title: "Silver", available: true, inventory: 10 },
    { id: "v2", title: "Gold", available: true, inventory: 5 },
    { id: "v3", title: "Rose Gold", available: false, inventory: 0 }
  ],
  rating: 4.8,
  reviewCount: 124,
  productType: "Earrings",
  vendor: "Sparkle Girl Jewels"
};

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("v1");

  const handleQuantityChange = (amount: number) => {
    const newQuantity = Math.max(1, quantity + amount);
    setQuantity(newQuantity);
  };

  const variant = product.variants.find(v => v.id === selectedVariant) || product.variants[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs - common in Shopify themes */}
        <div className="bg-muted/30 py-2">
          <div className="container mx-auto px-4">
            <div className="text-sm text-gray-600">
              Home / {product.productType} / {product.title}
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-pink/10">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 border-2 rounded-md overflow-hidden ${
                        selectedImage === index ? "border-pink" : "border-transparent"
                      }`}
                    >
                      <img src={image} alt={`${product.title} ${index}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-pink-dark font-medium">{product.vendor}</div>
                  <h1 className="text-3xl font-dancing font-bold text-gray-800 mb-2">{product.title}</h1>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < Math.floor(product.rating) ? "#FFD180" : "none"}
                          stroke={i < Math.floor(product.rating) ? "#FFD180" : "#cccccc"}
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.reviewCount} reviews)</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-pink-dark">${product.price.toFixed(2)}</span>
                    {product.compareAtPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.compareAtPrice.toFixed(2)}</span>
                    )}
                    {product.compareAtPrice && (
                      <span className="px-2 py-1 bg-pink-light text-pink-dark text-sm font-medium rounded-full">
                        Save ${(product.compareAtPrice - product.price).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600">{product.description}</p>

                {/* Variant Selection - Similar to Shopify option selectors */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Color</Label>
                    <RadioGroup 
                      defaultValue={selectedVariant}
                      onValueChange={setSelectedVariant}
                      className="flex space-x-4"
                    >
                      {product.variants.map((variant) => (
                        <div key={variant.id} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={variant.id} 
                            id={variant.id} 
                            disabled={!variant.available}
                            className={variant.available ? "" : "opacity-50"}
                          />
                          <Label 
                            htmlFor={variant.id} 
                            className={`text-sm ${!variant.available ? "text-gray-400 line-through" : ""}`}
                          >
                            {variant.title} {!variant.available && "(Sold out)"}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Inventory Status - Common in Shopify themes */}
                  {variant && variant.available && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Availability</span>
                        <span className="font-medium text-pink-dark">In Stock: {variant.inventory} left</span>
                      </div>
                      <Progress value={(variant.inventory / 20) * 100} className="h-2" />
                    </div>
                  )}

                  {/* Quantity selector - Common in Shopify themes */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Quantity</Label>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        className="h-10 w-10 rounded-full"
                      >
                        <Minus size={16} />
                      </Button>
                      <div className="h-10 w-16 flex items-center justify-center border border-input rounded-full">
                        {quantity}
                      </div>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleQuantityChange(1)}
                        disabled={!variant.available || quantity >= variant.inventory}
                        className="h-10 w-10 rounded-full"
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>

                  {/* Add to Cart - Main action in Shopify product pages */}
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3 py-4">
                    <Button className="jewel-btn-primary col-span-4 h-12">
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 col-span-1 rounded-full">
                      <Heart size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 col-span-1 rounded-full">
                      <Share2 size={20} />
                    </Button>
                  </div>

                  {/* Shipping Information - Often seen in Shopify themes */}
                  <div className="space-y-3 border-t border-b py-4 my-4 border-gray-200">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <TruckIcon size={18} />
                      <span>Free shipping on orders over $50</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <RotateCcw size={18} />
                      <span>30-day returns</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Shield size={18} />
                      <span>Secure checkout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs - Common Shopify product page feature */}
        <section className="py-10 bg-muted/20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="description" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6 bg-white rounded-b-lg shadow-sm mt-2">
                <p className="text-gray-600">
                  {product.description}
                  <br /><br />
                  These beautiful butterfly earrings are handcrafted with care using high-quality materials.
                  The crystal detailing catches the light as you move, creating a stunning sparkling effect.
                  Perfect for everyday wear or special occasions.
                </p>
              </TabsContent>
              <TabsContent value="details" className="p-6 bg-white rounded-b-lg shadow-sm mt-2">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Material</div>
                    <div>Sterling Silver with Crystal</div>
                    <Separator className="col-span-2" />
                    
                    <div className="font-medium">Dimensions</div>
                    <div>1.2 x 0.8 inches</div>
                    <Separator className="col-span-2" />
                    
                    <div className="font-medium">Weight</div>
                    <div>3 grams</div>
                    <Separator className="col-span-2" />
                    
                    <div className="font-medium">Care Instructions</div>
                    <div>Clean with soft cloth, avoid contact with chemicals</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-6 bg-white rounded-b-lg shadow-sm mt-2">
                <div className="text-center text-gray-600 py-10">
                  <p>Customer reviews are coming soon!</p>
                  <Button variant="link" className="text-pink-dark mt-2">Be the first to write a review</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products - Common Shopify feature */}
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
