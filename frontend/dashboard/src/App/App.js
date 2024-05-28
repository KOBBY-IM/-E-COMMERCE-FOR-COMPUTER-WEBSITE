import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
    componentDidMount() {
      document.addEventListener('keydown', this.handleLogOut);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleLogOut);
    }

  render() {
    return (
      <div>
        <h1> Hello World</h1>
      </div>
  );
}
}

export default App;
