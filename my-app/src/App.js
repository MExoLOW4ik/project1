import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ApiPage from './ApiPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Todo List</h1>
        {/* Your existing components and logic here */}

        {/* Add a button to navigate to the API page */}
        <Link to="/api-page">
          <button>Go to API Page</button>
        </Link>

        <Switch>
          {/* Define the route for the API page */}
          <Route path="/api-page" component={ApiPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
