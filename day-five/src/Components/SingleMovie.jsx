import { Component } from "react";
import { Col, Card,Badge} from "react-bootstrap";

class SingleMovie extends Component{



render(){
    return(
        <Col xs={6} md={2} className= "mb-2" >
            <Card  className="card" >
            <Card.Img variant="top" src={this.props.movie?.Poster}  />
            <Card.Title className="hovv" >
                {this.props.movie?.Title}
                 <Badge variant="danger" >{this.props.movie?.Year}</Badge>{' '}
            </Card.Title>
                    
                
    

            </Card>
        </Col>
    )
}
}
export default SingleMovie






  






// <div class="movie-card">
//   <img class="w-100" src="./assets/media/media0.webp" alt="" />

  
//   <div class="infos-container w-100 mt-2">
//     <div class="d-flex mb-3 mt-4 align-items-center">
//       <i class="bi bi-play-circle  px-1"></i>
//       <i class="bi bi-hand-thumbs-up px-1 "></i>
//       <div id="alertvisible"><i class="bi bi-plus-circle px-1"></i></div> 
//       <div class="alert alert-dark addtolist" role="alert">
//         Add to your list
//       </div>
//       <i class="bi bi-chevron-down ml-auto "></i>

//     </div>
//     <div class="deeet d-flex justify-content-around align-items-start">
//     <h6 >98% Match</h6>
//     <h6 class="pr-1">12</h6>
//     <h6>3 Seasons</h6>
//     <h6 class="pb-0">HD</h6>
//   </div>

  
//     <div class="card-movie-footer d-flex align-items-center">
//       <span class="mr-2">Mystery - Drama - Thriller</span>
      
      
//     </div>
//   </div>
// </div>
//   </div> 
