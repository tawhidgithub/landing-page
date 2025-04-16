import "./App.css";
import { Layout } from "antd";
import HeroSection from "./Section Component/heroSection/Component/HeroSection";
import FeatureSection from "./Section Component/Features/FeatureSection";
import ThemeSection from "./Section Component/Theam/ThemeSection";
import UserSaySection from "./Section Component/User Say/UserSaySection";
import PricingSection from "./Section Component/Pricing/PricingSection";
import GetStartedSection from "./Section Component/Get Started/GetStartedSection";
import Header from "./Section Component/Header/header";
import Footer from "./Section Component/Footer/Foorter";

function App() {
  return (
    <div className="flex flex-wrap">
      <Layout className="rounded overflow-hidden w-[100%] max-w-[calc(100%)] bg-blue-600 text-white">
        <Header />
        <HeroSection />
        <FeatureSection />
        <ThemeSection />
        <UserSaySection />
        <PricingSection />
        <GetStartedSection />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
