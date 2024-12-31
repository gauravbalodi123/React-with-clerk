import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-primary text-white d-flex flex-column position-fixed top-0 start-0 h-100 p-5" style={{ width: '15rem' }}>
      {/* Sidebar Links */}
      <div className="nav flex-column">
        <Link to="/" className="nav-link text-white text-center py-2 my-1 bg-primary rounded hover-bg-secondary">
          HOME
        </Link>
        <Link to="/issue" className="nav-link text-white text-center py-2 my-1 bg-primary rounded hover-bg-secondary">
          ISSUES
        </Link>
        <Link to="/newissue" className="nav-link text-white text-center py-2 my-1 bg-primary rounded hover-bg-secondary">
          ADD TASKS
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
