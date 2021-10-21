import React from "react";
// import Main from "./mainComponent";
// import { DISHES } from "../shared/dishes";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenu({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = function (props) {
    const menu = props.dishes.map((dishes) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dishes.id}>
                <RenderMenu dish={dishes} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default Menu;