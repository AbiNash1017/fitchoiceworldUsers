'use client';
import React from "react"
import PolicyLayout from "@/app/components/PolicyLayout";
import { CONTACT_INFO } from "@/app/constants";


const CancellationPolicy = () => {
    return (
        <PolicyLayout title="Cancellation Policy" lastUpdated="January 18th 2026">
            <section>
                <h2>Cancellation Requests</h2>
                <p>
                    Users can request a cancellation within 24 hours of placing an order or subscribing to a service, provided the service has not already commenced.
                </p>
                <p>
                    To initiate a cancellation, users must contact our support team via email at <strong>{CONTACT_INFO.email}</strong> or through the in-app help section.
                </p>
            </section>

            <section>
                <h2>Non-Cancellable Services</h2>
                <p>
                    Services that have already been delivered or initiated are not eligible for cancellation.
                </p>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions about this Cancellation Policy, You can contact us:</p>
                <ul>
                    <li>Email: {CONTACT_INFO.email}</li>
                    <li>Phone Number: {CONTACT_INFO.phone}</li>
                    <li>Address: {CONTACT_INFO.address}</li>
                </ul>
            </section>
        </PolicyLayout>
    )
}

export default CancellationPolicy
