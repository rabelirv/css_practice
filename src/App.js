import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
    <head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
    </head>
      <body>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
        <main>
        <h1>Let's Go Exploring</h1>
        <p> Come with me! Do you wannna ride or die? ddadadadadadada</p>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfMq_IJ_LbXm6dYOko7_VyHs2QM5JoP2f2AM-2ZSxJ-brO42bZA" alt="left arrow"/></a>
        </main>
      </body>
    </div>);
  }
}

export default App;
