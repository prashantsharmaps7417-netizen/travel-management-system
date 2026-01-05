import { useState } from "react";

function IndiaMap() {
  const [active, setActive] = useState(null);

  const states = [
    {
      name: "Goa",
      desc: "Goa is famous for beaches, nightlife and water sports.",
      highlights: "Beaches • Nightlife • Water Sports"
    },
    {
      name: "Rajasthan",
      desc: "Rajasthan is known for forts, palaces and royal heritage.",
      highlights: "Forts • Palaces • Desert"
    },
    {
      name: "Kerala",
      desc: "Kerala is known as God’s Own Country with backwaters and greenery.",
      highlights: "Backwaters • Nature • Ayurveda"
    }
  ];

  return (
    <div style={{ textAlign: "center", margin: "40px auto" }}>
      <h2>Explore India on Map 🇮🇳</h2>

      {/* IMAGE FROM PUBLIC FOLDER */}
      <img
  src="/india-map.png"
  alt="India Map"
  style={{
    width: "80%",
    maxWidth: "700px",  // 👈 almost full layout
    marginTop: "20px"
  }}
/>


      <div style={{ marginTop: "20px" }}>
        {states.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(s)}
            style={{
              margin: "6px",
              padding: "8px 14px",
              background: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {s.name}
          </button>
        ))}
      </div>

      {active && (
        <div
          style={{
            marginTop: "20px",
            background: "white",
            padding: "15px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          <h3>{active.name}</h3>
          <p>{active.desc}</p>
          <p><b>Highlights:</b> {active.highlights}</p>
        </div>
      )}
    </div>
  );
}

export default IndiaMap;
