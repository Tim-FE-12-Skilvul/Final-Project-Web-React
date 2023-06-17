import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { isChildStunted } from "./Stunting.js";
import "./Form.css";
import { faq } from "../data/index";

const messages = [
  "Semangat ya, Tetap jaga pola makan dan gaya hidup sehat.",
  "Terus pantau pertumbuhan anak, jangan sampai terlewatkan.",
  "Pastikan anak mendapat asupan nutrisi yang cukup setiap hari.",
  "Perhatikan juga pola tidur dan aktivitas anak.",
  "Jangan ragu untuk berkonsultasi dengan dokter atau ahli gizi jika ada kekhawatiran.",
  "Ayo jaga asupan sayur dan buah pada menu harian anak.",
  "Jangan lupa untuk menambahkan protein dan karbohidrat pada makanan anak.",
  "Ciptakan lingkungan yang mendukung gaya hidup sehat bagi anak.",
  "Penting untuk melibatkan anak dalam proses memilih dan memasak makanan.",
  "Ajak anak berolahraga atau bermain di luar rumah untuk menjaga kesehatannya.",
  "Anak-anak butuh pola makan yang teratur dan terukur untuk mendukung pertumbuhannya.",
  "Perhatikan juga faktor lingkungan seperti sanitasi dan kebersihan untuk menjaga kesehatan anak.",
  "Penting untuk memberikan contoh pola makan dan gaya hidup sehat pada anak.",
  "Ayo kreasikan makanan sehat yang disukai anak untuk membangkitkan selera makan.",
  "Perbanyak asupan air putih dan hindari minuman manis berlebihan pada anak.",
  "Selalu perhatikan pertumbuhan dan perkembangan anak dari waktu ke waktu.",
  "Bersama-sama kita bisa mencegah stunting dan menjaga kesehatan anak.",
  "Jangan biarkan anak terlalu lama menatap layar gadget atau televisi.",
  "Pertumbuhan anak tergantung pada nutrisi yang ia terima, jangan sampai terabaikan.",
  "Ayo mulai dari sekarang, jaga pola makan dan gaya hidup sehat bagi anak.",
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
            <h1 className="card-title fw-bold mb-5 text-center">Aplikasi Cek Stunting</h1>
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
        </Col>
      </Row>
    </div>
  );
};

export default CekComponent;
