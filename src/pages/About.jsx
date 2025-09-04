export default function About() {
  return (
    <div style={{
      padding: "2rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "100%",       
      overflowX: "hidden"     
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#111",
        boxSizing: "border-box"
      }} data-aos="fade-down">
        About Our Team
      </h1>

      {/* Intro */}
      <p style={{
        fontSize: "1.2rem",
        maxWidth: "800px",
        margin: "0 auto 2rem auto",
        textAlign: "center"
      }} data-aos="fade-up" data-aos-delay="200">
        We are <strong>Team WebWorrier</strong>, a group of passionate developers
        and designers participating in the TechWiz.
        Our goal is to create innovative and impactful digital solutions 🚀
      </p>

      {/* Team Members */}
      <h2 style={{
        fontSize: "2rem",
        fontWeight: "600",
        marginBottom: "1rem",
        textAlign: "center"
      }} data-aos="fade-up" data-aos-delay="400">
        Meet our Team
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
        margin: "0 auto 2rem auto",
        maxWidth: "100%",

      }}>
        {[
          { name: "Muddasir Ali", role: "Frontend Developer" },
          { name: "Hashir Arain", role: "Backend Developer" },
          { name: "Hassan", role: "UI/UX Designer" },
          { name: "Jabeer", role: "Project Manager" },
          { name: "Ahmed", role: "Full Stack Developer" }
        ].map((member, index) => (
          <div key={index} style={{
            backgroundColor: "#f9f9f9",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            flex: "1 1 300px",
            textAlign: "center",
            minWidth: "250px",
            maxWidth: "400px"
          }} data-aos="zoom-in" data-aos-delay={600 + index * 200}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#ddd",
              margin: "0 auto 1rem auto"
            }}></div>
            <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>{member.name}</h3>
            <p style={{ margin: 0, color: "#555" }}>{member.role}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <h2 style={{
        fontSize: "2rem",
        fontWeight: "600",
        marginBottom: "1rem",
        textAlign: "center"
      }} data-aos="fade-up" data-aos-delay="1400">
        Our Mission
      </h2>

      <p style={{
        fontSize: "1.1rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center"
      }} data-aos="fade-up" data-aos-delay="1600">
        We believe technology can solve real-world problems.
        Our mission is to build creative, user-friendly, and impactful solutions
        that make a difference ✨
      </p>
    </div>
  );
}
