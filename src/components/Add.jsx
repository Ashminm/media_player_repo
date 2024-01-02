import React,{useState} from 'react'
import { Button, FloatingLabel, Form, Modal} from 'react-bootstrap'
import { addVideos } from '../services/allApis';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({changeResState}) {
  const [show, setShow] = useState(false);
  const [video, setVideo] =useState({
    id:'',caption:'',thumbnail:'',url:''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoDetails=(e)=>{
    const {name,value}=e.target
    setVideo({...video,[name]:value})
  }
  const handleVideoUrl=(e)=>{
    const {name,value}=e.target
    if(value.includes("v=")){
      let index=value.indexOf("v=")

      let url=value.substring(index+2,index+13)

      let videoUrl=`https://www.youtube.com/embed/${url}`
      setVideo({...video,[name]:videoUrl})
    }
  }

  const uploadVideos=async()=>{
    const {id,caption,thumbnail,url}=video
    if(!id || !caption || !thumbnail || !url){
      toast.warning("please fill in the videos Detailse!!")
    }
    else{
      let response=await addVideos(video)
      // console.log(response)
      if(response.status >= 200 || response.status<300){
        setShow(false)
        toast.success("New Video Uploaded!")
        changeResState()
      }
      else{
        toast.error("Video Uploaded Faild!!!")
      }
  }
    
    
  }
  console.log(video)
  return (

    <>
        <div className='btn' onClick={handleShow}>
            <i class="fa-solid fa-square-plus fa-2xl" style={{color:'#000'}}></i>
        </div>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uplode Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <FloatingLabel controlId="floatingInput" label="Video Id" className="mb-3" >
            <Form.Control type="text" placeholder="VideoId" name='id' onChange={(e)=>handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCaption" label="Caption" className="mb-3">
            <Form.Control type="text" placeholder="Video-Caption" name='caption' onChange={(e)=>handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingImageUrl" label="Video Image URL" className="mb-3">
            <Form.Control type="text" placeholder="Video-Image-URL" name='thumbnail' onChange={(e)=>handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideoUrl" label="Video URL" className="mb-3">
            <Form.Control type="text" placeholder="Video-URL" name='url' onChange={(e)=>handleVideoUrl(e)} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadVideos}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
    
  )
}

export default Add