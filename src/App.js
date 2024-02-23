import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProjectForm from './components/CreateProject';
import ProjectTypeForm from './components/ProjectTypeForm';
import FormView from './components/FormView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CreateProjectForm/>} />
        <Route path="/project-type" element={<ProjectTypeForm/>} />
        <Route path="/view" element={<FormView />} />
        <Route path='*' element={"Page under construction"}/>
      </Routes>
    </Router>
  );
}

export default App;
