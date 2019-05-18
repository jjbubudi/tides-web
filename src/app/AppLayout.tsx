import React from 'react';

export class AppLayout extends React.Component {
  render() {
    return <div style={{ maxWidth: '800px', margin: 'auto' }}>{this.props.children}</div>;
  }
}
