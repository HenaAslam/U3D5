import {Container, Row,Col} from 'react-bootstrap'

const Footer=()=>{
    return(
       <Container className=" foo mt-4 pt-3">
        <Row>
            <Col xs={6} md={3} className="mb-2">
           
              <div className="logos d-flex justify-content-around mb-3">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
              </div>
              <div className="mb-3 ml-3">Audio and subtitles</div>
              <div className="mb-3 ml-3">Media center </div>
              <div className="mb-3 ml-3">Privacy</div>
              <div className="mb-3 ml-3">Contact us</div>
              <div className="mb-3 ml-3"><button type="button" className="btn btn-outline-dark">Service code</button></div>
              <span className="mb-3 ml-3">© 1997-2009 Netflix,inc.</span>
           
            </Col>
            <Col xs={6} md={3} className="mb-2">
              <div className="mb-3 ml-3">Audio descriptions</div>
              <div className="mb-3 ml-3">Investor relations </div>
              <div className="mb-3 ml-3">Legal notices</div>
              </Col>
        
              <Col xs={6} md={3} className="mb-2">
                <div className="mb-3 ml-3">Help center</div>
                <div className="mb-3 ml-3">Jobs </div>
                <div className="mb-3 ml-3">Cookie preferences</div>
          
                </Col>
            <Col xs={6} md={3} className="mb-2">
        
              <div className="mb-3 ml-3">Gift cards</div>
              <div className="mb-3 ml-3">Terms of use </div>
              <div className="mb-3 ml-3">Corporate Information</div>
              </Col>
    
          </Row>
        
        </Container>
    )

}
export default Footer