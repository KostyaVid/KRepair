import React from 'react';
import AddressRoute from '../../components/AddressRoute/AddressRoute';
import MapFooter from '../../components/Footer/MapFooter/MapFooter';

const Contacts = () => {
  return (
    <>
      <AddressRoute className=" container" />
      <MapFooter props />
    </>
  );
};

export default Contacts;
