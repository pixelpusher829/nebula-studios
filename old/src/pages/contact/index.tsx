
import type React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
    return (
        <section className="pt-32 pb-24 bg-studio-dark relative min-h-screen overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-studio-accent blur-[150px] rounded-full translate-x-1/2 -translate-x-1/2" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};