import { motion } from "motion/react";

export default function ShippingDeliveryPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase"
        >
          Shipping & <span className="text-brand">Delivery Policy</span>
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
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">1. Manufacturing Lead Times & Dispatch</h2>
            <p className="leading-relaxed">
              Because we cater to commercial fleets and industrial logistics, many of our products are built-to-order.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Standard Parts:</strong> Dispatch within 3–5 business days from our Whitefield, Bengaluru facility.</li>
              <li><strong>Fleet Mobility & Standard Trolleys:</strong> Dispatch timelines range from 2–4 weeks, depending on order volume.</li>
              <li><strong>Custom OEM Motors & R&D Platforms:</strong> Lead times will be explicitly defined in your custom engineering contract and Proforma Invoice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">2. Freight & Logistics</h2>
            <p className="leading-relaxed">
              Given the extreme weight and dimensions of our industrial products (such as 1000kg capable transfer trolleys and bulk drivetrain shipments):
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Orders are shipped via specialized heavy-freight logistics partners across India.</li>
              <li><strong>Shipping Costs:</strong> Freight charges are calculated based on volumetric weight and destination pin code. These will be clearly outlined in your final quotation.</li>
              <li><strong>Ex-Works (EXW) Option:</strong> Clients may choose to arrange their own transport and pick up the equipment directly from our Bengaluru manufacturing facility.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">3. Delivery & Unloading Responsibilities</h2>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Client Responsibility:</strong> Delivery is strictly to the loading dock or ground-level receiving area of the destination address. It is the Client’s responsibility to have the necessary equipment (e.g., forklifts, pallet jacks) and personnel ready to safely unload heavy machinery from the transport vehicle.</li>
              <li>Our freight partners do not provide indoor installation or inside-delivery services unless explicitly contracted beforehand.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">4. Transit Damage & Inspection</h2>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Mandatory Inspection:</strong> Upon arrival, the receiving manager must thoroughly inspect the external packaging and the equipment before signing the Proof of Delivery (POD) or Lorry Receipt (LR).</li>
              <li><strong>Reporting Damage:</strong> If there is visible damage sustained during transit, you must clearly note "DAMAGED" on the driver’s delivery receipt and notify Voltx EV within 24 hours. Failure to note damage on the POD releases the freight carrier and Voltx EV from liability for transit-related damages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand pl-4">5. Delays & Force Majeure</h2>
            <p className="leading-relaxed">
              While we strive to meet all projected delivery timelines, Voltx EV is not liable for dispatch or transit delays caused by factors outside our control, including severe weather, interstate border disruptions, transport strikes, or raw material supply chain shortages.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
