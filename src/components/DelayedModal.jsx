import React, { useEffect, useRef, useState } from 'react';

const DelayedModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const modalRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/sendConsultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, phone: phone, firstname: name, deal: true }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle success, e.g., display a success message
            console.log('Form submitted successfully!');
            setIsOpen(false)
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error submitting form:', error);
        }
        // alert(`Name: ${name}, Email: ${email}, Phone: ${phone}, About: ${about}`)
    }
    // Open modal after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Handle ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Handle outside click
    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="bg-gray-100 bg-opacity-90 sm:bg-opacity-75 rounded-xl shadow-xl p-6 w-full h-auto sm:w-3/4 md:w-3/5 lg:w-1/2 sm:rounded-2xl sm:my-auto mx-4 animate-fadeIn"
            >
                <h2 className="text-[#322F31] text-4xl  text-center font-LeagueSpartan font-bold mb-4">Welcome! Claim your 50% OFF INITIAL EVALUATION now!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -m-2">
                        <div className="w-full sm:w-4/5 p-2 mx-auto">
                            <input
                                className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                id="recipient_name"
                                type="text"
                                name="recipient_name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }
                                }
                                placeholder="YOUR NAME"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-4/5 p-2 mx-auto">
                            <input
                                className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                id="recipient_email"
                                type="text"
                                name="recipient_email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }
                                }
                                placeholder="YOUR EMAIL"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-4/5 p-2 mx-auto">
                            <input
                                type="text"
                                id="phone"
                                aria-describedby="helper-text-explanation"
                                className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="PHONE NUMBER (123-456-7890)"
                                name="recipient_phone"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }
                                }
                            />
                        </div>
                        <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                            <input
                                type="submit"
                                className="text-center py-4 px-6 w-full text-primaryText font-bold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                                aria-label="Request"
                                value="CLAIM NOW!"
                            />
                        </div>
                        <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto text-center">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-gray-400 text-white mx-auto px-4 py-2 rounded-xl hover:bg-gray-600 transition"
                            >No thanks, I don't want 50% off</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DelayedModal;
