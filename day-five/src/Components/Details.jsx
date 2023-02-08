import{Card, Container, Row, Col, Spinner, Badge, Accordion,Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import AddComment from '../Components/AddComment'



   


   



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
                    console.log(data)
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
const  deleteComment = async (id) => {
    // eslint-disable-next-line no-unused-vars
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + id,

      {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzU2OTQxMjEsImV4cCI6MTY3NjkwMzcyMX0.XCiJNQtp5rz9kE16LIrlcsAouLOCn8m62yszme1VQ6Q"  ,
        },
      }
    );
  
 if(res.ok){
    fetchComments()
 }
   
  };

   

    return(

         movieToShow !== null ? (<Container className='mb-5 '>
    
         <Row className='justify-content-center'>
             <Col xs={8} md={4} className="mb-3">
             <Card className='details-card' >
<Card.Img variant="top" src={movieToShow.Poster} />
<Card.Body>
 <Card.Title> {movieToShow.Title}</Card.Title>
 <Card.Text>
 <Badge variant="danger">{movieToShow.Genre}</Badge>{' '}
 
  
   <span  className="py-3 com px-3" style={{display:"block"}} >
   <strong style={{color:"red"}}>{movieToShow.Ratings[0].Source}</strong>  : {movieToShow.Ratings[0].Value}
    </span>   



           
       
 
 </Card.Text>
 
</Card.Body>
</Card>
             </Col>
             <Col xs={8} md={4} >


             <Accordion>
             <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="outline-light" eventKey="1" >
        Plot
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body className='text-white'>{movieToShow.Plot}</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
  
      <Accordion.Toggle as={Button} variant="outline-light" eventKey="0">
        Comments
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>   {comments.length !== 0 ?
         ( <ul>
            <span className='text-white'>Comments</span>
   
   {comments.map((c)=>{
      
       return    <li className=" mt-3 list d-flex flex-column w-100" key={c._id} style={{border:"1px solid black"}}>
          <div  className="py-3 com px-3 text-white" >
              <strong style={{color:"red"}}>{c.author}</strong>  : {c.comment} <Badge variant="danger" className="p-1 mr-1"> Rating : {c.rate} / 5 </Badge>
              <Button variant="danger" className='mt-2' size="sm" style={{display:"block"}} onClick={(e) => {
                  e.preventDefault()
                deleteComment(c._id);
                  
                }}>x</Button>
              </div>   
          
          
    
       </li>
    })}
    </ul> ) : 
    <span style={{display:"block"}} className="text-white"><strong >No comments yet</strong></span> }</Card.Body>
    </Accordion.Collapse>
  </Card>


 
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="outline-light" eventKey="2">
        Add a Comment
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body className='text-white'><AddComment id={params.imdbid} fetchh={fetchComments}  />  </Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>
          
                
             </Col>
         </Row>
     </Container>) :  <div className='text-center'><Spinner animation="border" variant="success" /></div> 
        
      
    )
}
export default Details


