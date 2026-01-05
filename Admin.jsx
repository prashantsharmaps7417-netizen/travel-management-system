import { useEffect, useState } from "react";
import "../style.css";

function Admin() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
 fetch("http://localhost/backend/api/getBookings.php")

      .then(res => res.json())
      .then(data => setBookings(data));
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch("http://localhost/backend/api/updateBooking.php", {

      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id=${id}&status=${status}`
    });
    loadBookings();
  };

  return (
    <div className="form">
      <h3>Admin Booking Management</h3>

      <table border="1" width="100%">
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Destination</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {bookings.map(b => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.user_id}</td>
            <td>{b.destination}</td>
            <td>{b.travel_date}</td>
            <td>{b.status}</td>
            <td>
              <button onClick={() => updateStatus(b.id, "Approved")}>Approve</button>
              <button onClick={() => updateStatus(b.id, "Rejected")}>Reject</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Admin;
