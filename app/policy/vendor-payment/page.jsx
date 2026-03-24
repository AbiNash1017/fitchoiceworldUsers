'use client';
import React from "react"
import PolicyLayout from "@/app/components/PolicyLayout";
import { CONTACT_INFO } from "@/app/constants";


const VendorPaymentPolicy = () => {
    return (
        <PolicyLayout title="Vendor Payment Policy">
            <section>
                <p>At Fit Choice World, we value our partnerships with vendors and ensure a smooth and transparent payment process. Below are the terms related to vendor payments:</p>

                <ol>
                    <li>
                        <strong className="block text-xl mb-2">Service Delivery Confirmation</strong>
                        <p>Vendors must ensure the complete delivery of services as per the agreed-upon terms before initiating a payment request.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Payment Request Submission</strong>
                        <p>Once the service is delivered, the vendor can submit a payment request through the designated process (vendor portal, email, or Phone Call).</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Payment Processing Timeline</strong>
                        <p>Upon receipt of the payment request and verification of service delivery, Fit Choice World will process the payment within <strong>three (3) working days</strong>.</p>
                    </li>
                    <li>
                        <strong className="block text-xl mb-2">Dispute Resolution</strong>
                        <p>In case of discrepancies or disputes regarding the service delivered, the payment processing may be temporarily paused until the issue is resolved. Vendors will be promptly notified of any such delays.</p>
                    </li>
                </ol>
            </section>

            <section>
                <h2>Communication and Support</h2>
                <p>For inquiries related to payments, vendors may contact our support team at:</p>
                <ul>
                    <li>
                        <strong>Email:</strong> {CONTACT_INFO.email}
                    </li>
                    <li>
                        <strong>Phone:</strong> {CONTACT_INFO.phone}
                    </li>
                    <li>
                        <strong>Address:</strong> {CONTACT_INFO.address}
                    </li>
                </ul>
            </section>
        </PolicyLayout>
    )
}

export default VendorPaymentPolicy
