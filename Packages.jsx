function Packages({ openPackage }) {
  const packages = [
    {
      name: "Goa Beach Holiday",
      place: "Goa",
      days: "4 Days / 3 Nights",
      price: "₹12,999",
      speciality: "Beach • Nightlife • Water Sports",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      name: "Manali Mountain Escape",
      place: "Manali",
      days: "5 Days / 4 Nights",
      price: "₹15,999",
      speciality: "Snow • Adventure • Mountains",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    }
  ];

  return (
    <div className="card-section">
      <h2>Travel Packages</h2>
      <div className="cards">
        {packages.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} />
            <h3>{p.name}</h3>
            <p>{p.speciality}</p>
            <p>{p.days}</p>
            <p><b>{p.price}</b></p>
            <button onClick={() => openPackage(p)}>View Package</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
