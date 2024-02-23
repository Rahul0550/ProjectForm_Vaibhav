import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProjectForm from './components/CreateProject';
import ProjectTypeForm from './components/ProjectTypeForm';
import ViewSelector from './components/view';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CreateProjectForm/>} />
        <Route path="/project-type" element={<ProjectTypeForm/>} />
        <Route path="/view" element={<ViewSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
