import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./Components/Contact-form";
import Users from "./Components/Users";
import Cars from "./Components/Cars";

function App() {
  // ✅ State variables must be declared at the top level of the component
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Logs the current state of email and password to the console
  console.log(email, password, phoneNumber);

  // Handles the click event on the "Save" button
  const handleClick = () => {
    console.log("Button clicked");
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    console.log("Form submitted");
    console.log(email);
    console.log(phoneNumber);

    // Clear form fields after submission
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  };

  // 🧠 Runs once after the component is mounted (think of DOMContentLoaded)
  useEffect(() => {
    // Add click event listener to the button with id="save"
    const saveButton = document.getElementById("save");
    saveButton.addEventListener("click", handleClick);

    // Add submit event listener to the form
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);

    // ✅ Clean up event listeners when component unmounts
    return () => {
      saveButton.removeEventListener("click", handleClick);
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      {/* Counter button */}
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>

      {/* Likes button */}
      <button onClick={() => setLikes((likes) => likes + 1)}>
        ❤️ {likes} Likes
      </button>

      {/* Save button with an ID used in useEffect */}
      <button id="save" onClick={() => console.log("button clicked")}>
        Save
      </button>

      {/* Contact form with controlled input fields */}
      <form id="contact-form">
        {/* <button>Enter Phone Number</button> */}
        <input
          type="text"
          value={phoneNumber}
          placeholder="+2547..."
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        {/* <button>Enter email</button> */}
        <input
          type="text"
          placeholder="@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <button>Enter password</button> */}
        <input
          type="password"
          placeholder="1234"
          value={password} // ✅ fixed typo here
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ContactForm />
      <Users />
      <Cars/>
    </>
  );
}

export default App;
