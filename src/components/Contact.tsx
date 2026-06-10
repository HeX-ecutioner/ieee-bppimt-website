import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Sparkles } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin } from '../utils/SocialIcons';
import emailjs from '@emailjs/browser';
import './styles/Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' }),
    [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle'),
    [errorMessage, setErrorMessage] = useState(''),
    formRef = useRef<HTMLFormElement>(null),
    isConfigured = !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

    if (!isConfigured) {
      console.warn('EmailJS variables missing. Mocking success.');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID, TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'IEEE BPPIMT Contact Form',
          message: formData.message,
          to_name: 'IEEE BPPIMT Team',
          to_email: 'urbadas001@gmail.com, sagnikmaitra01@gmail.com, ieee.bppimt@gmail.com',
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else throw new Error('Unexpected status code.');
    } catch (err: any) {
      setErrorMessage(err.text || err.message || 'Failed to send message.');
      setStatus('error');
    }
  };

  const inputs = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. John Doe', req: true },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'e.g. johndoe@gmail.com', req: true },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this regarding?', req: false },
  ];

  return (
    <div className="contact-page">
      <div className="contact-background">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="contact-background-glow-1" />
        <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="contact-background-glow-2" />
        <div className="contact-background-noise" />
        <div className="contact-background-grid" />
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="contact-badge">
            <Sparkles size={16} /><span>Connect with us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="contact-title">
            Get In <span className="contact-highlight">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="contact-subtitle">
            Have a question, feedback, or want to collaborate? Send us a message and we'll respond shortly.
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="contact-info-card">
            <div className="info-glow" />
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">Reach out directly or visit our campus. We are always happy to help.</p>

            <div className="info-details-list">
              {[
                { icon: MapPin, title: 'Address', lines: ['B.P. Poddar Institute of Management and Technology', 'Kolkata, West Bengal, India'] },
                { icon: Phone, title: 'Call Us', lines: ['+91 033 4061 9174'] },
                { icon: Mail, title: 'Email', link: 'mailto:info@bppimt.ac.in', linkText: 'info@bppimt.ac.in' },
              ].map((item, i) => (
                <div className="info-item" key={i}>
                  <div className="info-icon-box"><item.icon size={20} /></div>
                  <div className="info-text">
                    <h4>{item.title}</h4>
                    {item.lines?.map((line, j) => <p key={j}>{line}</p>)}
                    {item.link && <a href={item.link}>{item.linkText}</a>}
                  </div>
                </div>
              ))}
            </div>

            <div className="info-map-wrapper">
              <iframe title="BPPIMT Location Map" src="https://maps.google.com/maps?q=B.P.+Poddar+Institute+of+Management+and+Technology&t=&z=15&ie=UTF8&iwloc=&output=embed" className="info-map-iframe" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="info-socials">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/bppimtofficial/" },
                { Icon: Twitter, url: "https://x.com/bppimtofficial" },
                { Icon: Instagram, url: "https://www.instagram.com/bppimt/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/school/bp-poddar-institute-of-management-and-technology/" }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon-btn"><social.Icon size={18} /></a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="contact-form-card">
            <div className="form-glow" />
            {!isConfigured && (
              <div className="env-warning">
                <AlertCircle size={16} /><span>EmailJS credentials not configured in `.env`. Running in demo mode.</span>
              </div>
            )}

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="form-success-state">
                  <div className="success-check-wrapper"><Check size={40} className="success-check-icon" /></div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="send-another-btn">Send Another Message</button>
                </motion.div>
              ) : (
                <motion.form ref={formRef} onSubmit={handleSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="contact-form">
                  {inputs.map(f => (
                    <div className="form-group" key={f.id}>
                      <label htmlFor={f.id}>{f.label} {f.req && <span className="required">*</span>}</label>
                      <input type={f.type} id={f.id} name={f.id} value={formData[f.id as keyof typeof formData]} onChange={handleChange} placeholder={f.placeholder} required={f.req} disabled={status === 'sending'} />
                    </div>
                  ))}

                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." rows={5} required disabled={status === 'sending'} />
                  </div>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="form-error-box">
                        <AlertCircle size={18} /><span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button type="submit" className="form-submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <div className="submit-spinner-wrapper"><div className="submit-spinner" /><span>Sending Message...</span></div>
                    ) : (
                      <><span>Send Message</span><Send size={16} className="btn-send-icon" /></>
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
