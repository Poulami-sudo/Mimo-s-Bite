import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      {/* CONTACT HEADER */}
      <section className="contact-header">
        <p>Get In Touch</p>

        <h1>Contact Mimo's Bite</h1>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info-card">

            <h2>Let's Talk About Something Sweet 🍰</h2>

            <p>
              Have a question about our cakes, custom orders or delivery?
              We'd love to hear from you.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <span>📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>📞</span>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>📧</span>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@mimosbite.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>🕐</span>
                <div>
                  <h3>Opening Hours</h3>
                  <p>Mon - Sun | 9:00 AM - 9:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="contact-form-card">

            <h2>Send Us A Message 💌</h2>

            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">💗</div>

                <h3>Thank You!</h3>

                <p>
                  Your message has been received. We'll get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>

                  <textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message 💗
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;