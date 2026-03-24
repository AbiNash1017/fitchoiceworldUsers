'use client';
import React from "react"
import PolicyLayout from "@/app/components/PolicyLayout";
import { CONTACT_INFO } from "@/app/constants";


const RefundPolicy = () => {
    return (
        <PolicyLayout title="Refund Policy" lastUpdated="January 18th 2026">
            <section>
                <h2>Eligibility for Refunds</h2>
                <p>
                    Refunds are applicable if the cancellation request is approved within the stipulated time frame (24 hours).
                </p>
                <p>
                    Refunds are also applicable for services that fail to meet the promised standards, subject to review by our quality assurance team.
                </p>
            </section>

            <section>
                <h2>Refund Process</h2>
                <p>
                    Once the refund is approved, the amount will be credited back to the original payment method.
                </p>
                <p>
                    Users will be notified via email upon successful processing of the refund.
                </p>
            </section>

            <section>
                <h2>Refund Timeline</h2>
                <p>
                    Refunds will be processed within <strong>3 working days</strong> from the date of approval.
                </p>
                <p>
                    Depending on the payment provider, it may take an additional <strong>2-3 days</strong> for the refund to reflect in your account.
                </p>
            </section>

            <section>
                <h2>Exceptions to Refunds</h2>
                <ul>
                    <li>No refunds will be issued for Change of mind after the service has been initiated or delivered.</li>
                    <li>No refunds will be issued for Incomplete or incorrect information provided by the user.</li>
                    <li>No refunds will be issued for Breach of the terms and conditions by the user.</li>
                </ul>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions about this Refund Policy, You can contact us:</p>
                <ul>
                    <li>Email: {CONTACT_INFO.email}</li>
                    <li>Phone Number: {CONTACT_INFO.phone}</li>
                    <li>Address: {CONTACT_INFO.address}</li>
                </ul>
            </section>
        </PolicyLayout>
    )
}

export default RefundPolicy
