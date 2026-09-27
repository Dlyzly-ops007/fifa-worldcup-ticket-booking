import { Link } from "react-router-dom";

function MatchRow(props) {
  return (
    <div className="match-row">
      <div className="match-row-info">
        <h2>
          {props.team1} <span>vs</span> {props.team2}
        </h2>
        <p>
          {props.venue} · {props.date}
        </p>
      </div>
      <Link to="/booking">
        <button>Book Ticket</button>
      </Link>
    </div>
  );
}

function Matches() {
  return (
    <main className="matches-page">
      <h1>Upcoming World Cup Matches</h1>
      <div className="matches-list">
        <MatchRow
          team1="Brazil"
          team2="Argentina"
          venue="MetLife Stadium, New Jersey"
          date="14 November 2026"
        />
        <MatchRow
          team1="France"
          team2="Germany"
          venue="AT&T Stadium, Dallas"
          date="17 November 2026"
        />
        <MatchRow
          team1="Spain"
          team2="England"
          venue="Estadio Azteca, Mexico City"
          date="21 November 2026"
        />
        <MatchRow
          team1="Portugal"
          team2="Netherlands"
          venue="BC Place, Vancouver"
          date="25 November 2026"
        />
      </div>
    </main>
  );
}

export default Matches;
