import { z } from 'zod';

export const engagementTypeOptions = [
  { value: 'ai-fullstack-development', label: 'AI & Full-Stack Development' },
  { value: 'solution-architecture', label: 'Solution Architecture (D365 / Power Platform)' },
  { value: 'power-platform-consulting', label: 'Power Platform Consulting' },
  { value: 'enterprise-delivery-leadership', label: 'Enterprise Delivery / Leadership' },
  { value: 'general-inquiry', label: 'General Inquiry' },
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' }),
  organization: z
    .string()
    .optional(),
  workEmail: z
    .string()
    .min(1, { message: 'Work email is required' })
    .email({ message: 'Please enter a valid work email address' }),
  engagementType: z
    .string({ required_error: 'Please select a project type' })
    .min(1, { message: 'Please select a project type' }),
  message: z
    .string()
    .min(20, { message: 'Project scope/message must be at least 20 characters' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ArchitectureMode = 'power-automate' | 'serverless';
