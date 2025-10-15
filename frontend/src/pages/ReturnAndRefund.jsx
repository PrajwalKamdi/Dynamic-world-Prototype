import React from "react";

const ReturnAndRefund = () => {
  return (
    <div className="w-full px-20 py-24 bg-gray-200 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Return & Refund Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-16">
        Last Update on: <span className="font-medium">01 DECEMBER 2024</span>
      </p>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">Have Questions?</h2>
        <p className="pb-4">
          Dynamic World Educational Consultancy is committed to ensuring transparency and clarity in all financial transactions. This Return and Refund Policy outlines the terms under which payments made for our services may be refunded. By engaging with our services, you agree to the terms specified below.
        </p>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">1. Scope</h2>
        <p>
          This policy applies to consultancy fees paid to Dynamic World Educational Consultancy. It does not cover fees paid directly to universities, visa authorities, or any third-party institutions, which are strictly non-refundable.
        </p>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">2. General Refund Guidelines</h2>
        <ul className="list-disc list-inside ml-4 space-y-1 pb-4">
          <li>Service Infeasibility: If we are unable to deliver the agreed-upon consultancy services due to reasons attributable to us.</li>
          <li>Service Cancellation: If you cancel our services within a specified time frame before any work has commenced, subject to deductions for administrative charges.</li>
        </ul>
        <p className="pb-2 font-semibold">Refunds will NOT be issued under the following circumstances:</p>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>University fees, visa application fees, or any third-party fees, which are strictly non-refundable.</li>
          <li>Rejection of university applications, visa applications, or other submissions due to incorrect or incomplete information provided by the client.</li>
          <li>Change of mind or decision to withdraw after services have commenced.</li>
          <li>Delays caused by the client in submitting required documents or information.</li>
        </ul>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">3. Refund Eligibility and Process</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            <strong>Submit a Written Request:</strong> Email your refund request to <a href="mailto:contact@dynamicworld.in" className="text-blue-600 hover:underline">contact@dynamicworld.in</a> with the subject line “Refund Request” and include your name, contact information, and details of the service availed.
          </li>
          <li>
            <strong>Review Period:</strong> We will review your request within 15 business days and may ask for additional information or clarification.
          </li>
          <li>
            <strong>Decision:</strong> If eligible, the refund will be processed within 30 business days of approval. Refunds will be made via the original payment method or an alternative agreed upon during the process.
          </li>
        </ul>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">4. Administrative Charges</h2>
        <p>
          All refunds, if approved, will be subject to a deduction for administrative charges, which will be communicated at the time of refund processing.
        </p>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">5. Non-Refundable Fees</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Fees paid directly to universities, colleges, visa authorities, or any other third-party institution are strictly non-refundable under any circumstances.</li>
          <li>Payments for services already rendered, including counseling sessions, document reviews, or completed applications, are non-refundable.</li>
        </ul>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">6. Amendments to This Policy</h2>
        <p>
          We reserve the right to update or modify this policy at any time. Changes will be posted on our website with the revised “Effective Date.” Continued engagement with our services implies acceptance of the updated policy.
        </p>
      </section>

      <section className="pb-16">
        <h2 className="text-xl font-semibold pb-4">7. Contact Information</h2>
        <p className="pb-2">
          Phone: <a href="tel:+917887881060" className="text-blue-600 hover:underline">7887881060</a>
        </p>
        <p className="pb-2">
          Email: <a href="mailto:contact@dynamicworld.in" className="text-blue-600 hover:underline">contact@dynamicworld.in</a>
        </p>
        <p className="font-semibold pb-4">Branches:</p>
        <ul className="ml-4 list-disc list-inside space-y-1">
          <li>Pune Branch: Office No. 506, Sterling Centre, Opp. Aurora Tower, MG Road, Camp, Pune 411001</li>
          <li>Mumbai Branch: Shop No.8, Neelkant Shopping Centre, Camalane, Near PN Doshi Women’s College Corner, Ghatkopar(W), Mumbai 400078</li>
          <li>Indore Branch: Office No. 517, Onam Plaza, AB Road, Near Industry House, Old Palasia, Indore 452001</li>
        </ul>
      </section>
    </div>
  );
};

export default ReturnAndRefund;
