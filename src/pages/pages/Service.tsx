import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MenuItem } from '../components/types';

interface ServiceProps {
  menuItems: MenuItem[];
}

const Service: React.FC<ServiceProps> = ({ menuItems }) => {
  return (
    <>
      <h1>Hello Bro </h1>
    </>
  );
};

export default Service;
