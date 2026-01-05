function PackageDetails({ pkg, goBack, goBook }) {
  if (!pkg) return null;

  return (
    <div className="form" style={{ width: "600px" }}>
      <button onClick={goBack}>⬅ Back</button>
      <img src={pkg.img} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h2>{pkg.name}</h2>
      <p><b>Destination:</b> {pkg.place}</p>
      <p><b>Duration:</b> {pkg.days}</p>
      <p><b>Includes:</b> {pkg.speciality}</p>
      <p><b>Price:</b> {pkg.price}</p>
      <button onClick={goBook}>Buy Package</button>
    </div>
  );
}

export default PackageDetails;
