import React, { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { css } from '@emotion/css';

const link = css`
  text-decoration: none;
  color: black;
`
interface MenuProps {
  currentRoute: string;
}

const Menu: FC<MenuProps> = ({ currentRoute }) => {

  const menuItems = [
    { route: '/support', name: 'Support Us' },
    { route: '/about', name: 'About' },
    { route: '/contact', name: 'Contact' },
    { route: '/reel', name: 'Reel' },
    { route: '/', name: 'Projects' },
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
            <Link href={i.route} passHref>
              {i.route.startsWith('http') ? <a className={link} target="_blank" rel="noreferrer">
                {i.name}
              </a> : <div className={link}>{i.name}</div>}
            </Link>
          </li>
        ), this)}
      </ul>
    </nav>
  );
}

export default Menu;
