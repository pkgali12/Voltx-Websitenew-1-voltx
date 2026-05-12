import { motion } from "motion/react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-12"
        >
          Privacy <span className="text-brand">Policy</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-zinc max-w-none space-y-8"
        >
          <section>
            <p className="text-lg leading-relaxed">
              Welcome to the official website of Voltx EV Private Limited ("Company," "we," "our," or "us"). We are an Original Equipment Manufacturer (OEM) specializing in BLDC motors, ruggedized drivetrains, and Physical AI mobility solutions, registered and operating in Bengaluru, India.
            </p>
            <p className="mt-4 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (voltxev.com) or engage with our B2B services, custom engineering inquiries, and R&D funding portals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed">
              As a B2B engineering and manufacturing firm, we primarily collect business-related information. We may collect the following types of data when you use our contact forms, request quotes, or download our investor pitch decks:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Business Identity Data:</strong> Company name, GSTIN, CIN, and registered business addresses.</li>
              <li><strong>Contact Information:</strong> First and last name of the designated point of contact, corporate email addresses, and phone numbers.</li>
              <li><strong>Project & Technical Data:</strong> Specifications regarding your fleet size, load requirements (e.g., 150-1000kg payloads), and custom BLDC motor parameters submitted via our inquiry forms.</li>
              <li><strong>Automated Device Data:</strong> IP addresses, browser types, and usage data collected automatically through cookies to ensure our website functions correctly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your business or personal data. We use the information collected strictly for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Fulfilling Orders & OEM Contracts:</strong> To process purchase orders, manufacture custom equipment, and coordinate heavy freight logistics.</li>
              <li><strong>Communication:</strong> To respond to inquiries regarding B2B mobility fleets, industrial trolleys, or R&D partnerships.</li>
              <li><strong>Compliance & Legal Obligations:</strong> To generate accurate GST invoices and comply with Indian corporate taxation and commercial laws.</li>
              <li><strong>Improving Services:</strong> To analyze website traffic and improve our digital infrastructure and product offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing & Disclosure</h2>
            <p className="leading-relaxed">We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Logistics & Freight Partners:</strong> We share necessary delivery addresses and contact information with third-party transport companies to deliver heavy machinery and hardware to your facilities.</li>
              <li><strong>Legal & Regulatory Authorities:</strong> We may disclose information if required to do so by law, such as to comply with a subpoena, government audit, or request from Indian regulatory bodies.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, funding round, or acquisition of Voltx EV Private Limited, your B2B contact information may be transferred as a business asset.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard administrative, technical, and physical security measures to protect your corporate and personal data. While no digital transmission is 100% secure, we restrict access to your submitted engineering requirements and contact details strictly to authorized Voltx EV personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights (Under DPDP Act, 2023)</h2>
            <p className="leading-relaxed">If you are an individual acting on behalf of a corporate entity, you retain the right to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete contact details.</li>
              <li>Request the deletion of your personal contact data (subject to our legal requirements to retain corporate invoicing and contract records).</li>
            </ul>
          </section>

          <section className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl mt-12">
            <h2 className="text-2xl font-bold text-white mb-6 underline decoration-brand underline-offset-8">7. Grievance Officer</h2>
            <p className="mb-6 leading-relaxed">
              In accordance with the Information Technology Act, 2000, Consumer Protection (E-Commerce) Rules, 2020, and the DPDP Act, 2023, the name and contact details of our Grievance Officer are provided below:
            </p>
            <div className="space-y-2 text-zinc-300">
              <p><strong className="text-white">Name:</strong> Praveen Gali</p>
              <p><strong className="text-white">Designation:</strong> Grievance Officer</p>
              <p><strong className="text-white">Company:</strong> Voltx EV Private Limited</p>
              <p><strong className="text-white">Address:</strong> F501, Esperanza By UKN, Phase 2, Whitefield Main Road, Varthur Hobli, Bengaluru - 560066, Karnataka, India</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:praveen.gali@voltxev.com" className="text-brand hover:underline">praveen.gali@voltxev.com</a></p>
              <p><strong className="text-white">Phone:</strong> +91 9110816846</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
