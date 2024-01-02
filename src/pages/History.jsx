import React,{useEffect,useState} from 'react'
import { getHistory,deleteHistory } from '../services/allApis'
import { Link } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'


function History() {
  const [watch,setwatch]= useState([])
  const handleHistoryList = async()=>{
    const res = await getHistory()
    setwatch(res.data)
  }

  const handlehistoryDelete=async(id)=>{
    const res=await deleteHistory(id)
    console.log(res)
    if(res.status>=200 || res.status<300){
      toast.success("Watch History Video Removed!!!")
      handleHistoryList()
    }
    else{
      toast.error("History Video Removed Faild!!!")
    }
  }

  useEffect(()=>{
    handleHistoryList()
  },[])

  return (
    <>
      <h6>
        <Link to={'/'} style={{float:'right',textDecoration:'none',letterSpacing:'-0.21px',padding:'10px 20px 0 0',pointerEvents: 'none',opacity:'0.5'}}><i class="fa-solid fa-circle-arrow-right fa-2xl "></i></Link>
        <Link to={'/home'} style={{float:'right',textDecoration:'none',letterSpacing:'-0.21px',padding:'10px 20px 0 0'}}><i class="fa-solid fa-circle-arrow-left fa-2xl"></i></Link>
      </h6>
        <div className='m-5 overflow-x-auto shadow ' style={{width:'auto'}}>   
        <table className='table'>
          <tr style={{backgroundColor:'#f2dd21'}}>
            <th>Id</th>
            <th>Caption</th>
            <th>url</th>
            <th>date</th>
            <th></th>
          </tr>
          {
            watch?watch.map((item,index)=>(
              <tr className='square border-bottom '>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><Link to={item?.url}>{item?.url}</Link></td>
              <td>{item?.date}</td>
              <td><span className='btn'  style={{backgroundColor:"#fff"}}><i className="fa-regular fa-trash-can fa-lg " onClick={()=>handlehistoryDelete(item?.id)} style={{color: "#000"}}></i></span></td>
            </tr>
            )): <div className="text-danger fw-bold text-center p-4">No data Available!!!</div>
          }
        </table>
        <ToastContainer/>
      </div>
      </>   
  )
}
export default History