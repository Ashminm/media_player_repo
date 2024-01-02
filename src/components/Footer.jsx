import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div>
      <div className="bg-info" style={{width:'100%',height:'100%'}}>
        <Row className='p-5'>
          <Col md='4 text-white'>
            <h4 className='pb-2 text-white'><i className="fa-regular fa-circle-play fa-2xl" style={{color:'#ffff'}}></i>{' '}
            Play short</h4>
            <hr />
            <p className='pt-2 text-white' style={{textAlign:'justify',fontFamily:'Yantramanav'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est, ipsum error earum deleniti dolorem commodi reiciendis 
            pariatur soluta. Deleniti veritatis eaque officia recusandae nisi illo. Nemo repellendus beatae ipsum?</p>
          </Col>
          
          <Col md='4' className='d-flex flex-column text-white'>
            <h4 className='text-white'>Links</h4>
            <hr />
            <Link to={'/'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>Landing page</Link>
            <Link to={'/home'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>Home</Link>
            <Link to={'/watch-history'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>watch history</Link>
          </Col>
          <Col md='4' className='d-flex flex-column text-white'>
            <h4 className='text-white'>Guides</h4>
            <hr />
            <Link to={'https://react.dev/'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>React-Bootstrap</Link>
            <Link to={'https://fontawesome.com/kits'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>Fontawesome</Link>
            <Link to={'https://fonts.google.com/'} className='text-decoration-none text-white' style={{fontFamily:'Yantramanav'}}>Google-Fonts</Link>
          </Col>
        </Row>
        <p className='text-center text-white pb-3 m-0' style={{fontFamily:'Yantramanav'}}>Copyright &#169; 2023 play short. All right reserved </p>

      </div>
    </div>
  )
}

export default footer