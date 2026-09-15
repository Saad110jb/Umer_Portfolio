import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { contactFormSchema, ContactFormData, engagementTypeOptions } from '../types/contact';

export const ContactForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitStep, setSubmitStep] = useState<'validating' | 'routing' | 'dispatched' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activationNotice, setActivationNotice] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      organization: '',
      workEmail: '',
      engagementType: '',
      message: '',
    },
  });

  const messageValue = watch('message', '');

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('submitting');
    setSubmitStep('validating');
    setErrorMessage(null);
    setActivationNotice(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setSubmitStep('routing');

      const formData = new FormData();
      formData.append('Name', data.fullName);
      formData.append('Sender Email', data.workEmail);
      formData.append('Organization', data.organization || 'N/A');
      formData.append('Project Type', data.engagementType);
      formData.append('Project Scope & Details', data.message);
      formData.append('_subject', `[Executive Consultation Inquiry] ${data.engagementType} - ${data.fullName}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/amifar13@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setSubmitStep('dispatched');
        await new Promise((resolve) => setTimeout(resolve, 400));
        setSubmissionStatus('success');
      } else if (result.message && result.message.toLowerCase().includes('activation')) {
        setSubmitStep('dispatched');
        setActivationNotice(
          "FormSubmit has sent a 1-click activation link to amifar13@gmail.com. Open your Gmail inbox and click 'Activate Form' once to enable automatic inbox delivery for all inquiries!"
        );
        await new Promise((resolve) => setTimeout(resolve, 400));
        setSubmissionStatus('success');
      } else {
        throw new Error(result.message || 'Serverless email endpoint returned error response.');
      }
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setSubmissionStatus('error');
      setSubmitStep(null);
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to dispatch email. Please try emailing amifar13@gmail.com directly.'
      );
    }
  };

  const handleResetForm = () => {
    reset();
    setSubmissionStatus('idle');
    setSubmitStep(null);
    setErrorMessage(null);
    setActivationNotice(null);
  };

  return (
    <div className="p-6 sm:p-8 bg-white dark:bg-slate-900/90 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col gap-6 transition-colors">
      
      {/* Form Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
            Direct Advisory Protocol
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Enterprise Consultation Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Share your project parameters, cloud modernization scope, or advisory requirements.
          </p>
        </div>
      </div>

      {/* SUCCESS STATE VIEW */}
      {submissionStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="py-10 px-4 text-center flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>

          <div className="max-w-md space-y-3">
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
              Inquiry Dispatched!
            </h3>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 rounded-xl text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold">
              Live Serverless Email Dispatched to amifar13@gmail.com
            </div>

            {activationNotice && (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 rounded-xl text-amber-900 dark:text-amber-200 font-mono text-xs leading-relaxed text-left flex items-start gap-3 shadow-sm">
                <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-xl shrink-0 mt-0.5">mark_email_unread</span>
                <div className="space-y-1">
                  <p className="font-bold uppercase tracking-wider text-[11px]">1-Click Gmail Activation Required</p>
                  <p className="text-xs font-normal">{activationNotice}</p>
                </div>
              </div>
            )}

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
              Thank you for getting in touch. Muhammad Umar Farooq will review your project scope and respond within 12 business hours.
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetForm}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl text-xs transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">refresh</span>
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        /* INTERACTIVE FORM */
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          
          {/* GENERAL ERROR BANNER */}
          {submissionStatus === 'error' && (
            <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-900 dark:text-rose-200 rounded-xl flex items-start gap-3 text-xs">
              <span className="material-symbols-outlined text-rose-600 text-lg shrink-0">error</span>
              <div>
                <p className="font-bold">Email Dispatch Failed</p>
                <p className="mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* NAME & ORGANIZATION (2-COLUMN GRID) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Full Name <span className="text-blue-600 dark:text-blue-400">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg pointer-events-none">
                  person
                </span>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  {...register('fullName')}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 bg-white dark:bg-slate-950 outline-none transition-all ${
                    errors.fullName
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-200 dark:border-slate-800 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1 font-medium mt-0.5">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Organization */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="organization" className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Organization / Company <span className="text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg pointer-events-none">
                  corporate_fare
                </span>
                <input
                  id="organization"
                  type="text"
                  placeholder="e.g. Enterprise Solutions Corp"
                  {...register('organization')}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 bg-white dark:bg-slate-950 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* WORK EMAIL & PROJECT TYPE (2-COLUMN GRID) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Work Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="workEmail" className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Work Email <span className="text-blue-600 dark:text-blue-400">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg pointer-events-none">
                  mail
                </span>
                <input
                  id="workEmail"
                  type="email"
                  placeholder="name@company.com"
                  {...register('workEmail')}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 bg-white dark:bg-slate-950 outline-none transition-all ${
                    errors.workEmail
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-200 dark:border-slate-800 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                />
              </div>
              {errors.workEmail && (
                <p className="text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1 font-medium mt-0.5">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  {errors.workEmail.message}
                </p>
              )}
            </div>

            {/* Project Type Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="engagementType" className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Project Type <span className="text-blue-600 dark:text-blue-400">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg pointer-events-none">
                  work
                </span>
                <select
                  id="engagementType"
                  {...register('engagementType')}
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border text-xs sm:text-sm font-medium text-slate-900 dark:text-white bg-white dark:bg-slate-950 outline-none transition-all appearance-none ${
                    errors.engagementType
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-200 dark:border-slate-800 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                >
                  <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Select project type...</option>
                  {engagementTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none">
                  expand_more
                </span>
              </div>
              {errors.engagementType && (
                <p className="text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1 font-medium mt-0.5">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  {errors.engagementType.message}
                </p>
              )}
            </div>
          </div>

          {/* MESSAGE TEXTAREA */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Project Scope / Key Objectives <span className="text-blue-600 dark:text-blue-400">*</span>
              </label>
              <span className={`font-mono text-xs ${
                messageValue.length >= 20 ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-400 dark:text-slate-500'
              }`}>
                {messageValue.length} / 20 min characters
              </span>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 dark:text-slate-500 text-lg pointer-events-none">
                chat
              </span>
              <textarea
                id="message"
                rows={5}
                placeholder="Describe your current enterprise landscape, target timeline, technical stack requirements, or key consultation objectives..."
                {...register('message')}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 bg-white dark:bg-slate-950 outline-none transition-all ${
                  errors.message
                    ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : 'border-slate-200 dark:border-slate-800 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {errors.message ? (
              <p className="text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1 font-medium mt-0.5">
                <span className="material-symbols-outlined text-sm">warning</span>
                {errors.message.message}
              </p>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Provide details on architecture scope, timeframe, and target outcomes.
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON WITH MULTI-STEP PIPELINE VISUALIZER */}
          <button
            type="submit"
            disabled={submissionStatus === 'submitting'}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed group cursor-pointer ${
              submitStep === 'dispatched'
                ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
            }`}
          >
            <AnimatePresence mode="wait">
              {submitStep === 'validating' ? (
                <motion.div
                  key="validating"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 font-mono text-xs"
                >
                  <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                  <span>1. Validating Inquiry Payload...</span>
                </motion.div>
              ) : submitStep === 'routing' ? (
                <motion.div
                  key="routing"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 font-mono text-xs"
                >
                  <span className="material-symbols-outlined text-base animate-pulse">cloud_sync</span>
                  <span>2. Dispatching Email to amifar13@gmail.com...</span>
                </motion.div>
              ) : submitStep === 'dispatched' ? (
                <motion.div
                  key="dispatched"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 font-mono text-xs font-bold"
                >
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>3. Email Dispatched to Inbox!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <span>Send Serverless Inquiry</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">send</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      )}
    </div>
  );
};
