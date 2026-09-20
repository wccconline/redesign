import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLang, useT } from '../utils/i18n';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string;

const ContactForm: React.FC = () => {
  const t = useT();
  const lang = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // `language` tells staff which language to reply in.
        body: JSON.stringify({ ...form, language: lang }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMessage(data?.errors?.[0]?.message ?? t('Something went wrong. Please try again.', 'Algo salió mal. Por favor, inténtelo de nuevo.'));
        setStatus('error');
      }
    } catch {
      setErrorMessage(t('Unable to send message. Please check your connection and try again.', 'No se pudo enviar el mensaje. Verifique su conexión e inténtelo de nuevo.'));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('Message Sent!', '¡Mensaje Enviado!')}</h3>
        <p className="text-gray-600 mb-6">{t("Thank you for reaching out. We'll get back to you soon.", 'Gracias por comunicarse con nosotros. Le responderemos pronto.')}</p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-church-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          {t('Send Another Message', 'Enviar Otro Mensaje')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            {t('Name', 'Nombre')} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-church-blue"
            placeholder={t('Your name', 'Su nombre')}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            {t('Email', 'Correo electrónico')} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-church-blue"
            placeholder={t('your@email.com', 'su@correo.com')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
          {t('Subject', 'Asunto')}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-church-blue"
          placeholder={t('What is this regarding?', '¿De qué se trata?')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          {t('Message', 'Mensaje')} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-church-blue resize-none"
          placeholder={t('How can we help you?', '¿Cómo podemos ayudarle?')}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-church-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
        {status === 'submitting' ? t('Sending…', 'Enviando…') : t('Send Message', 'Enviar Mensaje')}
      </button>
    </form>
  );
};

export default ContactForm;
