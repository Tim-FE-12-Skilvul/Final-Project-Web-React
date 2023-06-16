import { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { DoctorContext } from "../../context/DoctorContext";

function DoctorDetail() {
  const location = useLocation();
  const doctors = useContext(DoctorContext);
  const history = useHistory();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    axios
      .get(`https://64550ab8a74f994b33505ccc.mockapi.io/doctor/${location.state.id}`)
      .then((response) => setDoctor(response.data))
      .catch((error) => console.log(error));    
  }, [location.state.id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    };

  const handleBooking = () => {
    history.push({
        pathname: "/payment",
        state: { doctor, selectedDate },
    });
    console.log("Booking dokter:", doctor);
  };

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
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
      <div className="container">
        <div className="card p-3">
            <h4 className="card-title" >Deskripsi</h4>
            <p className="card-text" style={{ textAlign: "center" }}>
                {doctor.description}
            </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Pilih Tanggal Booking:</h4>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleBooking}>
        Booking
      </button>
    </div>
  );
}

export default DoctorDetail;
