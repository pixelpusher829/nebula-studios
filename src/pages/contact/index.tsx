import type React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-studio-dark relative min-h-screen overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-studio-accent blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-2">Get In Touch</h4>
            <h2 className="text-5xl font-display font-bold text-white mb-8">PARTNER WITH US</h2>
            
            <p className="text-studio-light text-lg mb-12 leading-relaxed">
              Whether you're a publisher, investor, or looking for business opportunities, we're always open to the next big idea.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-studio-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide mb-1">General Inquiries</h3>
                  <p className="text-studio-light">hello@nebulastudios.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-studio-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide mb-1">Headquarters</h3>
                  <p className="text-studio-light">
                    123 Innovation Dr, Suite 400<br/>
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-studio-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide mb-1">Phone</h3>
                  <p className="text-studio-light">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-studio-card p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-studio-light uppercase tracking-wider">Name</label>
                   <input type="text" className="w-full bg-studio-black/50 border border-white/10 rounded p-3 text-white focus:border-studio-accent focus:outline-none transition-colors" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-studio-light uppercase tracking-wider">Email</label>
                   <input type="email" className="w-full bg-studio-black/50 border border-white/10 rounded p-3 text-white focus:border-studio-accent focus:outline-none transition-colors" placeholder="john@example.com" />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-xs font-bold text-studio-light uppercase tracking-wider">Subject</label>
                 <select className="w-full bg-studio-black/50 border border-white/10 rounded p-3 text-white focus:border-studio-accent focus:outline-none transition-colors">
                    <option>Business Inquiry</option>
                    <option>Press / Media</option>
                    <option>Careers</option>
                    <option>Game Support</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-xs font-bold text-studio-light uppercase tracking-wider">Message</label>
                 <textarea rows={4} className="w-full bg-studio-black/50 border border-white/10 rounded p-3 text-white focus:border-studio-accent focus:outline-none transition-colors" placeholder="How can we help?"></textarea>
               </div>

               <button className="w-full bg-white text-studio-black py-4 rounded font-display font-bold uppercase tracking-wider hover:bg-studio-accent hover:text-white transition-all flex items-center justify-center gap-2 group">
                 Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};