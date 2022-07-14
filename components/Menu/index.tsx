import React, { FC, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { css } from "@emotion/css";
import { useQuery } from "../../hooks";

const getMenuBtnStyle = (active: boolean) => active ? `${styles.dot} ${styles.arrowDown}` : `${styles.dot}`;

const link = css`
  text-decoration: none;
  color: black;
`;
interface MenuProps {
  currentRoute: string;
}

const Menu: FC<MenuProps> = ({ currentRoute }) => {
  const isMobile = useQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { route: "/support", name: "Support Us" },
    { route: "/about", name: "About" },
    { route: "/contact", name: "Contact" },
    { route: "/reel", name: "Reel" },
    { route: "/", name: "Projects" },
  ];

  return (
    <nav className={styles.menu}>
      {isMobile && (
        <div className={styles.dotSpan}>
          <div
            className={getMenuBtnStyle(isOpen)}
            onClick={() => {
              setIsOpen((p) => !p);
            }}
          ></div>
        </div>
      )}
      {isOpen && (
        <ul className={styles.menuList}>
          {menuItems.map(
            (i) => (
              <li
                key={i.name}
                className={styles.menuListItem}
                style={currentRoute === i.route ? { textDecoration: "underline" } : { textDecoration: "none" }}
              >
                <Link href={i.route} passHref>
                  {i.route.startsWith("http") ? (
                    <a className={link} target="_blank" rel="noreferrer">
                      {i.name}
                    </a>
                  ) : (
                    <div className={link}>{i.name}</div>
                  )}
                </Link>
              </li>
            ),
            this
          )}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
