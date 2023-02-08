import {  useEffect, useState } from "react";
import { Form, Button ,Alert} from "react-bootstrap";

const AddComment=(props)=>{
   
    const[done,setDone]=useState(false)
    const[alert,setAlert]=useState(true)
    const[commentObject,setCommentObject]=useState({
        comment: "",
        rate: "",
         elementId: props.id,
       
    })
    useEffect(()=>{
        setCommentObject( {
            ...commentObject,
           elementId:props.id
          })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.id])

   
   






 
 const alerttimeout=()=>{

    setAlert(true)
    setTimeout(() => {
        setAlert(false)
   }, 2000)
 
 }
 
   const sendComment=async()=>{

      
    
        let res=await fetch("https://striveschool-api.herokuapp.com/api/comments/",{
            method:'POST',
            body:JSON.stringify(commentObject),
            headers:{
                'Content-Type' : 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzUzMzkzOTEsImV4cCI6MTY3NjU0ODk5MX0.E3m_mPnlfAunzuI_mq8omy-G0FIO0pqc-fgXDp1vONY",
            },
        })
        if(res.ok){
            setDone(true)
       
            alerttimeout()
           props.fetchh()

           
           
        }
     
    }
 

  
        return(
           
            <>
 

             {done && alert && (
                 <Alert variant="success" > Comment added</Alert> 
                

             ) }
            
        
<Form  className=" mb-2 mt-5" onSubmit={(e)=>{
    e.preventDefault()
   
    sendComment()
    setCommentObject({
        comment: "",
        rate: "",
         elementId: props.id,
       
    })

   
   
}}>
<Form.Group>
<Form.Label className="small">Comment</Form.Label>
<Form.Control type="text" placeholder="Enter comment" value={commentObject.comment} onChange={(e)=>{






setCommentObject({
    ...commentObject,
    comment:e.target.value
    })


}} />
</Form.Group>
<Form.Group>
<Form.Label className="small">Rate the book</Form.Label>
<Form.Control as="select" value={commentObject.rate} onChange={(e)=>{




setCommentObject({
    ...commentObject,
    rate:e.target.value
    })
}}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</Form.Control>
</Form.Group>


<Button variant="dark"  type="submit" >
Submit
</Button>
</Form>
            </>
           
        )
    
}
export default AddComment