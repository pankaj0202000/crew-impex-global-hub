import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Casualshoes from "@/assets/Casual.jpg";
import formalShoes from "@/assets/leather-shoes.jpg";
import SneakerShoes from "@/assets/sneakers.jpg";
import BootShoes from "@/assets/Boots_shoes.jpg";
import SportShoes from "@/assets/Sportshoes.png";


export const productCategories = [
  {
    id: "formals",
    name: "Formals",
    description: "Elegant formal footwear crafted for professional settings and business occasions. Our formal collection combines classic designs with modern comfort.",
    image: formalShoes,
    features: ["Premium Leather", "Comfort Fit", "Elegant Design", "Durable Sole"],
  },
  {
    id: "casuals",
    name: "Casuals",
    description: "Comfortable everyday wear for all occasions. Our casual collection offers versatility and style for daily use.",
    image: Casualshoes,
    features: ["Breathable Material", "Flexible Sole", "Modern Style", "All-Day Comfort"],
  },
  {
    id: "boots",
    name: "Boots",
    description: "Durable boots designed for work and adventure. Built to withstand tough conditions while maintaining style.",
    image: BootShoes,
    features: ["Heavy Duty", "Weather Resistant", "Ankle Support", "Anti-Slip Sole"],
  },
  {
    id: "sports",
    name: "Sports",
    description: "High-performance athletic footwear engineered for peak performance. Designed for athletes who demand the best.",
    image: SportShoes,
    features: ["Lightweight", "Shock Absorption", "Breathable Mesh", "Enhanced Grip"],
  },
  {
    id: "sneakers",
    name: "Sneakers",
    description: "Trendy sneakers that blend style and comfort. Perfect for fashion-forward individuals who don't compromise on comfort.",
    image: SneakerShoes,
    features: ["Fashion Forward", "Cushioned Insole", "Versatile Design", "Premium Quality"],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">Our Products</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                        Export our Quality Products <span className="text-secondary">
                        <br />Reaching Global Markets</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Explore our extensive range of high-quality footwear, thoughtfully designed to meet international standards and exceed customer expectations.
            Each collection is carefully curated using premium materials and skilled craftsmanship, with customization options available to tailor designs, materials, finishes,
            and specifications to your exact requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
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
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-secondary font-medium gap-2">
                      View Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;