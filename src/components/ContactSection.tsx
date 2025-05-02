import React, { useState } from 'react';
import { MailIcon, PhoneIcon, CalendarIcon, SendIcon } from 'lucide-react';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-700 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Book a Session
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Ready to take your music to the next level? Reach out to discuss
              your project, schedule a studio tour, or book your next session.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MailIcon className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">contact@jaliyasasanka.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <PhoneIcon className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <CalendarIcon className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Studio Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 10am - 9pm</p>
                  <p className="text-gray-400">Saturday: 12pm - 8pm</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="bg-black/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Your name" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="your.email@example.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Recording">Audio Recording</option>
                  <option value="Mixing">Mixing & Mastering</option>
                  <option value="Beat">Beat Making</option>
                  <option value="Arrangement">Music Arrangement</option>
                  <option value="Production">Full Music Production</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white py-3 px-6 rounded-md flex items-center justify-center transition-all">
                <SendIcon size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};