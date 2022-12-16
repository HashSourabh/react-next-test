import React, {useState} from "react";
import Modal from '../commons/modals/GasSettingsModal';
export default function GeneralApp() {
    const [showModal, setShowModal] = useState(false);
    const closeModal = (value) => {
        setShowModal(value)
    }
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
                Button
            </button>
            <Modal show={showModal} closeModal = {closeModal}></Modal>
        </div>
    );
}