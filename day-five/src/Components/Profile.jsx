import { Component } from "react";
import { Container,Row,Col,Form,Badge ,Button} from "react-bootstrap";


class Profile extends Component{
    state={
        name:"Strive Student",
        lang:"English",
        autoplayone:true,
        autoplaytwo:true
    }
    render(){
        return(
                <Container className="text-white mt-3">
                 
                    
                        <h1 className="edit-profile">Edit Profile</h1>
                        <hr/>
                        <Row>
                            <Col xs={3}>
                            <div className="profileleft">
                            <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt=""/>
                            <i className="bi bi-pencil px-2 py-1"></i>
                            </div>
                            </Col>
                            <Col xs={9}>
                            <div className="profilerightfirst d-flex flex-column justify-content-around">
                            <Form>
                                 <Form.Group>
                
                                    <Form.Control type="text" value={this.state.name} className="input" onChange={(e)=>{
                                        this.setState({name:e.target.value})
                                    }}/>
   
                                </Form.Group>
                                <Form.Group >
                                             <Form.Label>Language</Form.Label>
                                            <Form.Control as="select" value={this.state.lang} className="select" onChange={(e)=>{
                                                this.setState({lang:e.target.value})
                                            }}>
                                                <option>English</option>
                                                <option>Spanish</option>
                                                <option>German</option>

                                                </Form.Control>
                                            </Form.Group>
                                            <hr/>
                            </Form>
                           
                            </div>
                            <div className="profilerightsecond">
                            <h5 className="my-2">Maturity Settings:</h5>
                            
                            <h6 >
                             <Badge variant="secondary">ALL MATURITY RATINGS</Badge>
                            </h6>
                            <p className="my-2">Show titles of <strong>all maturity ratings</strong> for this profile</p>
                            <Button variant="outline-dark">Edit</Button>
                            <hr/>
                            </div>
                            <div className="profilerightthird mb-5">
                            <h5 className="my-2">Autoplay Controls</h5>
                            <Form>
                            <Form.Group >
                                <Form.Check type="checkbox" label="Autoplay next episode in a series on all devices" checked={this.state.autoplayone} onChange={(e)=>{
                                    this.setState({
                                        autoplayone:e.target.checked
                                    })
                                }}/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Check type="checkbox" label="Autoplay previews while browsing on all devices" checked={this.state.autoplaytwo} onChange={(e)=>{
                                    this.setState({
                                        autoplaytwo:e.target.checked
                                    })
                                }}  />
                            </Form.Group>
                            </Form>
                            </div>
                          
                    
                       
                
                            </Col>
                         
                        </Row>
                        <hr/>
                        <div className=" d-flex justify-content-between mb-5">
                          
                            <Button variant="outline-dark">SAVE</Button>  
                        <Button variant="outline-dark">CANCEL</Button>
                        <Button variant="outline-dark">DELETE PROFILE</Button>

                          
                    
                        </div>
                   
          
                </Container>
        )
    }
}
export default Profile