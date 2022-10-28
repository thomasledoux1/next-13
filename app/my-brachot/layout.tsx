import Link from 'next/link';
import React from 'react';

const MyBrachotLayout = ({ children }: { children: React.ReactNode }) => {
  console.log('mybrachot layout rendered');
  return (
    <>
      <aside>
        <ul>
          <Link href="/my-brachot/favorieten">Favorieten</Link>
          <Link href="/my-brachot/orders">Orders</Link>
        </ul>
      </aside>
      {children}
    </>
  );
};

export default MyBrachotLayout;
