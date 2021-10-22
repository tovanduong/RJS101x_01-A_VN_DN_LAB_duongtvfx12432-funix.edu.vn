import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenu({ dish, onClickHandle }) {
    const HandleClick = (dish) => {
        onClickHandle(dish.id)
    }
    return (
        <Card onClick={() => HandleClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}
const Menu = function (props) {
    const [item, setItem] = useState(null);
    const clickHandle = (id) => {
        setItem(id);
        // console.log('click test', id);
    }
    const RenderDetail = ({ detail }) => {
        return (
            <div className="col-12 col-md-5 m-1" key={detail && detail[0].id}>
                <Card>
                    <CardImg top src={detail && detail[0].image} alt={detail && detail[0].name} />
                    <CardBody>
                        <CardTitle>{detail && detail[0].name}</CardTitle>
                        <CardText>{detail && detail[0].description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    // console.log(props.dish)// thằng props này nó là scope global nên trong function là nó sẽ hieu
    const menu = props.dish && props.dish.map((dishes) =>   // ví dụ thằng dishes này scope cua nó là ở ham map nên muốn console log phải đat trong ham map mới log duơc
    (
        <div className="col-12 col-md-5 m-1" key={dishes.id}>
            <RenderMenu dish={dishes} onClickHandle={clickHandle} />
        </div>
    )
    )
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {item !== null && <RenderDetail detail={props.dish.filter(el => el.id === item)} />}
            </div>
        </div>
    );

}

export default Menu;