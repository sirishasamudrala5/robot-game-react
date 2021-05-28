import * as React from 'react'
import './css/App.css'
import Header from './components/static/Header'
import GameContainer from './components/containers/GameContainer'

class App extends React.Component {
  public render() {
    return (
      <div>
          <Header name="Siri" />
          <GameContainer />
      </div>
    );
  }
}

export default App;