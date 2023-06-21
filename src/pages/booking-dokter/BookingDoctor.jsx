import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { DoctorContext } from '../../context/DoctorContext';
import { AuthContext } from '../../context/AuthContext';
import { Container, Row, Col } from 'react-bootstrap';

function BookingDoctor() {
  const [doctors, setDoctors] = useState([]);
  const { loginSuccess } = useContext(AuthContext); // Use loginSuccess from AuthContext
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://64550ab8a74f994b33505ccc.mockapi.io/doctor')
      .then((response) => setDoctors(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleBookingClick = (doctorId, doctorName) => {
    if (loginSuccess) {
      navigate(`/konsul/${doctorName}`, { state: { id: doctorId } });
    } else {
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate('/login');
  };

  return (
    <>
      <div className="faq">
        {showAlert && (
          <div className="alert-container">
            <div className="alert">
              <p>Anda harus login terlebih dahulu untuk melanjutkan konsultasi.</p>
              <button onClick={handleCloseAlert}>Close</button>
            </div>
          </div>
        )}
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
                  <div
                    onClick={() => handleBookingClick(doctor.id, doctor.name)}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      cursor: 'pointer',
                    }}
                  >
                    <div className="card h-100 p-3">
                      <img
                        src={doctor.profilePictureUrl}
                        className="card-img-top"
                        alt={doctor.name}
                        style={{ objectFit: 'contain', height: '200px' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center" style={{ fontSize: '18px' }}>
                          {doctor.name}
                        </h5>
                        <p className="card-text text-center" style={{ fontSize: '15px' }}>
                          {doctor.hospitalName}
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">{doctor.hospitalLocation}</small>
                      </div>
                    </div>
                  </div>
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
