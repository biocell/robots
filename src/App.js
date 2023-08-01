import React, {Component} from 'react';
import './App.css';
import Cardlist from './Cardlist';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (user => this.setState({robots: user}));
  
  }

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})

  }

render(){
  const {robots, searchfield} = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
   
  })


    return !robots.length ? 
    <h1>Hola error error....loading?</h1> : 
(
     <div className='tc'>
      <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots= {filteredRobots} />
        </Scroll>
   </div>
  );
}
}





export default App;
