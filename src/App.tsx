import React, { useEffect } from 'react';
import './styles/global.scss';
import di from './di';
import PageHeader from '@components/pageHeader';

function App() {

  useEffect(() => {
   di.partner.getPartners().then(data => console.log(data))
   di.partnerCategory.getPartnersCategries().then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <PageHeader />
    </div>
  );
}

export default App;
