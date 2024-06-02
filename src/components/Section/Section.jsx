// src/pages/DocsPage/components/Section.jsx
import React from 'react';

const Section = ({ title, description, gifPath, activeSection, toggleSection }) => {
  return (
    <div className="section">
      <h2 onClick={() => toggleSection(title)} className="section-header">
        {title} {activeSection === title ? '▲' : '▼'}
      </h2>
      {activeSection === title && (
        <div className="section-content fade-in">
          <p>{description}</p>
          <img src={gifPath} alt={`${title} GIF`} className="gif" />
        </div>
      )}
    </div>
  );
};

export default Section;