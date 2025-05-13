'use client'

import React from 'react';
import { motion as m } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const ContactClient = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project or have a question? Fill out the form below or email me directly at <a href="mailto:amit@yaduwanshi.com" className="text-primary-600 dark:text-primary-400 underline">amit@yaduwanshi.com</a>.
          </p>
        </m.div>
        <ContactForm />
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Office hours: Mon-Fri, 9am-6pm IST</p>
          <p>Response time: within 24 hours</p>
          <p>Virtual meetings available worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default ContactClient; 