import { useState } from "react";
import "./FormPreview.css";

function FormPreview() {
    const [formData, setFormData] = useState({
        name: "",
        thought: "",
        age: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="form-preview-container">
            <h1>Thought on Your Mind</h1>

            <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="thought"
                placeholder="Enter Your Thought"
                value={formData.thought}
                maxLength={40}
                onChange={handleChange}
            />

            <input
                type="number"
                name="age"
                placeholder="Enter Your Age"
                value={formData.age}
                onChange={handleChange}
            />

            <div className="card">
                <p>Name: {formData.name || "N/A"}</p>
                <p>Thought: {formData.thought || "N/A"}</p>
                <p>Age: {formData.age || "N/A"}</p>
            </div>
        </div>
    );
}

export default FormPreview;
