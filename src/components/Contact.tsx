import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { SocialLinks } from '../components/contact/SocialLinks';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (


    <div className=" bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          <p className="mt-4 text-lg text-gray-600">
            
          </p>
        </div>
        
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-12">
            <ContactInfo />
            <SocialLinks />
          </div>
          <ContactForm />
        </div>
        
      </div>
    </div>
  );
}


export default Contact;