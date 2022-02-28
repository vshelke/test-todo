import { Link } from "react-router-dom";
import "./App.css";


function App() {

  return (
    <div>
      <header>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link> |{" "}  
          <Link to="/new">New Todo</Link> |{" "}
          <Link to="/view">View Todo</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
