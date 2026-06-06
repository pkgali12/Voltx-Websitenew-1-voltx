/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import MobilityPage from "./pages/MobilityPage";
import MaterialHandlingPage from "./pages/MaterialHandlingPage";
import InnovationPage from "./pages/InnovationPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import CancellationRefundPage from "./pages/CancellationRefundPage";
import ShippingDeliveryPage from "./pages/ShippingDeliveryPage";
import Footer from "./components/Footer";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-40 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">{title}</h1>
      <p className="text-zinc-400 max-w-lg text-center leading-relaxed">
        We are currently refining the full details for our {title.toLowerCase()} sector. Stay tuned for engineering deep-dives and performance specifications.
      </p>
      <a href="/" className="mt-12 text-brand font-bold uppercase tracking-widest text-sm hover:underline">
        Back to Dashboard
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/mobility" element={<MobilityPage />} />
            <Route path="/material-handling" element={<MaterialHandlingPage />} />
            <Route path="/innovation-and-rd" element={<InnovationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/cancellation-and-refund" element={<CancellationRefundPage />} />
            <Route path="/shipping-and-delivery" element={<ShippingDeliveryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


