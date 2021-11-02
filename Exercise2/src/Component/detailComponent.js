import React from "react";
import dateFormat from "dateformat";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderComments({ comments }) {
    if (comments != null)
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <div in key={comment._id}>
                                    <li>
                                    <p>{comment.comment}</p>
                                    <p>{comment.rating} stars</p>
                                    <p>-- {comment.author} , {dateFormat(comment.date, "dd/mm/yyyy")} </p>
                                    </li>
                                </div>
                            );
                        })}
                </ul>
            </div>
        );
    else
        return(
            <div></div>
        );
}


const DishDetail = (props) => {
    if (props.dish != null)        
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-6">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments}/>
            </div>
        </div>
    );
else
    return(
        <div></div>
    );

}
export default DishDetail;