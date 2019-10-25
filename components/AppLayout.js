
import React from 'react';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
        <Link href="/"><a>HYEJIN</a></Link>
        <Link href="/product"><a>PRODUCT</a></Link>
        <Link href="/mypage">MYPAGE</Link>
        {children}
    </div>
  );
};

export default AppLayout;