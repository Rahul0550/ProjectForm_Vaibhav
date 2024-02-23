import React from "react";

export default function CreateProjectForm() {
  return (
    <div className="container">
      <h3>Create a project</h3>
      <div>
        <lablel>Project Name</lablel>
        <br />
        <input placeholder="Enter project name here" />
      </div>
      <div>
        <lablel>Client</lablel>
        <br />
        <input type="select" placeholder="Select a client" />
        <p> or </p>
        <input type="select" placeholder="+ New Client" />
      </div>
      <div>
        <lablel>Dates</lablel>
        <br />
        <input type="date" />
        <p> - </p>
        <input type="date" />
      </div>
      <div>
        <lablel>Notes</lablel>
        <br />
        <input placeholder="Optional" />
      </div>
      <div>
        <button> Back </button>
        <button style={{ color: "blue" }}>Next</button>
      </div>
    </div>
  );
}
