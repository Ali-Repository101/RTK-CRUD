import {
  MDBContainer,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import BannerOutput from "../BannerOutput";
const CsBanner = () => {
  const [url, setUrl] = useState(null);
  //BASE64 CODE START HERE
  const onLoad = (mainFile) => {
    //set photoUrl in localStorage
    localStorage.setItem("photoUrl", mainFile);
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
  const PhotoUrl = localStorage.getItem("photoUrl");
  const handelImageChange = (e) => {
    getBase64(e.target.files[0]);
  };

  //Functnality
  const [icon, setIcon] = useState(null);
  const [link, setLink] = useState(null);
  const [desc, setDesc] = useState(null);
  const [buttonLink, setButtonLink] = useState(null);
  const [bannerOutput, setBannerOutput] = useState(false);
  const handleBanner = () => {
    setBannerOutput(true);
  };
  return (
    <div className="banner">
      <MDBContainer className="mt-3">
        <MDBRow>
          <MDBCol lg="6 ">
            <MDBCard>
              <MDBCardHeader>
                <h2 className="display-6 text-center">Create Custome Banner</h2>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBInput
                  type="file"
                  onChange={handelImageChange}
                  className="field"
                />
                <br />
                <MDBInput
                  type="text"
                  label="enter icon url"
                  className="field"
                  onChange={(event) => setIcon(event.target.value)}
                />
                <br />
                <MDBInput
                  type="text"
                  className="field"
                  label="content.."
                  onChange={(event) => setDesc(event.target.value)}
                />
                <br />
                <MDBInput
                  type="text"
                  className="field"
                  label="enter link url"
                  onChange={(event) => setLink(event.target.value)}
                />
                <br />
                <MDBInput
                  type="text"
                  className="field"
                  label="enter button link url"
                  onChange={(event) => setButtonLink(event.target.value)}
                />
                <br />
                <MDBBtn onClick={handleBanner}>SEE BANNER</MDBBtn>
              </MDBCardBody>
            </MDBCard>

            {/* Banner output */}
          </MDBCol>
        </MDBRow>
        <div className="mt-4">
          {bannerOutput && <BannerOutput icon={icon} link={link} desc={desc} buttonLink={buttonLink}/>}
        </div>
      </MDBContainer>
    </div>
  );
};

export default CsBanner;
