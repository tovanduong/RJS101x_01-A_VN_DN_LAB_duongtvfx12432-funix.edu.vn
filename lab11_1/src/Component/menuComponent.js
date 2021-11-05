import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

function RenderMenu({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
const Menu = function (props) {
  console.log(props)
  const menu =
    props.dish.dishes&&
    props.dish.dishes.map(
      (
        dishes 
      ) => (
        <div className="col-12 col-md-5 m-1" key={dishes.id}>
          <RenderMenu dish={dishes} />
        </div>
      )
    );
  if (props.dish.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dish.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-sm-12">
              <h3>{menu}</h3>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
};
export default Menu;
