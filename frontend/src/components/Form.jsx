import { useState } from "react";
import axios from "axios";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/submit",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            alert(response.data.message);

            // Clear form
            setFormData({
                name: "",
                email: ""
            });
        } catch (error) {
            console.error(
                "Submission Error:",
                error.response?.data || error.message
            );
            alert("Submission failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">
                    User Form
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
