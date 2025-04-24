import React, { useState } from 'react';

const AboutPage = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1>About Page {state}</h1>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
};

export default AboutPage;
