import { useEffect, useState } from "react";
import { useAuth, upload } from "../../firebase/firebase";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

export default function Profile() {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setphotoURL] = useState( "" );

  //BASE64 CODE START HERE
  const onLoad = (mainFile) => {
//set photoUrl in localStorage
    localStorage.setItem('photoUrl', mainFile )
    setphotoURL(mainFile);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  function handelChange(e) {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handelClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setphotoURL(currentUser.photoURL);
    }
  }, [currentUser]);
//get photoUrl from localStorage
const PhotoUrl = localStorage.getItem('photoUrl');
console.log(PhotoUrl)
  return (
    <>
      <div className="fields">
        <MDBInput type="file" onChange={handelChange} />
        <img src={PhotoUrl} alt="Avatar" className="avatar mt-5 me-5 " />
        <MDBBtn
          disabled={loading || !photo}
          onClick={handelClick}
          className="mb-3"
        >
          Upload
        </MDBBtn>
      </div>
    </>
  );
}
