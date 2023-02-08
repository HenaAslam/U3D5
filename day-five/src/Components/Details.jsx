import{Card, Container, Row, Col, Spinner, Badge, ListGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'





   


   



const Details=()=>{


   
    const [movieToShow,setMovieToShow]=useState(null)
    const[comments, setComments]=useState([])
    useEffect(()=>{
        fetchMovie()
        fetchComments()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const params=useParams()
 
    const fetchMovie=async()=>{
        try{
           
                let res=await fetch("  http://www.omdbapi.com/?apikey=2404898d&i=" + params.imdbid)
                if(res.ok){
                    let data=await res.json()
                 
                    setMovieToShow(data)
                    
                }
        }
        catch(error){
            console.log(error)
        }
    }
   const fetchComments=async()=>{
    try{
       
        let response=await fetch (" https://striveschool-api.herokuapp.com/api/comments/"+params.imdbid,{headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzU2OTQxMjEsImV4cCI6MTY3NjkwMzcyMX0.XCiJNQtp5rz9kE16LIrlcsAouLOCn8m62yszme1VQ6Q"     }} )
        if(response.ok){
            let data=await response.json()
            setComments(data)
            console.log(data)
        }
        else{
        
            console.log("error")
        }
        
       
    }
    catch(error){
        
        console.log(error)
        
    }
}

   

    return(

         movieToShow !== null ? (<Container className='mb-5 '>
    
         <Row className='justify-content-center'>
             <Col xs={12} md={6}>
             <Card  >
<Card.Img variant="top" src={movieToShow.Poster} />
<Card.Body>
 <Card.Title> {movieToShow.Title}</Card.Title>
 <Card.Text>
 <Badge variant="danger">{movieToShow.Genre}</Badge>{' '}
 
        {comments.length !== 0 ?
         ( <ListGroup>
   
   {comments.map((c)=>{
      
       return    <ListGroup.Item className=" mt-3 list d-flex flex-column w-100" key={c._id}>
          <span  className="py-3 com px-3" >
              <strong style={{color:"red"}}>{c.author}</strong>  : {c.comment} <Badge variant="danger" className="p-1 mr-1"> Rating : {c.rate} / 5 </Badge>
              </span>   
          
          
    
       </ListGroup.Item>
    })}
    </ListGroup> ) : 
    <span><strong>No comments yet</strong></span> }
           
       
 
 </Card.Text>
 
</Card.Body>
</Card>
             </Col>
         </Row>
     </Container>) :   <Spinner animation="border" variant="success" />
        
      
    )
}
export default Details


//  {/* <ListGroup>
//  {movieToShow.Ratings.map((r)=>{
            
//             return    <ListGroup.Item>
//           <p  className="py-3 com px-3" ><strong style={{color:"red"}}>{r.Source}</strong>  : {r.Value}</p>    
//               </ListGroup.Item>
//          })} 


   
//  </ListGroup> */}