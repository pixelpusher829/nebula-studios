
import type React from 'react';
import { ArrowRight } from 'lucide-react';

export const ContactForm: React.FC = () => {
    return (
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
    );
};
