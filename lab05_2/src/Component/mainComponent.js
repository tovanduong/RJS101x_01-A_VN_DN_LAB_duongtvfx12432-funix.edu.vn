import { DISHES } from '../shared/dishes'
import { Component } from 'react';
import Home from './homeComponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import history from "/history";
// import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './headerComponent';
import Footer from './footerComponent';
// import history from "./history";
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
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <BrowserRouter>
                <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dish={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                </div>
                </BrowserRouter>
            </div>
        );
    }

}
export default Main;

