import "./App.css";
import { Layout } from "antd";
import Header from "./Page Component/Header/header";
import FeatureSection from "./Page Component/heroSection/Component/FeatureSection";
import HeroSection from "./Page Component/heroSection/HeroSection";
import ThemeSection from "./Page Component/heroSection/Component/ThemeSection";
import UserSaySection from "./Page Component/heroSection/Component/UserSaySection";
import PricingSection from "./Page Component/heroSection/Component/PricingSection";
import GetStartedSection from "./Page Component/heroSection/Component/GetStartedSection";
import Footer from "./Page Component/Footer/Foorter";

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
