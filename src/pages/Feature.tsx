import React, { useEffect } from "react";

import Navbar from "../componenets/Navbar";
import Menu from "../componenets/Menu";
import Footer from "../componenets/Footer";

export default function Feature() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}