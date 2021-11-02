import { DISHES } from '../shared/dishes'
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import DishDetail from './detailComponent';
import { Component } from 'react';
import Home from './homeComponent';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Contact from './contactComponent';
import About from './aboutComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import Menu from './menuComponent';
import history from '../helps/history';
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
        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
            )
        }
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/menu' component={() => <Menu dish={this.state.dishes} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route exact path='/contactus' component={Contact} />
                            <Route exact path='/Aboutus' component={() => <About leaders={this.state.leaders} />}/>
                            <Redirect to="/home" />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }

}
export default Main;

