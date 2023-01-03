import { width } from "@mui/system";
import { MDBCard, MDBBtn } from "mdb-react-ui-kit";
const BannerOutput = (props) => {
  const PhotoUrl = localStorage.getItem("photoUrl");

  return (
    <>
      <MDBCard>
        <div
          className="main d-flex justify-content-center align-items-center p-2 gap-5"
          style={{ border: "0.5px solid grey", width: "800px" }}
        >
          <div className=" text-center">
            <img
              src={PhotoUrl}
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            />
          </div>
          <div> 
              <span style={{ color: "red",fontSize:'20px'}} className={props.icon}></span>
              <span className="p-2">{props.desc}</span>
          </div>
          <div>
            <a href={props.link}>Read more...</a>
          </div>

          <div>
            <a href={props.buttonLink}>
              <MDBBtn color="danger">Learn More </MDBBtn>
            </a>
          </div>
        </div>
      </MDBCard>
    </>
  );
};
export default BannerOutput;
