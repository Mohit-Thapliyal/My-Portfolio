import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdCall, IoMdMail } from "react-icons/io";
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";

import background from "../../images/background/background1.jpg";
import Notification from "../UI/Notification";

const Contact = () => {
  const form = useRef();
  const [messageType, setMessageType] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  const closeMessageHandler = () => {
    setMessageSent(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageType(true);
        },
        (error) => {
          console.log(error.text);
          setMessageType(false);
          // console.log('guguyg')
        }
      );
    // form.current.user_name.value = "";
    // form.current.user_email.value = "";
    // form.current.message.value = "";

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 8000);
    
  };

  return (
    <div
      id="contact"
      style={{
        background: `url(${background}) no-repeat center`,
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center bg-gray-100 w-full lg:min-h-screen"
    >
      {messageSent && <Notification messageClass={messageType} onCloseMessage={closeMessageHandler} />}
      <div className="flex flex-col md:flex-row space-y-8 md:space-x-6 md:space-y-0 bg-cyan-50 w-full lg:max-w-4xl xl:max-w-5xl p-8 sm:p-12 lg:rounded-xl shadow-lg text-sky-900 bg-opacity-90 backdrop-blur-lg">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
            <p className="pt-2 text-cyan-800 text-sm">
              Hey there! Thanks for visiting my website, if you have any query,
              suggestion or any kind of formal message then you can drop it here
              just by filling up the form. I'll reach out to you as soon as
              possible. Have a wonderful day!
            </p>
            <a
              href="https://www.buymeacoffee.com/mohitthapliyal"
              target="buymeacoffee"
              className="inline-flex items-center space-x-2 bg-teal-300 mt-2 px-2 py-1 rounded-md"
            >
              <SiBuymeacoffee className="text-2xl" />
              <span className="font-edusa font-semibold">Buy me a coffee</span>
            </a>
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <a
                href="tel:+917011681275"
                className="flex items-center space-x-2"
              >
                <IoMdCall className="text-teal-300 text-xl" />
                <span>+91 701 168 1275</span>
              </a>
            </div>
            <div>
              <a
                href="mailto:mohitthapliyal100@gmail.com"
                className="flex items-center space-x-2"
              >
                <IoMdMail className="text-teal-300 text-xl" />
                <span>mohitthapliyal100@gmail.com</span>
              </a>
            </div>
            <div>
              <p className="flex items-center space-x-2" href="">
                <IoLocationSharp className="text-teal-300 text-xl" />
                <span>New Delhi, India</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex space-x-4 text-xl">
              <a
                target="facebook"
                href="https://www.facebook.com/profile.php?id=100010237621145"
              >
                <IoLogoFacebook />
              </a>
              <a target="github" href="https://github.com/Mohit-Thapliyal">
                <IoLogoGithub />
              </a>
              <a
                target="linkedin"
                href="https://www.linkedin.com/in/mohit-thapliyal-b20104146/"
              >
                <IoLogoLinkedin />
              </a>
              <a
                target="instagram"
                href="https://www.instagram.com/mohitthapliyal100/"
              >
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-sky-900 rounded-xl shadow-lg p-8 text-gray-100 md:w-96">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="contact-name" className="text-sm">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 rounded-md w-full px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-cyan-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 rounded-md w-full px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-cyan-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-msg" className="text-sm">
                  Message
                </label>
                <textarea
                  id="contact-msg"
                  name="message"
                  rows="4"
                  type="text"
                  placeholder="Message"
                  className="ring-1 text-cyan-800 ring-gray-300 rounded-md w-full px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-teal-400 text-cyan-900 font-bold rounded-lg py-2 uppercase text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
