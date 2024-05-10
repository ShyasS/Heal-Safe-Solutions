import React from 'react';
import ClientFirstComp from './ClientFirstComp';
import ClientSecComp from './ClientSecComp';

const ClientMainComp = () => {
  return (
    <div>
        <ClientFirstComp/>
        <ClientSecComp/>
    </div>
  )
}

export default ClientMainComp