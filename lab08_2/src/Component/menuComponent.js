import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderMenu({ dish }) {
    return (
        <Card >
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}
const Menu = function (props) {
    // console.log(props.dish)// thằng props này nó là scope global nên trong function là nó sẽ hieu
    // alo đâu em. đoạn ko có onClick mà vẫn click đc đâu?
    const menu = props.dish && props.dish.map((dishes) =>   // ví dụ thằng dishes này scope cua nó là ở ham map nên muốn console log phải đat trong ham map mới log duơc
    (
        <div className="col-12 col-md-5 m-1" key={dishes.id}>
            <RenderMenu dish={dishes} />
        </div>
    )
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
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
}
export default Menu;