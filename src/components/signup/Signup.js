import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v2/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Signup successful!");
      } else {
        console.error("Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="singup-txt">SIGN-UP</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="phone Number start with +91"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="address">Address:</label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Resident Address"
            value={formData.address}
            onChange={handleChange}
          />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
