import { useState } from "react";
import axios from "axios";
import { CONTACT_ME_URL as url }  from "../../common/Constants";


const ContactMe = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = async () => {
    try {
      const response = await axios.post(url,  
                                                          {name,email,message}, 
                                                          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
      console.log(response.data)
      console.log(response.status)
    } catch (err) {
      console.error("error in sending message");
      console.error(err);
      console.error(err?.response);
      console.log(err?.message);
    }
  };


const handleSubmit = (e) => {
  e.preventDefault();
  sendMessage();
  setMessageSent(true);
}


return (
  <div className="contact-me">
   { !messageSent && (<form onSubmit={handleSubmit} autoComplete="off">
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
        placeholder='Your feedback or message. Be Nice !'
        required rows={3} maxLength={200}
        onChange={e => setMessage(e.target.value)} />
      <div className="content-right">
        <input className="red-button round-button" type="submit" value="Send Feedback" />
      </div>
    </form>)}
    {(messageSent &&
      (<div className="thanks">
        {/* <img className="img-s" src={thanks} alt=""/> */}
        Thanks for your feedback !
        </div>))}
  </div>
);
};
export default ContactMe;