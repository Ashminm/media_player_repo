import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='bg-white ps-4 p-1'>
        <span style={{wordSpacing:'33px',letterSpacing:'2px',textTransform:'uppercase',fontSize:'11px',color:'#8c8c8c'}}>
          Latest | song: </span><span style={{wordSpacing:'2px',letterSpacing:'3px',textTransform:'uppercase',fontSize:'11px',color:'#8c8c8c'}}>Jawan Not Ramaiya Vastavaiya Extended Version...</span>
      </div>
      <Navbar className="bg-info">
        <Container>
          <Link to={'/'} className='text-decoration-none'>
          <Navbar.Brand className='text-white' >
          <i className="fa-regular fa-circle-play  fa-2xl" style={{color:'#ffff'}}></i>{' '}
           Play short
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header