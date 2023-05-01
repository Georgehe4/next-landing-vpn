import React, { useState } from "react";
import Modal from './Modal'
import WaitlistForm from "./WaitlistForm";

export default function WaitlistModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button 
            className={
                "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
            } 
            onClick={() => setShowModal(true)}>Join the Waitlist</button>
            {showModal && <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <WaitlistForm>
                </WaitlistForm>
            </Modal>}
        </div>
    )
}