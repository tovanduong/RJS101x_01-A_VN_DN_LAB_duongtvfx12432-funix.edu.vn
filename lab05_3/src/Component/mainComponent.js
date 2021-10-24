import { DISHES } from '../shared/dishes'
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import history from "./../../node_modules/history/cjs/history";
import { Component } from 'react';
import Home from './homeComponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Contact from './contactComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
// import history from "./history";
import Menu from './menuComponent';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        return (
            <div>
                <BrowserRouter history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/menu' component={() => <Menu dish={this.state.dishes} />} />
                            <Route exact path='/contactus' component={Contact} />
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

