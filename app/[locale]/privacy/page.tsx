import type { Metadata } from "next";
import { appConfig } from "@/lib/app.config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: `${appConfig.url}/privacy`,
  },
};

export default function Privacy() {
  return (
    <div className="max-w-screen-xl px-3 mx-auto py-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <div className="max-w-screen-md text-sm space-y-4">
        <p>Last updated: 2025-01-01</p>
        <h2 className="text-3xl">Overview</h2>
        <p>
          Welcome to {appConfig.name} ({appConfig.url}). This Privacy Policy
          outlines the types of information we collect from you, how we use it,
          and the steps we take to ensure your personal information is handled
          appropriately.
        </p>
        <h2 className="text-3xl">Information Collection</h2>
        <h3 className="text-2xl">Personal Data</h3>
        <p>
          We collect personal data that you voluntarily provide to us when you
          register on our site, place an order, subscribe to our newsletter, or
          engage in other activities on {appConfig.url}. This may include, but
          is not limited to: Name Email Address Payment Information Contact
          Details This information is collected for purposes such as order
          processing, providing customer support, and delivering personalized
          services.
        </p>
        <h3 className="text-2xl">Non-Personal Data</h3>
        <p>
          We also collect non-personal data through cookies and similar tracking
          technologies. This includes, but is not limited to: IP Address Browser
          Type Device Information Pages Visited on Our Site Date and Time of
          Your Visit This data helps us understand user behavior on our site,
          improve website functionality, and enhance your overall experience.
        </p>
        <h2 className="text-3xl">Purpose of Data Collection</h2>
        <p>
          The primary purposes of collecting your data include, but are not
          limited to:
        </p>
        <ul className="mx-4 gap-4 list-inside list-disc">
          <li>Processing orders and managing your account</li>
          <li>Communicating with you, including for customer service</li>
          <li>
            Sending promotional materials or other information, if you have
            opted in
          </li>
          <li>Improving our website, products, and services</li>
          <li>Ensuring compliance with legal obligations</li>
        </ul>
        <h2 className="text-3xl">Data Sharing</h2>
        <p>
          {appConfig.name} respects your privacy and does not sell, trade, or
          otherwise transfer your personal data to third parties without your
          consent, except:
        </p>
        <ul className="mx-4 gap-4 list-inside list-disc">
          <li>
            To service providers who assist us in operating our website,
            conducting our business, or serving our users, as long as those
            parties agree to keep this information confidential
          </li>
          <li>
            To comply with legal obligations, enforce our site policies, or
            protect our or others&apos; rights, property, or safety
          </li>
        </ul>
        <h2 className="text-3xl">Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. These measures include encryption, secure
          servers, and access control policies. However, please note that no
          method of transmission over the Internet, or method of electronic
          storage, is 100% secure.
        </p>
        <h2 className="text-3xl">Your Rights and Choices</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="mx-4 gap-4 list-inside list-disc">
          <li>
            Access: You have the right to request access to the personal
            information we hold about you.
          </li>
          <li>
            Correction: You have the right to request that we correct any
            inaccuracies in your personal information.
          </li>
          <li>
            Deletion: You have the right to request the deletion of your
            personal information.
          </li>
          <li>
            Objection: You have the right to object to certain types of
            processing of your personal information.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at
          {appConfig.email}
        </p>
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for children under the age of 18. We do
          not knowingly collect personal information from children. If you
          believe that we might have collected information from a child under
          the age of 18, please contact us immediately.
        </p>
        <h2 className="text-3xl">Updates to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page, and we encourage you to review this Privacy
          Policy periodically to stay informed about how we are protecting your
          information.
        </p>
        <h2 className="text-3xl">Contact Us</h2>
        <p>
          If you have any questions, concerns, or feedback regarding our Privacy
          Policy, please contact us at {appConfig.email}. We are committed to
          addressing your inquiries and will strive to respond as promptly as
          possible.
        </p>
        <p>Thank you for visiting {appConfig.name}!</p>
      </div>
    </div>
  );
}
