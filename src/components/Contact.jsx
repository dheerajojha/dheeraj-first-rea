import React from "react";
import "./Contact.css";
import { FaAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";

function contact() {
  return (
    <>
      <section class="contact-wrapper">
        <div class="heading">
          <h1>Contact</h1>
        </div>
        <div class="contact-container">
          <div class="contact-form">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <textarea placeholder="Message"></textarea>
              <input type="submit" value="Send Message" class="btn" />
            </form>
          </div>
          <div class="contact-text">
            <h2>Need Help ? Don't Forgot To Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              corrupti cupiditate impedit, sapiente rem quae voluptas laborum!
              Odit perferendis quas culpa vel unde, odio dignissimos, tempora
              voluptatum consequuntur mollitia quo?
            </p>
            <h3>
              <FaAddressBook className="icons" />
              Mumbai 292838
            </h3>
            <h3>
              <FiPhoneCall className="icons" />
              +9595959955959
            </h3>
            <h3>
              <AiTwotoneMail className="icons" />
              xyz@gmail.com
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
