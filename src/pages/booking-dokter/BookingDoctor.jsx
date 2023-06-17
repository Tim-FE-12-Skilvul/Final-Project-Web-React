import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorContext } from "../../context/DoctorContext";
import { Container, Row, Col } from "react-bootstrap";

function BookingDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("https://64550ab8a74f994b33505ccc.mockapi.io/doctor")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="faq">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                List Dokter
              </h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-2 g-4 pt-5 animate__animated animate__fadeInUp animate__delay-1s">
            <DoctorContext.Provider value={doctors}>
              {doctors.map((doctor) => (
                <div className="col" key={doctor.id}>
                  <Link
                    to={`/konsul/${doctor.name}`}
                    state={{ id: doctor.id }}
                    style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
                  >
                    <div className="card h-100 p-3">
                      <img
                        src={doctor.profilePictureUrl}
                        className="card-img-top"
                        alt={doctor.name}
                        style={{ objectFit: "contain", height: "200px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center" style={{ fontSize: "18px" }}>
                          {doctor.name}
                        </h5>
                        <p className="card-text text-center" style={{ fontSize: "15px" }}>{doctor.hospitalName}</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">{doctor.hospitalLocation}</small>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </DoctorContext.Provider>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BookingDoctor;
