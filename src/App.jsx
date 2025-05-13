// App component
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import SmoothScroll from "./components/SmoothScroll";
import { DarkThemeProvider } from "./components/DarkThemeProvider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <DarkThemeProvider>
      <SmoothScroll>
        {/* childrens */}
        <Navbar/>
        <Hero />
        <CTA />
        <Stats />
        <Features />
        <Testimonials />
        <Contact />
      </SmoothScroll>
    </DarkThemeProvider>
  );
}

export default App;