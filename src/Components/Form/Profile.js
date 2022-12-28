import { useEffect, useState } from "react";
import { useAuth, upload } from "../../../src/firebase/firebase";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

export default function Profile(){
const currentUser= useAuth();
const [loading,setLoading]=useState(false);
const [photo, setPhoto]=useState(null);
const [photoURL, setphotoURL]=useState("https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg");

    function handelChange(e){
 if (e.target.files[0]){
    setPhoto(e.target.files[0])
 }
    }

    function handelClick(){
        upload(photo, currentUser , setLoading);
    }

    useEffect(()=>{
        if(currentUser ?.photoURL){
        setphotoURL(currentUser.photoURL);
        }
    },[currentUser])

    
    return(
        <>
        <div className="fields">
            <MDBInput type="file" onChange={handelChange}/>
            
            <img src={photoURL} alt="Avatar" className="avatar mt-5 me-5 " />
            <MDBBtn disabled={loading || !photo} onClick={handelClick} className="mb-3">Upload</MDBBtn>
        </div>
        </>
    );
}