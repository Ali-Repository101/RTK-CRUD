import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBBtn,
  MDBTableHead,
  MDBInput,
} from "mdb-react-ui-kit";
const UserTable = () => {
  const [userData, setUserData] = useState([]);
  //get value from local storage
  const imageUrl = localStorage.getItem("photoUrl");
  //fetching api data
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((data) => {
      setUserData(data.data);
    });
  }, []);
  //handle edit Data
  const [updateData, setUpdateData] = useState([]);
 const [firstName, setFirstName] = useState();
 const [lastName, setLastName] = useState();
 const [email, setEmail] = useState();
//   const handleEditChange = (event) => {
//    const {name,value} = event.target;
//   setPutData({...putData, [name]: value});
//   };
  const handleEdit = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then((data) => {
        setUpdateData(data.data);
      });
  };
  return (
    <div className="table-data">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
            <MDBTable align="middle">
              <MDBTableHead>
                <tr>
                  <th scope="col">First-Name</th>
                  <th scope="col">Last-Name</th>
                  <th scope="col">User-Image</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </MDBTableHead>
              {userData.map((user, index) => {
                return (
                  <MDBTableBody key={index}>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>
                        <img
                          src={imageUrl}
                          alt="error"
                          style={{
                            height: "80px",
                            width: "100px",
                            border: "0.1px solid lightgreen",
                          }}
                        />
                      </td>
                      <td>{user.email}</td>
                      <td>{user.address.street}</td>
                      <td>
                        <MDBBtn
                          color="success"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => {
                            handleEdit(user.id);
                          }}
                        >
                          <i class="fa-solid fa-pen"></i>
                        </MDBBtn>
                      </td>
                      <td style={{ color: "red" }}>
                        <MDBBtn color="danger">
                          <i class="fa-solid fa-trash"></i>
                        </MDBBtn>
                      </td>
                    </tr>
                  </MDBTableBody>
                );
              })}
            </MDBTable>
          </MDBCol>
        </MDBRow>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Update User Data
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <MDBInput
                  name="firstname"
                  value={updateData.name}
                  onChange={(e) =>setFirstName(e.target.value)}
                />
                <MDBInput
                  name="lastname"
                  value={updateData.username}
                  onChange={(e) =>setLastName(e.target.value)}
                
                />
                <MDBInput
                  name="email"
                  value={updateData.email}
                  onChange={(e) =>setEmail(e.target.value)}

                />
                {/* <MDBInput name="address" value={updateData.address.street}/> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default UserTable;
