import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addHistory, deletevideo } from '../services/allApis';
import {v4 as uuidv4} from 'uuid';

function VideoCard({video,delResupdate,isCatagory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{
    setShow(true);
    let date=new Date()
   let id=uuidv4()
    const {caption,url}=video
    console.log(id,caption,url,date)
    let body={id,caption,url,date}
    const res=await addHistory(body)
    console.log(res)
  }

  const removeVideo=async(id)=>{
    console.log(id)
    let res=await deletevideo(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("Video Deleted Successfully!!")
      delResupdate()
    }
    else{
      toast.error("Video Deletion faild!!!")
    }
  }

  const ondrag=(e,id)=>{
    console.log("Target Video ID",id)
    e.dataTransfer.setData("videoid",id)
  }

  return (
    <div>
       <Card style={{ width: '100%'}}>
      <Card.Img style={{height:'27vh'}} onClick={handleShow}  draggable onDragStart={(e)=>ondrag(e,video?.id)}  variant="top" src={video?.thumbnail} alt='image' />
      <Card.Body>
        {
          isCatagory?"":
        <Card.Title>{video?.caption} <span className='btn p-0' style={{float:'right'}} onClick={()=>removeVideo(video?.id)}><i class="fa-regular fa-trash-can fa-xl" style={{color:'#000000'}} ></i></span></Card.Title>

        }
      </Card.Body>
    </Card>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="417" src={`${video?.url}?autoplay=1&mute=1`} title='video song'  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <p style={{letterSpacing:'2px',textTransform:'uppercase',fontSize:'13.4px',color:'#8c8c8c'}}>{video?.caption}</p>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default VideoCard