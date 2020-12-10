import React, {Component} from 'react';
import {usersWithAddress} from "./arraysOfObjects/usersList";
import {cars} from "./arraysOfObjects/carsList";
import UserComponent from "./components/user/UserComponent";
import CarsComponent from "./components/car/CarsComponent";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        usersWithAddress.map(human => <UserComponent user = {human} key = {human.id}/>)
                    }
                </div>
                <div className={'forCars'}>
                    {
                        cars.map((someCar, index) => <CarsComponent car = {someCar} key = {index}/>)
                    }
                </div>
            </div>
        );
    }
}

export default App;