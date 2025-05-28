import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Button,
} from '@react-email/components'

interface ContactConfirmationTemplateProps {
  name: string
}

export function ContactConfirmationTemplate({
  name,
}: ContactConfirmationTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for reaching out, {name}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Reaching Out!</Heading>
          
          <Section style={section}>
            <Text style={text}>Hi {name},</Text>
            
            <Text style={text}>
              Thank you for getting in touch! I've received your message and will get back to you as soon as possible, typically within 24-48 hours.
            </Text>

            <Text style={text}>
              In the meantime, feel free to check out my latest projects and connect with me on social media.
            </Text>

            <Button
              style={button}
              href="https://your-portfolio-url.com"
            >
              View My Portfolio
            </Button>
          </Section>

          <Section style={section}>
            <Text style={signature}>
              Best regards,<br />
              Muiz Adesope<br />
              Full Stack Developer
            </Text>
          </Section>

          <Text style={footer}>
            This is an automated response to confirm we received your message.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  margin: '16px 0',
  padding: '0 20px',
}

const section = {
  padding: '0 20px',
  marginBottom: '24px',
}

const text = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 16px 0',
}

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
  margin: '24px 0',
}

const signature = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0',
}

const footer = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '24px 0 0 0',
  padding: '0 20px',
  borderTop: '1px solid #e5e7eb',
  paddingTop: '20px',
}
