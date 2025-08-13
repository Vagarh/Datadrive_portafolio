import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Message from Your Portfolio Contact Form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Contact Form Submission</Heading>
        <Section>
          <Text style={paragraph}>You've received a new message from your portfolio website.</Text>
          <Hr style={hr} />
          <Text style={label}>From:</Text>
          <Text style={paragraph}>{name}</Text>
          <Text style={label}>Email:</Text>
          <Text style={paragraph}>{email}</Text>
          <Text style={label}>Message:</Text>
          <Text style={paragraph}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
    fontSize: '24px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848',
    padding: '0 40px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#484848',
  padding: '0 40px',
};

const label = {
    ...paragraph,
    fontWeight: '700',
    paddingBottom: '0px',
    marginBottom: '0px',
}

const hr = {
  borderColor: '#f0f0f0',
  margin: '20px 0',
};
