import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-foreground/80">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">1. Introduction</h2>
                <p>
                  This Privacy Policy describes how your personal information is collected, used, and shared when you use the contact form on this website (the "Site"). By using the Site, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">2. Information We Collect</h2>
                <p>
                  When you use our contact form, we collect the following personal information from you:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>Name:</strong> To know how to address you.</li>
                  <li><strong>Email Address:</strong> To respond to your inquiry.</li>
                  <li><strong>Message:</strong> The content of your inquiry.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">3. How We Use Your Information</h2>
                <p>
                  We use the information we collect solely for the following purposes:
                </p>
                 <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>To respond to your questions, comments, or inquiries submitted through the contact form.</li>
                  <li>To improve our website and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">4. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. The information is sent via email to us to respond to your request. Your information may be processed by our email provider (Resend) for the purpose of email delivery.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">5. Data Retention</h2>
                <p>
                  We retain the personal information collected from the contact form for as long as necessary to fulfill the purposes outlined in this privacy policy unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">6. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at the email provided on the contact page.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-2 text-primary">Disclaimer</h2>
                <p>
                  This privacy policy is a template and should not be considered legal advice. You should consult with a legal professional to ensure compliance with all applicable laws and regulations.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
