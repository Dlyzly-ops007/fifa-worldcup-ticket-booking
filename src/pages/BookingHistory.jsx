import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });
    if (error) {
      console.error(error);
      alert("Failed to retrieve bookings");
      return;
    }
    setBookings(data);
    setLoaded(true);
  }

  async function handleDelete(id) {
    const confirmed = window.confirm("Delete this booking?");
    if (!confirmed) return;

    const { error } = await supabase.from("bookings").delete().eq("id", id);
    if (error) {
      console.error(error);
      alert("Failed to delete booking");
      return;
    }
    setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <main className="history-page">
      <h1>Booking History</h1>
      <button className="history-button" onClick={getBookings}>
        View Bookings
      </button>

      {loaded && bookings.length === 0 && (
        <p className="status-text">No bookings yet.</p>
      )}

      <div className="ticket-list">
        {bookings.map((booking) => (
          <div className="ticket-card" key={booking.id}>
            <div className="ticket-main">
              <p className="ticket-name">{booking.name}</p>
              <p className="ticket-venue">{booking.venue}</p>
            </div>
            <div className="ticket-stub">
              <div className="ticket-field">
                <span>Tickets</span>
                <strong>{booking.tickets}</strong>
              </div>
              <div className="ticket-field">
                <span>Stand</span>
                <strong>{booking.stand}</strong>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(booking.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BookingHistory;
