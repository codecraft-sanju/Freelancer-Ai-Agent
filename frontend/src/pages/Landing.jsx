import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Landing = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden font-sans">
            <Navbar />
            <Hero />
            <Features />
            <Workflow />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    );
};

export default Landing;
