import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import Catagory from '../components/Catagory'
import View from '../components/View'
import { Link } from 'react-router-dom'

function Home() {
  const [restate,setRestate]=useState(false)
  const changeResState=()=>{
    setRestate(true)
  }
  return (
    <>
      <h6>
          <Link to={'/watch-history'} style={{float:'right',textDecoration:'none',letterSpacing:'-0.21px',padding:'10px 20px 0 0'}}><i class="fa-solid fa-circle-arrow-right fa-2xl"></i></Link>
          <Link to={'/'} style={{float:'right',textDecoration:'none',letterSpacing:'-0.21px',padding:'10px 20px 0 0'}}><i class="fa-solid fa-circle-arrow-left fa-2xl"></i></Link>
      </h6>
      <div className='m-3'>
      <h2>All videos</h2>
      
      <Row className='mx-3 mt-5 mb-5 p-3'>
        <Col md='1 pb-3'>
          <Add changeResState={changeResState}/>
        </Col>

        <Col md='7 pb-3'>
          <View restate={restate} setRestate={setRestate}/>
        </Col>
        <Col className='p-0'></Col>
        <Col md='3 pb-3'>
          <Catagory/>
        </Col>
      </Row>

    </div>
    </>
    
  )
}

export default Home