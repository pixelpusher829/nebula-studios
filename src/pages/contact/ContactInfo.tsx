
import type React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactInfo: React.FC = () => {
    return (
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
    );
};
