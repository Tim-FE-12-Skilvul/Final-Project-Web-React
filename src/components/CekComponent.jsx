import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { isChildStunted } from "./Stunting.js";
import "./Form.css";
import { faq } from "../data/index";

const messages = [
  "Semangat ya, Tetap jaga pola makan dan gaya hidup sehat.",
  "Terus pantau pertumbuhan anak, jangan sampai terlewatkan.",
  // Add more messages...
];

const CekComponent = () => {
  const [message, setMessage] = useState("");
  const [stuntedStatus, setStuntedStatus] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const age = parseInt(event.target.age.value);
    const sex = event.target.sex.value;
    const height = parseInt(event.target.height.value);
    const weight = parseInt(event.target.weight.value);

    const isStunted = isChildStunted(age, sex, height, weight);

    let message;
    if (isStunted) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      message = `Oh tidak, anak Anda terindikasi stunting. ${messages[randomIndex]}`;
    } else {
      message = "Selamat, anak Anda tidak terindikasi stunting.";
    }

    setMessage(message);
    setStuntedStatus(isStunted);
  };

  return (
    <div className="faq">
      <Row className="fw-bold animate__animated animate__fadeInUp animate__delay-1s justify-content-center align-items-center">
        <Col lg={6}>
          <div className="card max-width-card" style={{ maxWidth: "600px" }}>
            <h1 className="card-header text-center">Aplikasi Cek Stunting</h1>
            <div className="card-body">
              <form
                className={`form-stunting ${
                  message ? "form-stunting--result" : ""
                }`}
                onSubmit={handleFormSubmit}
              >
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Masukkan Umur (Bulan)"
                    id="age"
                    name="age"
                    required
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-select"
                    id="sex"
                    name="sex"
                    required
                  >
                    <option value="">Jenis Kelamin</option>
                    <option value="male">Pria</option>
                    <option value="female">Wanita</option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Masukkan Tinggi Badan (cm)"
                    id="height"
                    name="height"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Masukkan Berat Badan (kg)"
                    id="weight"
                    name="weight"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary d-flex justify-content-center mx-auto"
                >
                  Cek Status
                </button>
              </form>

              {message && (
                <div
                  id="output"
                  className={`output-message ${
                    stuntedStatus
                      ? "output-message--stunted"
                      : "output-message--not-stunted"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CekComponent;
