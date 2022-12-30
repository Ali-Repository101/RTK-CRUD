import React from 'react'
import { useState } from "react";
import { MDBContainer, MDBRow,MDBCol,MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AiOutlinePicture } from "react-icons/ai";
import { ImArrowRight } from "react-icons/im";

export const Banner = () => {
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
    <MDBContainer>
        <MDBRow>
                    <MDBCol lg='3'>
                                <MDBInput type="file" onChange={handelImageChange} className="field" />

                    </MDBCol>
                    <MDBCol lg="3">
                        <MDBInput label="text"></MDBInput>
                        </MDBCol>
                        <MDBCol lg="2">
                        <MDBBtn className=" mt-2"  ><ImArrowRight /></MDBBtn>
                    </MDBCol>
                    <MDBCol lg="2"  className="mt-2" >
                        <MDBBtn href='#heloo' color='danger'>Learn More</MDBBtn>
                    </MDBCol>
                    <MDBCol lg="2" className="mt-2">
                        <MDBBtn href='#heloo' color='success'>Learn More</MDBBtn>
                    </MDBCol>
                    </MDBRow>
                    {/* <MDBRow>
                    <MDBCol lg="4">
                        <MDBBtn onClick={handelupload} className=" mt-2 upload" ><ImArrowRight /></MDBBtn>

                    </MDBCol>
                    </MDBRow> */}
                    <MDBRow>
                    <MDBCol lg="4 mt-4">
                        <div className='avatar text-center '>
                            {
                                url ?
                                    <img src={PhotoUrl} className='img-fluid rounded ban' alt='' style={{ maxWidth: '100%', minHeight:"100%" }} />

                                    :
                                    <AiOutlinePicture style={{ fontSize: "30px", marginTop: "4px" }} />
                            }

                        </div>

                    </MDBCol>
                </MDBRow>
                
 
    </MDBContainer>
  )
}
