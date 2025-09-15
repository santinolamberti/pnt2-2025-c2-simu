'use client';

import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="logoContainer">
      <Link href="/">
        <span className="logo">Gestor de Películas</span>
      </Link>
    </div>
  );
};

export default Logo;