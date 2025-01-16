import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListContainer from "./components/ListContainer/ListContainer";
import { LocationProvider } from "./contexts/LocationContext";

const AppRoutes: React.FC = () => {
  return (
    <LocationProvider>
      <Router>
        <Routes>
          {/* Main route */}
          <Route path="/" element={<ListContainer />} />
        </Routes>
      </Router>
    </LocationProvider>
  );
};

export default AppRoutes;
