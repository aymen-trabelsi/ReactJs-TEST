import React, { useEffect } from 'react';
import './styles/global.scss';
import di from './di';

function App() {

  useEffect(() => {
   di.partner.getPartners().then(data => console.log(data))
   di.partnerCategory.getPartnersCategries().then(data => console.log(data))
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
