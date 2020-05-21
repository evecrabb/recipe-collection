import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav.scss',
  shadow: true
})

export class NavBar {
  render() {
    return (
      <footer>
        This is the footer
      </footer>
    );
  }
}