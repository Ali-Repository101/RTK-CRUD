import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Profile from "./Profile";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBValidation, 
  MDBValidationItem
} from "mdb-react-ui-kit";
//Configuaration of React Icons
import { FiSettings } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";
import CsJoditEditor from "./CsJoditEditor";
import { useEffect } from "react";

const PostForm = () => {
  //onMouse Hover State
  const [enter, setEnter] = useState("view");
  const handleMouse = () => {
    setEnter("mains");
  };
  const handleLeave = () => {
    setEnter("view");
  };
  //judit editor code
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    placeholder: "Start typings...",
  };
  //duplicate functionality
  const [add, setAdd] = useState([
    {
      id: 0,
      content: '',
    },
  ]);
  const [increment, setIncrement] = useState(1);
  const handleDuplicate = () => {
    setAdd([...add, { id: increment, content:'' }]);
    setIncrement(increment + 1);
  };
  const updatecontent = (content, updateIndex) => {
    console.log(content, updateIndex)
    add.map((item, index) => {
      console.log(item, index)
      if(item.id == updateIndex){
        item.content = content;
      }
    })

  };
  useEffect(() => {
    console.log("array--", add)
  
  }, [add, updatecontent])
  
  //Delete functionality
  const handleDelete = (index) => {
    let newData = add.filter((item) => {
      return item.id !== index;
    });
    setAdd(newData);
  };

  return (
    <div className="post-form">
      <MDBContainer className="mt-2">
        
      <MDBValidation className='row g-3' isValidated>
        <MDBRow>
          <MDBCol size="md-8">
            <MDBCard className="p-4">
              <MDBCardHeader className="display-6 text-center p-2">
                USER POST FORM
              </MDBCardHeader>
              <MDBCardBody>
                <Profile/>
                <div className="mt-4">
                <MDBValidationItem feedback='Fill Your post title.' invalid  >  
                <MDBInput label="post title" className="title mt-3" id='validationCustomUsername'
            required />
                </MDBValidationItem>
                </div>
                <br />
                <MDBValidationItem feedback='Fill Your post title.' invalid  > 
                <MDBInput label="post slug" id='validationCustomUsername'
            required  />
                </MDBValidationItem>
                <br />
                {add.map((item, index) => {
                  return (
                    <div
                      className="judit-editor shadow-lg p-2"
                      //   onMouseEnter={handleMouse}
                      //   onMouseLeave={handleLeave}
                      key={index}
                    >
                      <div className={`${enter}`}>
                        <div className="outer-icons">
                          <div className="side-icons">
                            <FiSettings />
                          </div>
                          <div className="side-icons" onClick={handleDuplicate}>
                            <HiOutlineDuplicate />
                          </div>
                          <div
                            className="side-icons"
                            onClick={() => handleDelete(item.id)}
                          >
                            <MdDelete />
                          </div>
                        </div>
                      </div>  
                <MDBValidationItem feedback='Fill Your post title.' invalid  >                      <MDBInput label=" section title" className="mb-2 py-2" id='validationCustomUsername'
            required />
            </MDBValidationItem>
                      <CsJoditEditor 
                          content= {item.content}
                          onBlur={(e) => updatecontent(e, item.id)}
                      />
                    </div>
                  );
                })}

                <br />
                <MDBBtn onClick={() => {}}>Submit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
        </MDBRow>
        
      </MDBValidation>
      </MDBContainer>
    </div>
  );
};

export default PostForm;
