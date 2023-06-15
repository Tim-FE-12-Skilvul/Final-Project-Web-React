import { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { DoctorContext } from "./context/DoctorContext";

function DoctorDetail() {
  const { id } = useParams();
  const location = useLocation();
  const doctors = useContext(DoctorContext);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    console.log(location)
    console.log(doctors)
    axios
      .get(`https://64550ab8a74f994b33505ccc.mockapi.io/doctor/${location.state.id}`)
      .then((response) => setDoctor(response.data))
      .catch((error) => console.log(error));    
  }, [location.state.id]);

  const handleBooking = () => {
    // Proses booking dokter
    // Implementasikan logika booking yang diinginkan di sini
    console.log("Booking dokter:", doctor);
  };

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Detail Dokter</h2>
      <div className="card p-3">
        <img
          src={doctor.profilePictureUrl}
          className="card-img-top"
          alt={doctor.name}
          style={{ objectFit: "contain", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "18px" }}>
            {doctor.name}
          </h5>
          <p className="card-text" style={{ textAlign: "center" }}>
            {doctor.hospitalName}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{doctor.hospitalLocation}</small>
        </div>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleBooking}>
        Booking
      </button>
    </div>
  );
}

export default DoctorDetail;
