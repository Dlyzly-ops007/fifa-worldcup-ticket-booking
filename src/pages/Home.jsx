import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to World Cup Ticket Booking</h1>
      <p>Browse upcoming matches and book your seat.</p>
      <Link className="cta-button" to="/matches">
        View Matches
      </Link>
    </main>
  );
}

export default Home;
