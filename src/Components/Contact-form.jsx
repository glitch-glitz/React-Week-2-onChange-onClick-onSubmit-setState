import { useState } from "react";

const ContactForm = () => {
  // 🧠 State object to hold all form data (name, email, phone)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ added phone to state
  });

  // 🔁 Handles changes in any input field
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the input
    console.log(name, value); // Log which input changed and its new value

    // Update the corresponding key in formData using computed property name
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted:", formData); // Log the collected form data
  };

  return (
    // 📝 Form with controlled components and event handlers
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange} // 🔁 Handles typing in this input
      />
      <br />
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Email address"
        onChange={handleChange} // 🔁 Handles typing in this input
      />
      <br />
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="+2547 96 262 582"
          onChange={handleChange} // 🔁 Handles typing in this input
        />
      </div>
      <br />
      <button type="submit">Submit</button> {/* 🖱️ Triggers handleSubmit */}
    </form>
  );
};

export default ContactForm;
