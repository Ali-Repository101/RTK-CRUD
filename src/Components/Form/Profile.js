import React from 'react';
import { useState } from "react";
import { MDBBtn, MDBInput, MDBRow, MDBCol, MDBValidation, MDBValidationItem, } from 'mdb-react-ui-kit';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Avatar } from '@mui/material';
import { AiOutlinePicture } from "react-icons/ai";
import { ImArrowRight } from "react-icons/im";
export default function Profile() {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    //BASE64 CODE START HERE
    const onLoad = (mainFile) => {
        //set photoUrl in localStorage
        localStorage.setItem('photoUrl', mainFile)
        setUrl(mainFile);
    };
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };
    //get photoUrl from localStorage
    const PhotoUrl = localStorage.getItem('photoUrl');

    const handelImageChange = (e) => {
        getBase64(e.target.files[0]);
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
                    <MDBCol lg='5'>
                        <MDBValidation className=' g-3' >
                            <MDBValidationItem feedback='Please choose a File.' invalid >
                                <MDBInput type="file" onChange={handelImageChange} className="field" 
                        id='validationCustom03'
                        required/>

                            </MDBValidationItem>

                        </MDBValidation>
                    </MDBCol>
                    <MDBCol lg="1">
                        <MDBBtn onClick={handelupload} className=" mt-2 upload" ><ImArrowRight /></MDBBtn>

                    </MDBCol>
                    <MDBCol lg="6">
                        <div className='avatar text-center '>
                            {
                                url ?
                                    <img src={PhotoUrl} className='img-fluid rounded' alt='' style={{ maxWidth: '100%' }} />

                                    :
                                    <AiOutlinePicture style={{ fontSize: "30px", marginTop: "4px" }} />
                            }

                        </div>

                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}