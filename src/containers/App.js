import {React, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield:'',
         }
     }


     onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value});
        }
     
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots :  users}));
        
    }

    render(){
            const {robots, searchfield} = this.state;

            const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            });

            if (robots.length === 0){
                return <h1>Loading...</h1>;
            }
            else{ 
            return(
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                    </Scroll>
                </div>
            );  
            } 
    }
  
}

export default App;