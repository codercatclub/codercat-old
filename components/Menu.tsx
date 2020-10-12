import React, { FC } from 'react';
import Link from 'next/link'

interface MenuProps {
  currentRoute: string;
}

const Menu: FC<MenuProps> = ({ currentRoute }) => {

  const menuItems = [
    { route: '/about', name: 'About' },
    { route: '/contacts', name: 'Contacts' },
    { route: '/', name: 'Codercat' },
  ];

  return (
    <nav id="menu">
      <ul id="menu-list">
        {menuItems.map(i => (
          <li
            key={i.name}
            className="menu-list-item"
            style={currentRoute === i.route
              ? { textDecoration: 'underline' } : { textDecoration: 'none' }}
          >
            <Link href={i.route}>
              {i.name}
            </Link>
          </li>
        ), this)}
      </ul>
    </nav>
  );
}

export default Menu;
