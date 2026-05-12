import { motion } from "motion/react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase"
        >
          Terms and <span className="text-brand">Conditions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-xs font-bold tracking-widest text-zinc-500 mb-12 uppercase"
        >
          Last Updated: March 2026
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-zinc max-w-none space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you" or "Client"), and Voltx EV Private Limited ("Company," "we," "us," or "our"), located in Bengaluru, Karnataka.
            </p>
            <p className="mt-4 leading-relaxed">
              By accessing voltxev.com (the "Site") or engaging our OEM engineering and manufacturing services, you agree that you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree, you are expressly prohibited from using the Site and our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">2. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              Unless otherwise indicated, the Site and all its contents are our proprietary property. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Engineering Data:</strong> Motor specifications, drivetrain schematics, and performance metrics.</li>
              <li><strong>Product Designs:</strong> The frame architecture of our Frontier and Qube e-bikes, motorized transfer trolleys, and 4WD Agricultural Rovers.</li>
              <li><strong>Media & Copy:</strong> All source code, databases, functionality, software, website designs, audio, video, text, and photographs (collectively, the “Content”).</li>
              <li><strong>Trademarks:</strong> "Voltx EV" and associated logos.</li>
            </ul>
            <p className="mt-4 leading-relaxed italic text-sm">
              You are granted a limited license to access and use the Site for your internal business purposes (e.g., procurement evaluation). You may not copy, reproduce, distribute, or create derivative works of our hardware designs or website content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">3. Custom Engineering, Quotes & OEM Services</h2>
            <p className="leading-relaxed">
              Voltx EV provides deep-tech engineering solutions, including custom BLDC motors and industrial material handling systems. By requesting a custom build:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Accuracy of Client Data:</strong> You agree that all load requirements, payload capacities (e.g., 150kg to 1000kg), and environmental operating conditions provided to us are accurate.</li>
              <li><strong>Engineering Tolerances:</strong> We engineer products based strictly on the data provided. Voltx EV is not liable for mechanical failure, motor burnout, or drivetrain damage resulting from the Client subjecting the equipment to loads or conditions exceeding the agreed-upon specifications.</li>
              <li><strong>Quotations:</strong> All quotes, proforma invoices, and estimated timelines provided via the Site or email are valid for 15 days unless otherwise stated. They are subject to change based on raw material costs (e.g., aluminum, copper, rare-earth magnets).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">4. B2B Orders, Pricing, and Payments</h2>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Commercial Transactions:</strong> All sales are considered B2B (Business-to-Business).</li>
              <li><strong>Taxes:</strong> All prices exclude applicable taxes unless stated otherwise. Indian buyers are subject to the applicable Goods and Services Tax (GST).</li>
              <li><strong>Payment Terms:</strong> Custom OEM manufacturing and bulk fleet orders require an advance payment as stipulated in the specific Purchase Order (PO) or commercial contract. Manufacturing will not commence until the advance is realized.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by applicable Indian law, Voltx EV Private Limited, our directors, employees, or agents shall not be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages.
            </p>
            <p className="mt-4 leading-relaxed">This includes lost profit, lost revenue, or loss of data arising from:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your use of the Site.</li>
              <li>The deployment of our R&D Physical AI technology or autonomous rovers.</li>
              <li>Hardware failure resulting from improper maintenance, tampering with sealed motor controllers, or unauthorized modifications to our drivetrains and conversion kits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">6. Warranty Disclaimer (Website)</h2>
            <p className="leading-relaxed">
              While our physical products carry specific, contractually agreed-upon warranties (detailed in your Purchase Agreement), the information provided on this Site is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the accuracy, adequacy, or completeness of the information on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">7. Governing Law & Jurisdiction</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and defined following the laws of India. Voltx EV Private Limited and yourself irrevocably consent that the courts of Bengaluru, Karnataka, India, shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms or commercial operations.
            </p>
          </section>

          <section className="bg-zinc-900/50 border border-white/5 p-10 rounded-3xl mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">8. Contact Us</h2>
            <p className="mb-8 leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding our engineering services, please contact us at:
            </p>
            <div className="space-y-4 text-zinc-300">
              <div className="flex flex-col">
                <span className="text-white font-bold mb-1">Company Headquarters:</span>
                <p>Voltx EV Private Limited</p>
                <p>F501, Esperanza By UKN, Phase 2, Whitefield Main Road, Varthur Hobli</p>
                <p>Bengaluru - 560066, Karnataka, India</p>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold mb-1">Electronic Mail:</span>
                <a href="mailto:Praveen.gali@voltxev.com" className="text-brand hover:underline">Praveen.gali@voltxev.com</a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
