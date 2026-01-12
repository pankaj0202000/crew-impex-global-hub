import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Casualshoes from "@/assets/Casual.jpg";
import formalShoes from "@/assets/leather-shoes.jpg";
import SneakerShoes from "@/assets/sneakers.jpg";
import BootShoes from "@/assets/Boots_shoes.jpg";
import SportShoes from "@/assets/Sportshoes.png";

const products = [
  {
    id: "formals",
    name: "Formals",
    description: "Elegant formal footwear for professional settings",
    image: formalShoes,
  },
  {
    id: "casuals",
    name: "Casuals",
    description: "Comfortable everyday wear for all occasions",
    image: Casualshoes,
  },
  {
    id: "boots",
    name: "Boots",
    description: "Durable boots for work and adventure",
    image: BootShoes,
  },
  {
    id: "sports",
    name: "Sports",
    description: "High-performance athletic footwear",
    image: SportShoes,
  },
  {
    id: "sneakers",
    name: "Sneakers",
    description: "Trendy sneakers for style and comfort",
    image: SneakerShoes,
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase mb-4">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Premium Footwear for{" "}
            <span className="text-secondary">Global Markets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of high-quality footwear designed to meet international standards and customer expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-secondary transition-all duration-300 hover:shadow-xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-secondary font-medium text-sm gap-2">
                    View Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              View All Products <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;