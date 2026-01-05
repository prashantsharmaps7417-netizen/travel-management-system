function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Explore The World With Us</h1>
        <p>Your trusted Travel Management System</p>
      </div>

      {/* INDIA IMAGE SECTION */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "30px auto",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Incredible India 🇮🇳</h2>

        <img
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
          alt="India Travel"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "260px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
          }}
        />

        <p style={{ marginTop: "12px", color: "#555" }}>
          Experience culture, heritage, mountains, beaches and traditions of India.
        </p>
      </div>
    </>
  );
}

export default Home;
