import { DISHES } from '../shared/dishes'
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Menu from './menuComponent';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dish={this.state.dishes}/>
            </div>
        );
    }
    
}
export default Main;
