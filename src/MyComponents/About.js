import React from "react";

const About = () => {
  return (
    <div className="container my-3">
      <h3>About This App</h3>

      <p>
        This is a Todo App. Here we write about our project and technologies used.
      </p>

      <p>
        We have used <strong>ReactJS</strong> for frontend, 
        <strong> NodeJS</strong> and <strong>ExpressJS</strong> for backend, 
        and <strong>MongoDB</strong> as database.
      </p>
    </div>
  );
};

export default About;