import React, {Component} from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

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
    <h1>Please wait</h1> : 
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
