import { useState } from "react";

const ContactInfo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`name = ${name} , email= ${email} , message = ${message}`)
  }
  return (
    <div className="contact-me">
      <form onSubmit={handleSubmit} autocomplete="off">
        <input type="text"
          name='name'
          value={name}
          placeholder='Your name ...'
          onChange={e => setName(e.target.value)} />
        <input type="email"
          name='email'
          value={email}
          placeholder='Your email ...'
          required
          onChange={e => setEmail(e.target.value)} />
        <textarea name='message'
          value={message}
          placeholder='Your comments or message. Be Nice !'
          required rows={3} maxLength={200}
          onChange={e => setMessage(e.target.value)} />
        <div className="content-right">
          <input className="red-button round-button" type="submit" value="Send Feedback" />
        </div>
      </form>
    </div>
  );
};
export default ContactInfo;