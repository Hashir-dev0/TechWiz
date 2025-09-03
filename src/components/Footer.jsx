export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem 1rem",
        fontSize: "1rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.3)",
        
        bottom: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Quick Links */}
      <div style={{ flex: "1 1 200px", marginBottom: "1rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Quick Links</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#e5e7eb"} onMouseLeave={(e) => e.target.style.color = "white"}>Home</a></li>
          <li><a href="/about" style={{ color: "white", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#e5e7eb"} onMouseLeave={(e) => e.target.style.color = "white"}>About</a></li>
          <li><a href="/playground" style={{ color: "white", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#e5e7eb"} onMouseLeave={(e) => e.target.style.color = "white"}>Playground</a></li>
          <li><a href="/contact" style={{ color: "white", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#e5e7eb"} onMouseLeave={(e) => e.target.style.color = "white"}>Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ flex: "1 1 200px", marginBottom: "1rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Contact Us</h3>
        <p>Email: <a href="mailto:webworrier@gmail.com" style={{ color: "white", textDecoration: "none" }}>webworrier@gmail.com</a></p>
        <p>Phone: +123 456 7890</p>
        <p>Address: Karachi, Pakistan</p>
      </div>

      {/* Newsletter */}
      <div style={{ flex: "1 1 200px", marginBottom: "1rem" }}>
        <h3 style={{ marginBottom: "1rem" , marginLeft: "-150px" }}>Newsletter</h3>
        <form style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              padding: "0.5rem",
              borderRadius: "150px",
              border: "none",
              flex: 1,
              minWidth: "180px",
              backgroundColor: "white",
              color: "black",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e5e7eb")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          flexBasis: "100%",
          textAlign: "center",
          marginTop: "1rem",
          color: "#777777",
          fontSize: "0.875rem",
        }}
      >
        &copy; {new Date().getFullYear()} webworrier. All rights reserved.
      </div>
    </footer>
  );
}
