import React from 'react';
import { Link } from 'react-router-dom';

const main1 = () => {
  return (
    <section id="header">
      <Link to="/">
        <img src={bg1} className="logo" alt="Logo" />
      </Link>
      <div>
        <h1>Shop</h1>
        <p>Shop page content goes here.</p>
      </div>
    </section>
  );
};

export default main1;
