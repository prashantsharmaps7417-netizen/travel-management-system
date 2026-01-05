import { useEffect, useState } from "react";

function MyBookings() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost/backend/api/getBookings.php")
      .then(res=>res.json())
      .then(d=>setData(d));
  },[]);

  return (
    <div className="form" style={{width:"80%"}}>
      <h3>My Bookings</h3>
      <table>
        <tr><th>ID</th><th>Destination</th><th>Date</th><th>Status</th></tr>
        {data.map(b=>(
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.destination}</td>
            <td>{b.travel_date}</td>
            <td>{b.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default MyBookings;
