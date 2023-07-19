import React from 'react'
import NavbarApp from '../components/navbar/NavbarApp';
import { Outlet } from 'react-router-dom';
import FooterApp from '../components/footer/FooterApp';

const LayoutApp = () => {
  return (
    <div className="layout">
        <NavbarApp />
        <Outlet />
        <FooterApp />
    </div>
  )
}

export default LayoutApp;