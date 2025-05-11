import React, { useState } from "react";

function Element({ url = "", dynamicId = "", fields = [] }) {
    const [baseUrl, setBaseUrl] = useState(url);
    const [id, setId] = useState(dynamicId);
    const [formData, setFormData] = useState({});

    const handleChange = (fieldName, value) => {
        setFormData(prev => ({ ...prev, [fieldName]: value }));
    };

    const handleSubmit = () => {
        const fullUrl = `${baseUrl}/${id}`;
        const data = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        };

        fetch(fullUrl, data)
            .then(res => res.json())
            .then(response => {
                alert("PUT request successful!");
                console.log(response);
            })
            .catch(err => {
                alert("Error in PUT request.");
                console.error(err);
            });
    };

    return (
        <div style={containerStyle}>
            <h3>PUT API Editor</h3>

            <label>Base URL:</label>
            <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://api.example.com/resource"
                style={inputStyle}
            />

            <label>Dynamic ID:</label>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="123"
                style={inputStyle}
            />

            <h4>Body Fields</h4>
            {fields.map((field, index) => (
                <div key={index}>
                    <label>{field.label || field.name}</label>
                    {field.type === "select" ? (
                        <select
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            style={inputStyle}
                        >
                            <option value="">-- Select --</option>
                            {field.options.map((opt, i) => (
                                <option key={i} value={opt}>{opt}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            placeholder={field.placeholder || field.name}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            style={inputStyle}
                        />
                    )}
                </div>
            ))}

            <button onClick={handleSubmit} style={buttonStyle}>
                Send PUT Request
            </button>
        </div>
    );
}

const containerStyle = {
    width: "100%",
    maxWidth: "600px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default Element;
