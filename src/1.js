import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export default function QueryParamsExample() {
  return (
    <Router> 
      <QueryParams />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParams() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Cities</h2>
        <ul>
          <li>
            <Link to="/account?city=Bangalore">Bangalore</Link>
          </li>
          <li>
            <Link to="/account?city=Mumbai"> Mumbai</Link>
          </li>
          <li>
            <Link to="/account?city=Hyderabad">Hyderabad</Link>
          </li>
          
        </ul>

        <City name={query.get("city")} />
      </div>
    </div>
  );
}


