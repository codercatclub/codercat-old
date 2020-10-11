import React, { Component } from 'react';
import Link from 'next/link'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      items: [
        { route: '/about', name: 'About' },
        { route: '/contacts', name: 'Contacts' },
        { route: '/', name: 'Codercat' },
      ],
    };
  }

  render() {
    const { title, items, selectedRoute } = this.state;

    return (
      <div id="menu">
        <h1 id="menu-title">
          {title}
        </h1>
        <ul id="menu-list">
          {items.map(i => (
            <li
              id={i.id}
              key={i.name}
              className="menu-list-item"
              style={selectedRoute === i.route
                ? { textDecoration: 'underline' } : { textDecoration: 'none' }}
            >
              <Link href={i.route}>
                {i.name}
              </Link>
            </li>
          ), this)}
        </ul>
      </div>
    );
  }
}
