import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // added phone to state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        // onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Email address"
        // onChange={handleChange}
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
          //   onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
