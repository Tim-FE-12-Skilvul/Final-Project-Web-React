import { useLocation } from "react-router-dom";

function BookingPayment() {
  const location = useLocation();
  const { doctor, selectedDate } = location.state;

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Pembayaran</h2>
      <h3>Detail Booking</h3>
      <p>Dokter: {doctor.name}</p>
      <p>Tanggal Booking: {selectedDate.toLocaleDateString()}</p>
      {/* Tambahkan form pembayaran atau komponen lain yang diperlukan */}
    </div>
  );
}

export default BookingPayment;
