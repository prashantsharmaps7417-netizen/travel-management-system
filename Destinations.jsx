import { useState } from "react";

function Destinations() {
  const [active, setActive] = useState(null);

  const places = [
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Goa is famous for its beautiful beaches, nightlife, Portuguese culture and water sports.",
      highlights: "Beaches • Nightlife • Water Sports"
    },
    {
      name: "Manali",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "Manali is a popular hill station known for snow, mountains, adventure sports and scenic views.",
      highlights: "Snow • Mountains • Adventure"
    },
    {
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      desc: "Paris is the city of love, famous for the Eiffel Tower, art museums, fashion and culture.",
      highlights: "Eiffel Tower • Art • Romance"
    },
    {
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3",
      desc: "Dubai is known for luxury shopping, skyscrapers, desert safari and modern lifestyle.",
      highlights: "Burj Khalifa • Desert Safari • Shopping"
    }
  ];

  return (
    <div className="card-section">
      <h2>Popular Destinations</h2>

      {/* DESTINATION CARDS */}
      <div className="cards">
        {places.map((p, i) => (
          <div
            className="card"
            key={i}
            onClick={() => setActive(p)}
            style={{ cursor: "pointer" }}
          >
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>

      {/* DETAILS SECTION */}
      {active && (
        <div
          style={{
            marginTop: "40px",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <h2>{active.name}</h2>

          <img
            src={active.img}
            alt={active.name}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          />

          <p style={{ fontSize: "15px", marginBottom: "10px" }}>
            {active.desc}
          </p>

          <p>
            <b>Highlights:</b> {active.highlights}
          </p>
        </div>
      )}
    </div>
  );
}

export default Destinations;
