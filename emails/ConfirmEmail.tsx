import * as React from 'react';
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface SlackConfirmEmailProps {
  securityCode: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000/images';

const ConfirmEmail = ({
  securityCode ='123456',
}: SlackConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirma tu dirección de correo electrónico </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            alt='DoCom'
            height='60'
            src={`https://raw.githubusercontent.com/inagib21/ReactEmail/main/static/docom-logo.jpg`}
            width='60'
          />
        </Section>
        <Heading style={h1}>Confirma tu correo electrónico 😊</Heading>
        <Text style={heroText}>
        Tu código de confirmación está abajo, 
        ingrésalo en tu ventana de navegador abierta para confirmar tu cuenta.
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>{securityCode}</Text>
        </Section>

        <Text style={text}>
        Si no solicitaste este correo electrónico, ponte en contacto con :
        </Text>
        <a target="_blank"
         href="mailto:docommex@gmail.com">docommex@gmail.com</a>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: '66%' }}>
              <Img
                alt='DoCom'
                height='30'
                src={`${baseUrl}/docom-black-md.png`}
                width='120'
              />
            </Column>
            <Column>
              <Row>
                <Column>
                  <Link href='/'>
                    <Img
                      alt='Slack'
                      height='32'
                      src={`${baseUrl}/static/slack-twitter.png`}
                      style={socialMediaIcon}
                      width='32'
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href='/'>
                    <Img
                      alt='Slack'
                      height='32'
                      src={`${baseUrl}/static/slack-facebook.png`}
                      style={socialMediaIcon}
                      width='32'
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href='/'>
                    <Img
                      alt='LinkedIn'
                      height='32'
                      src={`${baseUrl}/static/slack-linkedin.png`}
                      style={socialMediaIcon}
                      width='32'
                    />
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            href='https://www.linkedin.com/company/docomdev'
            rel='noopener noreferrer'
            style={footerLink}
            target='_blank'
          >
            LinkedIn
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            href='https://www.instagram.com/docomdev/'
            rel='noopener noreferrer'
            style={footerLink}
            target='_blank'
          >
            Instagram
          </Link>
        
       
        
        
          <Text style={footerText}>
            ©2023 DoCom, LLC. <br />
            
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
};

const footerLink = {
  color: '#b7b7b7',
  textDecoration: 'underline',
};

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
  width: '100%',
};

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '32px',
};

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
};

const logoContainer = {
  marginTop: '32px',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
};

const codeBox = {
  background: 'rgb(245, 244, 245)',
  borderRadius: '4px',
  marginRight: '50px',
  marginBottom: '30px',
  padding: '43px 23px',
};

const confirmationCodeText = {
  fontSize: '30px',
  textAlign: 'center' as const,
  verticalAlign: 'middle',
};

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
};

export default ConfirmEmail;
