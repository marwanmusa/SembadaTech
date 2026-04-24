import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import StatsSection from "./components/StatsSection";
import CDRAdmin from "./pages/admin/cdr/CDRAdmin";

function App() {
  const isCDRAdminRoute = window.location.pathname === "/admin/cdr";

  if (isCDRAdminRoute) {
    return <CDRAdmin />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <PortfolioSection />
        <StatsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
