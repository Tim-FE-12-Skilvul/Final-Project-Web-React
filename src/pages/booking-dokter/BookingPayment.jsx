import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BookingPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { doctor, selectedDate } = location.state;
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (paymentSuccess) {
        setShowAlert(true);
    }
  }, [paymentSuccess, navigate]);

  const handlePayment = () => {
    if (paymentMethod === "") {
        alert("Harap pilih metode pembayaran");
        return;
    }

    setPaymentSuccess(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate("/konsul");
  };

  return (
    <div className="container animate__animated animate__fadeInUp animate__delay-1s">
      <h2 className="mt-4 mb-4">Pembayaran</h2>
      <h3>Detail Booking</h3>
      <p>Dokter: {doctor.name}</p>
      <p>Tanggal Booking: {selectedDate.toLocaleDateString()}</p>
      <p>Harga : Rp 75.000,00</p>

      <h4>Pilih Metode Pembayaran</h4>
      <select
        className="form-select"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">Pilih Metode Pembayaran</option>
        <option value="Credit Card">Kartu Kredit</option>
        <option value="Bank Transfer">Transfer Bank</option>
        <option value="E-Wallet">E-Wallet</option>
      </select>
      
        <button className="btn btn-primary mt-4" onClick={handlePayment} disabled={paymentMethod==""}>
            Bayar
        </button>

      {showAlert && (
        <div className="alert-container">
            <div className="alert">
                <p>Pembayaran Berhasil!</p>
            <button onClick={handleCloseAlert}>Close</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default BookingPayment;
