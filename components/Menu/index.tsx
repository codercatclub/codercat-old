import React, { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

interface MenuProps {
  currentRoute: string;
}

const Menu: FC<MenuProps> = ({ currentRoute }) => {

  const menuItems = [
    { route: 'https://www.patreon.com/codercat', name: 'Support Us' },
    { route: '/about', name: 'About' },
    { route: '/contacts', name: 'Contacts' },
    { route: '/', name: 'Codercat' },
  ];

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        {menuItems.map(i => (
          <li
            key={i.name}
            className={styles.menuListItem}
            style={currentRoute === i.route
              ? { textDecoration: 'underline' } : { textDecoration: 'none' }}
          >
            <Link href={i.route}>
              {i.route.startsWith('http') ? <a target="_blank" rel="noreferrer">
                {i.name}
              </a> : i.name}
            </Link>
          </li>
        ), this)}
      </ul>
    </nav>
  );
}

export default Menu;
