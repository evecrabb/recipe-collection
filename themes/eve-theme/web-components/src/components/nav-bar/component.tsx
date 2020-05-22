import { Component, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav.scss',
  shadow: true
})

export class NavBar {
  render() {
    return (
      <header>
        <nav>
          This is the navBar!
        </nav>
      </header>
    );
  }
}