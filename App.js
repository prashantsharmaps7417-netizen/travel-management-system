import { useState } from "react";
import "./style.css";

import IndiaMap from "./components/IndiaMap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import PackageDetails from "./components/PackageDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import Booking from "./components/Booking";
import MyBookings from "./components/MyBookings";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home");
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
  <>
    <Home />
    <Destinations />
    <IndiaMap />
  </>
)}




      {page === "packages" && (
        <Packages
          openPackage={(pkg) => {
            setSelectedPackage(pkg);
            setPage("packageDetails");
          }}
        />
      )}

      {page === "packageDetails" && (
        <PackageDetails
          pkg={selectedPackage}
          goBack={() => setPage("packages")}
          goBook={() => setPage("booking")}
        />
      )}

      {page === "signup" && <Register />}
      {page === "login" && <Login />}
      {page === "booking" && <Booking />}
      {page === "mybookings" && <MyBookings />}

      <Footer />
    </>
  );
}

export default App;
