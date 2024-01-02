import React,{useEffect, useState} from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'
import { Row,Col } from 'react-bootstrap'

function View({restate,setRestate}) {

    const [allVideos,setAllVideos]=useState([])
    const [delResponse,setDelResponse]=useState(false)

    const delResupdate=()=>{
      setDelResponse(true)
    }

    const getVideo=async()=>{
      let res=await getVideos()
      // console.log(res.data)
      setAllVideos(res.data)
      setDelResponse(false)
      setRestate(false)

    }
    useEffect(()=>{
      getVideo()
    },[restate,delResponse])
  return (
    <div className='p-3 bg-white border shadow '>
        <Row>
          {
            allVideos?allVideos.map(item =>(
              <Col sm={12} md={6} lg={4} className='mb-3'>
                  <VideoCard delResupdate={delResupdate} video={item} />
              </Col>
            )): <div className="text-danger fw-bold p-2">No data Available!!!</div>
          }
        </Row>
    </div>
  )
}

export default View