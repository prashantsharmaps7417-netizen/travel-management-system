function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <h2>TravelPro ✈️</h2>
      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("packages")}>Packages</button>
        <button onClick={() => setPage("signup")}>Sign Up</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("booking")}>Book</button>
        <button onClick={() => setPage("mybookings")}>My Bookings</button>
      </div>
    </div>
  );
}

export default Navbar;
