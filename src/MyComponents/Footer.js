import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">

        <p className="mb-1">
          © {new Date().getFullYear()} MyTodosList
        </p>

        <small>
          Built by <strong>Dhanraj</strong> 🚀
        </small>

      </div>
    </footer>
  );
};

export default Footer;