// App component
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import SmoothScroll from "./components/SmoothScroll";
import { DarkThemeProvider } from "./components/DarkThemeProvider";
import Navbar from "./components/Navbar";
import CompaniesLogo from "./components/CompaniesLogo";
import Business from "./components/Business";
import Schedule from "./components/Schedule";
import Monitor from "./components/Monitor";

function App() {
  return (
    <DarkThemeProvider>
      <SmoothScroll>
        {/* childrens */}
        <Navbar />
        <div class="relative h-full w-full">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <Hero />
        </div>
        <CompaniesLogo />
        <Business/>
        <Schedule/>
        <Monitor/>
        {/* <CTA /> */}
        <Stats />
        <Features />
        <Testimonials />
        <Contact />
      </SmoothScroll>
    </DarkThemeProvider>
  );
}

export default App;
