import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorContext } from "../../context/DoctorContext";

function ListDoctor() {
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
          {/* Wrap kontennya dengan DoctorContext.Provider */}
          <DoctorContext.Provider value={doctors}>
            {doctors.map((doctor) => (
              <div className="col-md-6 mb-4" key={doctor.id}>
                <Link
                  to={`/booking/${doctor.name}`}
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

export default ListDoctor;
