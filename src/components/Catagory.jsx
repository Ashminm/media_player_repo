import React, { useState, useEffect } from 'react';
import { Button, FloatingLabel, Form, Modal, Collapse } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addCatagory, getCatagories, deleteCatagories, getSpecificVideos, updatecatagory } from '../services/allApis';
import VideoCard from './VideoCard';

function Catagory() {
  const [openCategories, setOpenCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [catagories, setCatagories] = useState([]);
  const [catagoryDetails, setCatagoryDetails] = useState({
    id: '',
    categoryName: '',
    allVideos: []
  });

  const handleCatagoriesList = async () => {
    const res = await getCatagories();
    console.log(res.data);
    setCatagories(res.data);
    // Initialize open state for each category to false
    setOpenCategories(res.data.map(() => false));
  };

  const handleCatagory = (e) => {
    const { name, value } = e.target;
    setCatagoryDetails({ ...catagoryDetails, [name]: value });
  };

  const handleRequest = async () => {
    const { id, categoryName } = catagoryDetails;
    if (!id || !categoryName) {
      toast.warning('Please fill in the Category Details!!');
    } else {
      let res = await addCatagory(catagoryDetails);
      if (res.status >= 200 && res.status < 300) {
        setShow(false);
        toast.success('Category added successfully');
        handleCatagoriesList();
      } else {
        toast.error('Added failed!!');
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeCatagories = async (id) => {
    let res = await deleteCatagories(id);
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      toast.success('Category Deleted Successfully!!');
      handleCatagoriesList();
    } else {
      toast.error('Category Deletion failed!!!');
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log('drag over');
  };

  const onDropHandle = async (e, id) => {
    console.log('drag target :', id);
    let videoid = e.dataTransfer.getData('videoid');
    console.log('video id', videoid);
    const video = await getSpecificVideos(videoid);
    console.log(video.data);

    let selectedCategory = catagories?.find((item) => item?.id === id);

    selectedCategory.allVideos.push(video.data);

    const res = await updatecatagory(id, selectedCategory);
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      toast.success('Video added to category');
      handleCatagoriesList();
    } else {
      toast.error('Added failed!!');
    }
  };

  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn  bg-black text-white'>
          Add Category
        </button>
      </div>
      {catagories
        ? catagories.map((item, index) => (
            <div
              key={index}
              className='m-3 p-2  shadow '
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => onDropHandle(e, item?.id)}
            >
              <Button
                onClick={() => {
                  const updatedOpenCategories = [...openCategories];
                  updatedOpenCategories[index] = !updatedOpenCategories[index];
                  setOpenCategories(updatedOpenCategories);
                }}
                aria-controls={item?.id}
                aria-expanded={openCategories[index]}
                style={{ width: '100%', backgroundColor: '#5d635f' }}
              >
                <div>
                  <span className='text-white'>{item?.categoryName}</span>
                  <span
                    className='btn p-0'
                    style={{ float: 'right' }}
                    onClick={() => removeCatagories(item?.id)}
                  >
                    <i className='fa-regular fa-trash-can' style={{ color: '#fff' }}></i>
                  </span>
                </div>
              </Button>
              <Collapse in={openCategories[index]}>
                <div id={item?.id}>
                  {item?.allVideos?.map((video) => (
                    <VideoCard key={video.id} video={video} isCatagory={true} />
                  ))}
                </div>
              </Collapse>
            </div>
          ))
        : <div className="text-danger fw-bold p-3">No data Available!!!</div>}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingID" label="ID" className="mb-3">
            <Form.Control type="text" placeholder="Enter Unique ID" name='id' onChange={(e) => handleCatagory(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCategory" label="Category Name">
            <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e) => handleCatagory(e)} />
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
  );
}

export default Catagory;
