import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            AI Freelancer Agent
          </h1>
          <p className="text-gray-400 text-sm">
            Automate client acquisition, deal negotiation, and project management. Save time, scale revenue, and focus on what you love.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-purple-400 transition"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-purple-400 transition"><Github className="h-5 w-5" /></a>
            <a href="#" className="hover:text-purple-400 transition"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#features" className="hover:text-purple-400 transition">Features</a></li>
            <li><a href="#workflow" className="hover:text-purple-400 transition">Workflow</a></li>
            <li><a href="#pricing" className="hover:text-purple-400 transition">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a></li>
            <li><a href="/login" className="hover:text-purple-400 transition">Login</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Support</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">Get updates, tips, and latest features straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm w-full"
            />
            <button type="submit" className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold transition text-sm">
              <Mail className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Freelancer Agent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
