import React from 'react';
import './home.css';

function Quote() {
  const par = ' reprehenderit quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non id est laborum.';

  return (
    <section className="Home">
      <h1>Read carefully, our daily quote</h1>
      <p>{par}</p>
    </section>
  );
}

export default Quote;
