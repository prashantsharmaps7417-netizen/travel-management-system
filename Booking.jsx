import { useState } from "react";

function Booking() {
  const [destination,setDestination]=useState("");
  const [date,setDate]=useState("");

  const bookNow = async () => {
    const res = await fetch("http://localhost/backend/api/createBooking.php",{
      method:"POST",
      headers:{ "Content-Type":"application/x-www-form-urlencoded" },
      body:`user_id=1&destination=${destination}&date=${date}`
    });
    alert(await res.text());
  };

  return (
    <div className="form">
      <h3>Book Travel</h3>
      <input placeholder="Destination" onChange={e=>setDestination(e.target.value)} />
      <input type="date" onChange={e=>setDate(e.target.value)} />
      <button onClick={bookNow}>Confirm Booking</button>
    </div>
  );
}

export default Booking;
