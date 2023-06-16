import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorContext } from "../../context/DoctorContext";

function BookingDoctor() {
  const [doctors, setDoctor] = useState([]);

  useEffect(() => {
    axios
      .get("https://64550ab8a74f994b33505ccc.mockapi.io/doctor")
      .then((response) => setDoctor(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
        <h2 className="mt-4 mb-4"></h2>
          {/* Wrap kontennya dengan DoctorContext.Provider */}
          <DoctorContext.Provider value={doctors}>
            {doctors.map((doctor) => (
              <div className="col-md-6 mb-4 mt-5 animate__animated animate__fadeInUp animate__delay-1s" key={doctor.id}>
                <Link
                  to={`/konsul/${doctor.name}`}
                  state={{ id: doctor.id }}
                  style={{ textAlign: "center", textDecoration: "none", color: "black", cursor: "pointer" }}
                >
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
                </Link>
              </div>
            ))}
          </DoctorContext.Provider>
        </div>
      </div>
    </>
  );
}

export default BookingDoctor;
