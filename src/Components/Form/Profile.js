import React from 'react';
import { useState } from "react";
import { MDBBtn, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes, images } from "firebase/storage";
import { Avatar } from '@mui/material';
import {AiOutlinePicture} from "react-icons/ai";
import {ImArrowRight} from "react-icons/im";
export default function Profile() {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const handelImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        };
    }

    const handelupload = () => {
        const imageRef = ref(storage, "image");
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef)
                .then((url) => {
                    setUrl(url);
                }).catch(error => {
                    console.log(error.message, "error image url ")
                })
            setImage(null);

        })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <>
            <div className="fields">
                <MDBRow>
                    <MDBCol lg='4'>
                        <MDBInput type="file" onChange={handelImageChange} className="field" />
                        </MDBCol>
                        <MDBCol lg="2">
                        <MDBBtn onClick={handelupload} className=" mt-2 upload"><ImArrowRight /></MDBBtn>
                    </MDBCol>
                    <MDBCol lg="1" >
                            </MDBCol>
                            <MDBCol lg="5">
                            <div className='avatar text-center '>
                            {
                                url ? 
                                <img src={url} className='img-fluid rounded' alt='' />
      
                                :
<AiOutlinePicture style={{fontSize:"30px", marginTop:"4px"}} />
                            }
                           
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}