import { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { DoctorContext } from "../../context/DoctorContext";
import { Container, Row, Col } from "react-bootstrap";

function DoctorDetail() {
  const location = useLocation();
  const doctors = useContext(DoctorContext);
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://64550ab8a74f994b33505ccc.mockapi.io/doctor/${location.state.id}`
      )
      .then((response) => setDoctor(response.data))
      .catch((error) => console.log(error));
  }, [location.state.id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              Pilih Jadwal
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-1 g-3 pt-3 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="container animate__animated animate__fadeInUp animate__delay-1s">
            <div className="card p-3">
              <img
                src={doctor.profilePictureUrl}
                className="card-img-top"
                alt={doctor.name}
                style={{ objectFit: "contain", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "18px", textAlign: "center" }}>
                  {doctor.name}
                </h5>
                <p className="card-text text-center">{doctor.hospitalName}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted offset-md-4">{doctor.hospitalLocation}</small>
              </div>
            
            <div className="container mt-4">
              <h4 className="card-title text-center">Deskripsi</h4>
              <p className="card-text text-center">{doctor.description}</p>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 offset-md-3 ">
                <h4 className="text-center">Pilih Tanggal Booking:</h4>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="form-control offset-md-3 "
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to={`/booking/${doctor.id}`} state={{ doctor, selectedDate }}>
                <button className="btn btn-primary" disabled={!selectedDate}>
                  Booking
                </button>
              </Link>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default DoctorDetail;
