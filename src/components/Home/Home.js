import React, { useContext, useEffect } from "react";
import CategorySection from "../CategorySection/CategorySection";
import CTASection from "../CTASection/CTASection";
import FavoriteSection from "../FavoriteSection/FavoriteSection";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ProductContext } from "../../context/productContext";

export default function Home() {
  //get products state from Context
  const [products, setProducts] = useContext(ProductContext);

  //fetch products from API and save to state
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [setProducts]);

  console.log(products);

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      {/* Header End */}
      <main>
        {/* Category section */}
        <CategorySection />
        {/* Category section End*/}

        {/* Featured section */}

        <FeaturedSection />

        {/* Featured section End */}

        {/* Favorites section */}
        <FavoriteSection />
        {/* Favorites section End*/}
        {/* CTA section */}
        <CTASection />
        {/* CTA section End */}
      </main>
      {/* Footer */}
      <Footer />
      {/* Footer End*/}
    </div>
  );
}
