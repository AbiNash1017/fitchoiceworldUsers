'use client';
import React from "react"
import PolicyLayout from "@/app/components/PolicyLayout";
import { CONTACT_INFO } from "@/app/constants";


const VendorPaymentPolicy = () => {
    return (
        <PolicyLayout title="Vendor Payment Policy">
            <section>
                <p>At Fit Choice World, we value our partnerships with vendors and ensure a smooth and transparent payment process. Below are the terms related to vendor payments:</p>

                <ol className="list-decimal pl-6 space-y-8 mt-8">
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

            <section className="mt-12 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-4">Communication and Support</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">For inquiries related to payments, vendors may contact our support team at:</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <span className="font-semibold w-24">Email:</span>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-orange-600 dark:text-orange-400 hover:underline">{CONTACT_INFO.email}</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <span className="font-semibold w-24">Phone:</span>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-orange-600 dark:text-orange-400 hover:underline">{CONTACT_INFO.phone}</a>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="font-semibold w-24">Address:</span>
                        <span>{CONTACT_INFO.address}</span>
                    </li>
                </ul>
            </section>
        </PolicyLayout>
    )
}

export default VendorPaymentPolicy
