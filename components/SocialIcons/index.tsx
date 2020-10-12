import React, { FC } from 'react';
import styles from './styles.module.css';


interface SocialInfoUser {
  name: string;
  github: string;
  instagram: string;
  twitter: string;
}

interface SocialIconsProps {
  users: SocialInfoUser[];
}

const SocialIcons: FC<SocialIconsProps> = ({ users }) => (
  <div className={styles.container}>
    {users.map(user => (
      <div className={styles.link} key={user.name}>
        <span className={styles.item}>
          {user.name}
        </span>
        <a href={user.github} target="_blank">
          <i className={`fa fa-github ${styles.item}`} />
        </a>
        <a href={user.instagram} target="_blank">
          <i className={`fa fa-instagram  ${styles.item}`} />
        </a>
        <a href={user.twitter} target="_blank">
          <i className={`fa fa-twitter  ${styles.item}`} />
        </a>
      </div>
    ))}
  </div>
);

export default SocialIcons;