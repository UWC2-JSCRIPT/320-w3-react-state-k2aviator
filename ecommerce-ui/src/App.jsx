import './bnbs.css';
import React from 'react';
import bnbs from './bnbs.json';
import RenderBnb from './RenderBnb';

const bnbsArray = bnbs

function App() {
  return (
  <RenderBnb bnbs={bnbsArray} />
  );
}

export default App;
