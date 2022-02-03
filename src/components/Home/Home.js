import CategorySection from "../CategorySection/CategorySection";
import CTASection from "../CTASection/CTASection";
import FavoriteSection from "../FavoriteSection/FavoriteSection";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Home() {
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
