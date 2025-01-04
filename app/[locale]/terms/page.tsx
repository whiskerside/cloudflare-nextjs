import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "@/lib/app.config";

export const metadata: Metadata = {
  title: "Terms of Conditions",
};

export default function Terms() {
  console.log(appConfig.name);
  return (
    <div className="max-w-screen-xl mx-auto py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <div className="max-w-screen-md text-sm space-y-4">
        <p>Effective Date: 2025-01-01</p>
        <h2 className="text-3xl">Introduction</h2>
        <p>
          Welcome to {appConfig.name}. By accessing our website ({appConfig.url}
          ), you agree to be bound by these Terms of Service, all applicable
          laws and regulations, and agree that you are responsible for
          compliance with any applicable local laws. If you do not agree with
          any of these terms, you are prohibited from using or accessing this
          site.
        </p>
        <h2 className="text-3xl">Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on {appConfig.name}&apos;s website
          for personal, non-commercial transitory viewing only. This is the
          grant of a license, not a transfer of title, and under this license,
          you may not:
        </p>
        <ul className="mx-4 gap-4 list-inside list-disc">
          <li>Modify or copy the materials;</li>
          <li>
            Use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </li>
          <li>
            Attempt to decompile or reverse engineer any software contained on{" "}
            {appConfig.name}&apos;s website;
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials;
          </li>
          <li>
            Transfer the materials to another person or &quot;mirror&quot; the
            materials on any other server.
          </li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by {appConfig.name} at any time.
          Upon terminating your viewing of these materials or upon the
          termination of this license, you must destroy any downloaded materials
          in your possession whether in electronic or printed format.
        </p>
        <h2 className="text-3xl">Purpose of Data Collection</h2>
        <p>
          The primary purposes of collecting your data include, but are not
          limited to:
        </p>
        <h2 className="text-3xl">Disclaimer</h2>
        <p>
          The materials on {appConfig.name}&apos;s website are provided on an
          &apos;as is&apos; basis. {appConfig.name} makes no warranties,
          expressed or implied, and hereby disclaims and negates all other
          warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights.
        </p>

        <h2 className="text-3xl">Limitations</h2>
        <p>
          In no event shall {appConfig.name} or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on {appConfig.name}&apos;s website,
          even if
          {appConfig.name} or a {appConfig.name} authorized representative has
          been notified orally or in writing of the possibility of such damage.
        </p>
        <h2 className="text-3xl">Accuracy of Materials</h2>
        <p>
          The materials appearing on {appConfig.name}&apos;s website could
          include technical, typographical, or photographic errors.{" "}
          {appConfig.name} does not warrant that any of the materials on its
          website are accurate, complete, or current. {appConfig.name} may make
          changes to the materials contained on its website at any time without
          notice. However,
          {appConfig.name} does not make any commitment to update the materials.
        </p>
        <h2>Links</h2>
        <p>
          {appConfig.name} has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by{" "}
          {appConfig.name} of the site. Use of any such linked website is at the
          user&apos;s own risk.
        </p>
        <h2 className="text-3xl">Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of the USA and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
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
