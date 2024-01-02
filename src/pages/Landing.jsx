import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigateByUrl=useNavigate()
  const clickNavigate=()=>{
    navigateByUrl('./home')
  }
  return (
    <div  style={{overflow:'hidden'}}>
        <Row className=' ps-3 pe-3 pt-5 pb-5 align-items-center' style={{backgroundColor:'#f2dd21'}}>
          <Col></Col>
          <Col md='5'>
              <h2 className='mb-3 text-secondary'>Welcome to <span className='text-info'>Play Short</span></h2>
              <p className='text-dark' style={{textAlign:'justify',fontFamily:'Yantramanav'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum perferendis debitis veniam neque
                 autem eaque fugit nihil nobis veritatis repellat in animi quidem ea sit consequatur iure, itaque quis eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi nesciunt nulla eveniet animi repellendus suscipit inventore
                  voluptatum quasi. Fugit illum voluptatibus rem iusto est cumque, quam eum. Nam, dignissimos. </p>
                 <button className='btn  mt-3 bg-info rounded'  style={{color:'#f2dd21'}}  onClick={clickNavigate}>Get Start</button>
          </Col>
          <Col></Col>
          <Col md='6 text-center'>
              <img  src="https://cdn0.iconfinder.com/data/icons/outline-laptop-6/512/exa-01-512.png" width={'80%'} height={'100%'} alt="no image" />
          </Col>
        </Row>

        <div className="mt-5 ms-3 me-3 d-" >
          <p className='mb-1 text-center' style={{letterSpacing:'5px',textTransform:'uppercase',fontSize:'10px',color:'#8c8c8c'}}>Explare & Know more</p>
          <h1 className='mb-2 text-center'>Features</h1>
          
          <div className='d-flex mt-5' style={{justifyContent:'space-evenly',flexWrap:'wrap'}}>
                    <Card style={{ width: '19rem',color:'#000',marginBottom:'30px'}}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/70/b4/66/70b46663202c4db0b820cf3db4f57837.gif" />
                <Card.Body>
                  <Card.Title>Upload Videos</Card.Title>
                  <Card.Text style={{color:'#8c8c8c',fontFamily:'Yantramanav'}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

                    <Card style={{ width: '19rem' ,color:'#000',marginBottom:'30px'}}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/0c/cd/96/0ccd96bc52dc46b1f5f3ea89cad58ecb.gif" />
                <Card.Body>
                  <Card.Title>Manage Videos</Card.Title>
                  <Card.Text  style={{color:'#8c8c8c',fontFamily:'Yantramanav'}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

                    <Card style={{ width: '19rem',color:'#000',marginBottom:'30px'}}>
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/42460/screenshots/5374328/icon_computer_2.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text  style={{color:'#8c8c8c',fontFamily:'Yantramanav'}}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        </div>
        
      <div className="border mx-4 p-5 mt-5 mb-5 shadow rounded d-flex bg-black ">
        <Row>
          <Col md='8'>
            <h1 className='text-white'>Simple fast and Powerfull</h1>
            <div style={{content:'',width:'25%',height:'2px',backgroundColor:'#fff',textAlign:'center',margin:'auto 0'}}></div>
            <p  style={{textAlign:'justify',color:'gray',marginTop:'15px',fontFamily:'Yantramanav'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugit repudiandae, rem sint laboriosam commodi, quis laborum eligendi ex ut ea. Maiores iusto dolores mollitia expedita suscipit corrupti quisquam deserunt!
            Autem officia animi possimus soluta reprehenderit. Possimus aperiam dicta quam quasi soluta provident iste assumenda, ducimus iusto quos sed tenetur magnam, nulla rerum inventore est saepe earum cum? Dolor, animi.
            Provident odit laborum dolorem eaque unde, similique repellendus, repellat molestiae eos quo nemo magnam vitae nesciunt molestias vel eius tempora delectus optio, iusto cupiditate minima accusantium? Iure dolorum optio ex?
            Nostrum suscipit non officia? Magni tenetur numquam, explicabo sapiente veritatis sequi ad? Sequi autem explicabo dolore dicta iste nisi ratione molestiae. Hic labore qui ratione dolore quo maiores voluptates at.
            
            </p>
          </Col>
         
          <Col md='4'>
          <iframe  src="https://www.youtube.com/embed/91BUM3WhCfo?si=hIXzd4IieiP6RdGM?autoplay=1&mute=1" title="YouTube video player"  allow='autoplay' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{width:'100%',height:'100%'}}  allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Landing