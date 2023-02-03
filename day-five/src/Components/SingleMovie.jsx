import { Component } from "react";
import { Col, Card} from "react-bootstrap";

class SingleMovie extends Component{
render(){
    return(
        <Col xs={6} md={3} className= "mb-2" >
            <Card className="card">
            <Card.Img variant="top" src={this.props.movie?.Poster} />
            </Card>
        </Col>
    )
}
}
export default SingleMovie

