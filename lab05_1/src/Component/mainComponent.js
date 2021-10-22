import { DISHES } from '../shared/dishes'
import { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
// import { Navbar, NavbarBrand } from 'reactstrap';
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
                <Header />
                <Menu dish={this.state.dishes}/>
                <Footer />
            </div>
        );
    }
    
}
export default Main;
