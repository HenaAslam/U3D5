
import { Col, Card,Badge,Button} from "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom'

const SingleMovie =(props)=> {

const navigate=useNavigate()


    return(
        <Col xs={6} md={2} className= "mb-5 movie-card" >
            <Card  className="card" >
               
            <Link to={"/details/" + props.movie?.imdbID}><Card.Img variant="top" src={props.movie?.Poster}  /></Link>
            <Button variant="outline-dark" onClick={()=>{
                navigate('/details/'+props.movie?.imdbID)
            }}>Details</Button>

            <Card.Title className="hovv" >
                {props.movie?.Title}
                 <Badge variant="danger" >{props.movie?.Year}</Badge>{' '}
            </Card.Title>
                    
                
    

            </Card>
        </Col>
    )

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
