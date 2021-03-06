import DishDetail from "./detailComponent";
import { Component } from "react";
import Home from "./homeComponent";
import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Contact from "./contactComponent";
import About from "./aboutComponent";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Menu from "./menuComponent";
import history from "../helps/history";
import { actions } from 'react-redux-form';
import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {
      dispatch(fetchDishes());
    },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };
    return (
        <div>
          { console.log(this.props.dishes)}
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dish={this.props.dishes} />}
              />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route
                exact
                path="/Aboutus"
                component={() => <About leaders={this.props.leaders} />}
              />
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
