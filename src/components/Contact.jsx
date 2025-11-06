import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Zap } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_oovyoyb',     // ✅ Tu Service ID de EmailJS
        'template_xxxxxx',     // ✅ Tu Template ID de EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          project_type: formData.projectType,
        },
        'YOUR_PUBLIC_KEY'      // ✅ Tu Public Key de EmailJS
      );

      alert("✅ Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('❌ Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const projectTypes = [
    'Character Design',
    'Environment Art',
    'Product Visualization',
    'Architectural Rendering',
    'Game Assets',
    'Animation',
    'Other'
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Gmail",
      value: "rykerk113@gmail.com",
      description: "Best for project discussions and proposals",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discord",
      value: "rykerk13",
      description: "Quick communication and real-time chat",
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500 mr-4"></div>
            <MessageCircle className="w-8 h-8 text-orange-500 animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500 ml-4"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Contact</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            If you have any questions, proposals, or project ideas, feel free to contact me using the form below or through my social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I design 3D models and build rigs ready for production.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 shadow-lg hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 text-white">{method.title}</h4>
                      <p className="text-orange-500 font-semibold mb-1">{method.value}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CV Download */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl border border-gray-700/50 shadow-lg">
              <a 
                href="https://drive.google.com/file/d/1H5y-Vo14JKdXonScm0hxnFJ7FxtKKWMK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full p-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <svg className="w-6 h-6 text-white mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg text-white">Download CV</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">Start Your Project</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-orange-500 focus:bg-gray-600 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-orange-500 focus:bg-gray-600 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project Type & Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-orange-500 focus:bg-gray-600 text-white"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Subject *</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                      className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-orange-500 focus:bg-gray-600 text-white placeholder-gray-400"
                      placeholder="Project subject"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Project Details *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-orange-500 focus:bg-gray-600 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your vision, timeline, budget, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-3 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                      <Zap size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
