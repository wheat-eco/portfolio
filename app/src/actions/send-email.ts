'use server'

import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/email-templates/contact-email-template'
import { ContactConfirmationTemplate } from '@/components/email-templates/contact-confirmation-template'

const resend = new Resend(process.env.RESEND_API_KEY)

type ActionState = {
  success: boolean
  error?: string
} | null

export async function sendContactEmail(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'All fields are required' }
  }

  try {
    // Send email to you (the recipient)
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['muiz.dev.io@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactEmailTemplate({ name, email, subject, message }),
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Muiz <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for reaching out!',
      react: ContactConfirmationTemplate({ name }),
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
