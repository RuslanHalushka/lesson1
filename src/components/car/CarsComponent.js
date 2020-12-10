import React, {Component} from 'react';
import './Cars.css'

class CarsComponent extends Component {
    render() {
        let {car} = this.props;
        return (
                <div>{car.name}, {car.model}, {car.year}, {car.condition}</div>
        );
    }
}

export default CarsComponent;