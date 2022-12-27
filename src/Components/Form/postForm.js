import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
//Configuaration of React Icons
import { FiSettings } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";

const PostForm = () => {
  //onMouse Hover State
  const [enter, setEnter] = useState("view");
  console.log(enter)
  const handleMouse = () => {
    setEnter("mains");
  };
  const handleLeave = () => {
    setEnter("view");
  };
  //judit editor code
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);
  const config = {
    placeholder: "Start typings...",
  };
  //duplicate functionality
  const [duplicate, setDuplicate] = useState();
  const handleDuplicate = () =>{
    setDuplicate(<div>
           <MDBInput label=" section title" className="mb-2 py-2" />
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)} 
                  />
    </div>)
  }
  //Delete functionality
  const handleDelete = () =>{
    setDuplicate('')
  }
  return (
    <div className="post-form">
      <MDBContainer className="mt-2">
        <MDBRow>
          <MDBCol size="md-8">
            <MDBCard className="p-4">
              <MDBCardHeader className="display-6 text-center p-2">
                USER POST FROM
              </MDBCardHeader>
              <MDBCardBody>
                <MDBInput label="post title" />
                <br />
                <MDBInput label="post slug" />
                <br />
                <div
                  className="judit-editor shadow-lg p-2"
                //   onMouseEnter={handleMouse}
                //   onMouseLeave={handleLeave}
                >
                  <div className={`${enter}`}>
                    <div className="outer-icons">
                      <div className="side-icons">
                        <FiSettings />
                      </div>
                      <div className="side-icons" onClick={handleDuplicate}>
                        <HiOutlineDuplicate />
                      </div>
                      <div className="side-icons" onClick={handleDelete}>
                        <MdDelete />
                      </div>
                    </div>
                  </div>
                  <MDBInput label=" section title" className="mb-2 py-2" />
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)} 
                  />
                  {duplicate}
                  
                </div>
                <br />
                <MDBBtn onClick={() => {}}>Submit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default PostForm;
