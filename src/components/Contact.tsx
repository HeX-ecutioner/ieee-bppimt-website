import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Sparkles } from 'lucide-react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './styles/Contact.css';

// Get EmailJS config from env variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const isConfigured = !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    // Fallback: If not configured, mock a successful send after a delay so they can preview the UI.
    if (!isConfigured) {
      console.warn(
        'EmailJS variables are missing in .env. Mocking request success for development. ' +
        'Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your env configuration.'
      );

      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      // Send email via EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'IEEE BPPIMT Contact Form Submission',
          message: formData.message,
          to_name: 'IEEE BPPIMT Student Branch Team',
          to_email: 'urbadas001@gmail.com, sagnikmaitra01@gmail.com, ieee.bppimt@gmail.com',
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('EmailJS returned an unexpected status code.');
      }
    } catch (err: any) {
      console.error('EmailJS submit error:', err);
      setErrorMessage(err.text || err.message || 'Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      {/* Background elements */}
      <div className="contact-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="contact-background-glow-1"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="contact-background-glow-2"
        />
        <div className="contact-background-noise" />
        <div className="contact-background-grid" />
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-badge"
          >
            <Sparkles size={16} />
            <span>Connect with us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="contact-title"
          >
            Get In <span className="contact-highlight">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="contact-subtitle"
          >
            Have a question, feedback, or want to collaborate? Send us a message and we'll respond shortly.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="contact-grid">
          {/* Left Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="contact-info-card"
          >
            <div className="info-glow" />
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              Reach out directly or visit our campus. We are always happy to help.
            </p>

            <div className="info-details-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>B.P. Poddar Institute of Management and Technology</p>
                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p>+91 033 4061 9174</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <a href="mailto:info@bppimt.ac.in">info@bppimt.ac.in</a>
                </div>
              </div>
            </div>

            {/* Embedded map */}
            <div className="info-map-wrapper">
              <iframe
                title="BPPIMT Location Map"
                src="https://maps.google.com/maps?q=B.P.+Poddar+Institute+of+Management+and+Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="info-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Socials */}
            <div className="info-socials">
              <a href="https://www.facebook.com/bppimtofficial/" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <FiFacebook size={18} />
              </a>
              <a href="https://x.com/bppimtofficial" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <FiTwitter size={18} />
              </a>
              <a href="https://www.instagram.com/bppimt/" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <FiInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/school/bp-poddar-institute-of-management-and-technology/" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="contact-form-card"
          >
            <div className="form-glow" />

            {!isConfigured && (
              <div className="env-warning">
                <AlertCircle size={16} />
                <span>EmailJS credentials not configured in `.env`. Running in demo mode.</span>
              </div>
            )}

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="form-success-state"
                >
                  <div className="success-check-wrapper">
                    <Check size={40} className="success-check-icon" />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="send-another-btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@gmail.com"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={5}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="form-error-box"
                      >
                        <AlertCircle size={18} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <div className="submit-spinner-wrapper">
                        <div className="submit-spinner" />
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="btn-send-icon" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
