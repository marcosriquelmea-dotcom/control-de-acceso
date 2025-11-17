import Header from './components/Header';
import Hero from './components/Hero';
import DashboardPanel from './components/DashboardPanel';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <DashboardPanel />
      <Features />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
