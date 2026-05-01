import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export { Contact };
