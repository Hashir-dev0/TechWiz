import { BsGeoAlt, BsTelephone, BsEnvelope, BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto my-5 d-flex shadow rounded overflow-hidden fade-in" data-aos="fade-up">
        {/* Left Side */}
        <div
          className="col-md-6 position-relative d-flex flex-column justify-content-center p-4 text-white"
          style={{
            backgroundImage: "url('/bg1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: '400px',
          }}
          data-aos="slide-right"
        >
          {/* Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <div className="position-relative">
            <div className="d-flex align-items-start mb-4">
              <BsGeoAlt className="fs-4 mt-1 me-3" />
              <div>
                <h2 className="h5 fw-semibold">Address</h2>
                <p>Ash Lane 110 <br /> Karachi, PK</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <BsTelephone className="fs-4 mt-1 me-3" />
              <div>
                <h2 className="h5 fw-semibold">Let's Talk</h2>
                <p>0787878787</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <BsEnvelope className="fs-4 mt-1 me-3" />
              <div>
                <h2 className="h5 fw-semibold">General Support</h2>
                <p>webworrier@gmail.com</p>
              </div>
            </div>
            <p className="mt-4">We’d love to hear from you!</p>
            <div className="d-flex flex-wrap justify-content-center mt-4 social-icons-container">
              <a href="#" className="text-white me-3 mb-2 hover-scale social-icon"><BsFacebook size={20} /></a>
              <a href="#" className="text-white me-3 mb-2 hover-scale social-icon"><BsTwitter size={20} /></a>
              <a href="#" className="text-white me-3 mb-2 hover-scale social-icon"><BsInstagram size={20} /></a>
              <a href="#" className="text-white me-3 mb-2 hover-scale social-icon"><BsLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form className="col-md-6 bg-white p-4 d-flex flex-column" data-aos="slide-left">
          <h1 className="h4 fw-bold text-center mb-4">CONTACT US</h1>
          <input
            type="text"
            placeholder="Name *"
            required
            className="form-control mb-3"
          />
          <input
            type="email"
            placeholder="Email *"
            required
            className="form-control mb-3"
          />
          <input
            type="tel"
            placeholder="Phone *"
            required
            className="form-control mb-3"
          />
          <input
            type="text"
            placeholder="Subject *"
            required
            className="form-control mb-3"
          />
          <textarea
            placeholder="Message *"
            required
            className="form-control mb-3"
            style={{ height: '150px', resize: 'none' }}
          ></textarea>
          <button
            type="submit"
            className="btn btn-dark btn-hover"
          >
            SEND
          </button>
        </form>
      </div>
      {/* Google Maps Embed */}
      <div className="container my-4" data-aos="fade-up">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.789!2d67.032!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9fb7648c93a4e6d!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
