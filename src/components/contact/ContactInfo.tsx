import React from 'react';
import { MapPin, Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="flex justify-center">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Location</p>
              <p className="text-gray-600">Tangalle, Sri Lanka</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">hashikachathubhashaka@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
