import React,{useState,useEffect} from 'react'
import { Button, FloatingLabel, Form, Modal,Collapse } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addCatagory,getCatagories,deleteCatagories,getSpecificVideos,updatecatagory } from '../services/allApis';
import VideoCard from './VideoCard';

function Catagory() {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);
  const [catagories,setcatagories]= useState([])
  const [catagoryDetails,setCatagoryDetails] = useState({
    id:'',categoryName:'',allVideos:[]
  })

  const handleCatagoriesList=async()=>{
    const res=await getCatagories()
    console.log(res.data)
    setcatagories(res.data)
  }

    const handleCatagory=(e)=>{
    const {name,value}=e.target
    setCatagoryDetails({...catagoryDetails,[name]:value})
  }
  // console.log(catagoryDetails)
  const handleRequest=async()=>{
    const {id,categoryName} = catagoryDetails
    // console.log(res)
    if(!id || !categoryName){
      toast.warning("please fill in the Catagory Detailse!!")
    }
    else{
      let res=await addCatagory(catagoryDetails) 
      if(res.status>=200 && res.status<300){
        setShow(false)
        toast.success("Catagory added success")
        handleCatagoriesList()
      }
      else{
        toast.error('added faild!!')
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeCatagories=async(id)=>{
    // console.log(id)
    let res=await deleteCatagories(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("Catagory Deleted Successfully!!")
      handleCatagoriesList()
    }
    else{
      toast.error("Catagory Deletion faild!!!")
      
    }
  }
  

    useEffect(()=>{
      handleCatagoriesList()
    },[])


    const dragOver=(e)=>{
      e.preventDefault()
      console.log("drag over")
    }

    const onDropHandle=async(e,id)=>{
      console.log("drag target :",id)
      let videoid=e.dataTransfer.getData("videoid")
      console.log("video id",videoid);
      const video=await getSpecificVideos(videoid)
      console.log(video.data)

      let selectedCatagory=catagories?.find(item=>item?.id===id)

      selectedCatagory.allVideos.push(video.data)
      // console.log(selectedCatagory)
      const res=await updatecatagory(id,selectedCatagory)
      console.log(res)
      if(res.status>=200 && res.status<300){
        toast.success("video added to catagory")
        handleCatagoriesList()
      }
      else{
        toast.error("added faid!!")
      }
    }

  return (
    <>
      <div className='d-grid'>
      <button onClick={handleShow} className='btn  bg-black text-white'>Add Category</button>
    </div>
    {
      catagories?catagories.map(item=>(
        <div className='m-3 p-2  shadow '
            onDragOver={e => dragOver(e)} onDrop={(e) => onDropHandle(e, item?.id)}>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls={item?.id}
              aria-expanded={open}
              style={{ width: '100%', backgroundColor: '#5d635f' }}
            >
              <div>
                <span className='text-white'>
                  {item?.categoryName}
                </span>
                <span className='btn p-0' style={{ float: 'right' }} onClick={() => removeCatagories(item?.id)} ><i class="fa-regular fa-trash-can" style={{ color: '#fff' }} ></i></span>
              </div>
            </Button>
            <Collapse in={open}>
              <div id={item?.id}>
                {
                  item?.allVideos?.map(video => (
                    <VideoCard video={video} isCatagory={true} />
                  ))
                }

              </div>
            </Collapse>

          </div>
        
      )) : <div className="text-danger fw-bold p-3">No data Available!!!</div>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingID"
        label="ID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Unique ID" name='id' onChange={(e)=>handleCatagory(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCategory" label="Category Name">
        <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e)=>handleCatagory(e)} />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Catagory