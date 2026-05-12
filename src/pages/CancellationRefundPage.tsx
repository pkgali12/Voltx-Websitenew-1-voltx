import { motion } from "motion/react";

export default function CancellationRefundPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
        >
          Cancellation & <span className="text-brand">Refund Policy</span>
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
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">1. General B2B Commerce Terms</h2>
            <p className="leading-relaxed">
              Voltx EV Private Limited operates strictly on a Business-to-Business (B2B) model. Due to the industrial nature, weight, and custom engineering of our products—including BLDC motors, ruggedized fleet e-bikes, and motorized transfer trolleys—standard consumer "change-of-mind" return policies do not apply. All sales are considered final unless explicitly stated in your commercial contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">2. Order Cancellation</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold mb-2">Standard Off-the-Shelf Products:</h4>
                <p className="leading-relaxed">
                  (e.g., standard spare parts, unmodified conversion kits). Orders can only be canceled within 24 hours of placement, provided the goods have not yet been dispatched. A nominal processing fee may apply.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Custom OEM & Built-to-Order Equipment:</h4>
                <p className="leading-relaxed">
                  (e.g., tailored industrial trolleys, custom motor windings, bulk fleet orders). Once an order is confirmed and the advance payment is received, the manufacturing process and raw material procurement begin immediately. Therefore, custom and bulk orders cannot be canceled. Any advance payments made for custom engineering are non-refundable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">3. Refunds & Replacements (Defects & Warranties)</h2>
            <p className="leading-relaxed">
              We stand by the quality of our Bengaluru manufacturing facility. If a product arrives with a proven manufacturing defect:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Notification Window:</strong> You must notify our engineering team at <a href="mailto:praveen.gali@voltxev.com" className="text-brand hover:underline">praveen.gali@voltxev.com</a> within 48 hours of receiving the goods, including high-resolution photos/videos of the defect and your Purchase Order (PO) number.</li>
              <li><strong>Evaluation:</strong> Our technical team will evaluate the claim. We reserve the right to dispatch a technician to your site or request the component be shipped back to our facility for inspection.</li>
              <li><strong>Resolution:</strong> If a manufacturing defect is confirmed, Voltx EV will, at its sole discretion, either repair the component, send a replacement part, or replace the entire unit. We do not offer cash refunds for defective industrial equipment; we focus on rectifying the engineering issue to ensure your operations continue smoothly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">4. Non-Refundable Scenarios</h2>
            <p className="leading-relaxed">
              Voltx EV will not issue replacements or refunds under the following conditions:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Damage caused by improper installation by the client.</li>
              <li>Overloading equipment beyond its stated capacity (e.g., placing 1500kg on a 1000kg rated trolley).</li>
              <li>Tampering with sealed motor controllers, wiring harnesses, or OEM software.</li>
              <li>Normal wear and tear of commercial usage.</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
