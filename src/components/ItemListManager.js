import React, { useState } from "react";

function ItemListManager() {
    const [items, setItems] = useState([]); // State for the list of items
    const [inputValue, setInputValue] = useState(""); // State for the input field

    // Handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handle adding an item
    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            // Add the input value to the items list
            setItems([...items, inputValue]);
            setInputValue(""); // Clear the input field
        }
    };

    return (
        <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Item List Manager</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter item"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        marginRight: "10px",
                        width: "250px",
                    }}
                />
                <button
                    onClick={handleAddItem}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Add Item
                </button>
            </div>
            <ul style={{ marginTop: "20px", fontSize: "18px" }}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListManager;

