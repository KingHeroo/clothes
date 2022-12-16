import React from "react";
import "./style.css";
import Iframe from "react-iframe";
const Contact = () => {
  return (
    <div>
     <div className="ct-form">
        <h1 className="addr">Address</h1>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1264928053724!2d106.7122672138227!3d10.801622761684111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVFAuSENNIC0gSFVURUNI!5e0!3m2!1svi!2s!4v1671079246548!5m2!1svi!2s"
          width="100%"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <hr/>

      <div className="row_ct">
      <hr/>

        <div className="col_ct">
          <h1>Infomation</h1>
          <form class="cf">
            <div class="half left cf">
              <p className="txt">Company Name:</p>
              <p className="txt">Company Mail:</p>
              <p className="txt">Facebook: </p>
              <p className="txt">Zalo:</p>
              <p className="txt">Phone:</p>
            </div>
            <div class="half right cf">
              <p className="txt">FFS Store</p>
              <p className="txt">ffsstore@outlook.com</p>
              <p className="txt">
                {" "}
                <a href="https://facebook.com/" class="large-screen">
                  FFS Store
                </a>
              </p>
              <p className="txt">0238943838</p>
              <p className="txt">0238943838</p>
            </div>
          </form>
        </div>
        <div className="col_ct">
          <div className="contact-from">
            <h1>Contact Form</h1>
            <form class="cf">
              <div class="half left cf">
                <input type="text" id="input-name" placeholder="Name" />
                <input
                  type="email"
                  id="input-email"
                  placeholder="Email address"
                />
                <input type="text" id="input-subject" placeholder="Subject" />
              </div>
              <div class="half right cf">
                <textarea
                  name="message"
                  type="text"
                  id="input-message"
                  placeholder="Message"
                ></textarea>
              </div>
              <input type="submit" value="Submit" id="input-submit" />
            </form>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Contact;
