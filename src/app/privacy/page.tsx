import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cardly",
  description: "Cardly's privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-foreground/50">Last updated: February 11, 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="prose prose-lg mx-auto max-w-3xl px-6 text-foreground/80 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-brand-navy [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:leading-relaxed [&_li]:mt-1">
          <h2>1. Introduction</h2>
          <p>
            Cardly (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the &quot;Service&quot;).
          </p>
          <p>
            By using Cardly, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not use the Service.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information You Provide</h3>
          <p>When you create a Cardly account and digital business card, we may collect:</p>
          <ul>
            <li>Name, job title, and company name</li>
            <li>Email address and phone number</li>
            <li>Profile photo</li>
            <li>Social media links and website URLs</li>
            <li>Custom profile information (e.g., work style preferences)</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>When you use our Service, we may automatically collect:</p>
          <ul>
            <li>Device information (model, operating system, unique device identifiers)</li>
            <li>Usage data (features used, interactions, timestamps)</li>
            <li>Log data (IP address, browser type, pages viewed)</li>
          </ul>

          <h3>Card Exchange Data</h3>
          <p>
            When you exchange digital business cards with other users, we store the exchanged card data to provide you with your contact list. This includes any information the other party has included on their card.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Create and manage your digital business card</li>
            <li>Facilitate card exchanges between users</li>
            <li>Enable event discovery and networking features</li>
            <li>Send you service-related communications</li>
            <li>Provide customer support</li>
            <li>Analyze usage patterns to improve the user experience</li>
            <li>Protect against fraud and unauthorized access</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>Card exchanges:</strong> When you trade cards with another user, your card information is shared with that user.
            </li>
            <li>
              <strong>Event participation:</strong> When you join an event, other attendees may see your basic profile information.
            </li>
            <li>
              <strong>Enterprise accounts:</strong> If you use Cardly through an enterprise account, your organization&apos;s administrator may have access to your account data.
            </li>
            <li>
              <strong>Service providers:</strong> We may share data with third-party vendors who help us operate the Service (e.g., hosting, analytics).
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose information if required by law or in response to valid legal processes.
            </li>
          </ul>

          <h2>5. Data Storage & Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. Your data is stored on secure servers with encryption in transit and at rest. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed to provide you with the Service. You can request deletion of your account and associated data at any time by contacting us.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability (receive your data in a machine-readable format)</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the email address listed below.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Cardly is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected data from a child under 13, we will take steps to delete that information promptly.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this page. Continued use of the Service after changes constitutes acceptance of the revised policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@cardly.app
          </p>
        </div>
      </section>
    </>
  );
}
