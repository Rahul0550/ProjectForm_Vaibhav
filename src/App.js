import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProjectForm from './components/CreateProject';
import ProjectTypeForm from './components/ProjectTypeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CreateProjectForm/>} />
        <Route path="/project-type" element={<ProjectTypeForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
