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
      }}>
        About Our Team
      </h1>

      {/* Intro */}
      <p style={{
        fontSize: "1.2rem",
        maxWidth: "800px",
        margin: "0 auto 2rem auto",
        textAlign: "center"
      }}>
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
      }}>
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
          { name: "Jabeer", role: "Project Manager" }
        ].map((member, index) => (
          <div key={index} style={{
            backgroundColor: "#f9f9f9",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "220px",
            textAlign: "center",
            flexShrink: 0      
          }}>
            <div style={{
              width: "80px",
              height: "80px",
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
      }}>
        Our Mission
      </h2>

      <p style={{
        fontSize: "1.1rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        We believe technology can solve real-world problems.  
        Our mission is to build creative, user-friendly, and impactful solutions 
        that make a difference ✨
      </p>
    </div>
  );
}
