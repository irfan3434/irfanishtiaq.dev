import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;
