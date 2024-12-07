import { useState } from "react";
import "./Card.css"; // Ensure you have relevant styles here
import axios from "axios";

function Card() {
    const [cardDetails, setCardDetails] = useState({
        cardHolderName: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        cardType: "Visa",
    });

    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userID = 2; // Assuming userID from logged-in user
            const response = await axios.post("https://fitfusion.iamtrazy.eu.org/api/cards", { userID, ...cardDetails });
            
            // Open modal on successful card save
            if (response.status === 200) {
                setIsModalOpen(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-2 shadow-lg rounded-lg">
                {/* Card Preview */}
                <div className="text-white p-16 rounded-lg mb-5 relative bg-card-preview"> {/* Added background class */}
                    <div className="absolute top right-20 text-sm">💳 {cardDetails.cardType}</div>
                    <div className="text-lg pl-1 pb-2 ">{cardDetails.cardNumber || "#### #### #### ####"}</div>
                    <div className="flex justify-between p-4 mt-12">
                        <span>{cardDetails.cardHolderName || "Card Holder"}</span>
                        <span>{cardDetails.expirationDate || "MM/YY"}</span>
                    </div>
                </div>

                {/* Form for entering card details */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="cardHolderName"
                        placeholder="Cardholder Name"
                        className="input-field"
                        value={cardDetails.cardHolderName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        className="input-field"
                        value={cardDetails.cardNumber}
                        onChange={handleChange}
                        maxLength="16"
                        required
                    />
                    <div className="flex space-x-4">
                        <input
                            type="month" // Changed to month
                            name="expirationDate"
                            className="input-field"
                            value={cardDetails.expirationDate}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            className="input-field"
                            value={cardDetails.cvv}
                            onChange={handleChange}
                            maxLength="3"
                            required
                        />
                    </div>
                    <select
                        name="cardType"
                        className="input-field"
                        value={cardDetails.cardType}
                        onChange={handleChange}
                    >
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="Amex">Amex</option>
                        <option value="Discover">Discover</option>
                    </select>

                    <button type="submit" className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800">
                        Save Card
                    </button>
                </form>
            </div>

            {/* Modal for successful payment */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Thank you for your payment!</h2>
                        <p>Your card details have been successfully saved.</p>
                        <button
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                            onClick={() => setIsModalOpen(false)} // Close modal on button click
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
