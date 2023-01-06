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
  //Read api data
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    handleGetApi();
  }, []);
  const handleGetApi = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((data) => {
      setUserData(data.data);
    });
  };

  //Update Api Data
  const [userPutData, setUsePutData] = useState({
    name: "",
    username: "",
    email: "",
  });
  console.log("update api data", userPutData);
  const handleSelectUserData = (id) => {
    setUsePutData(userData[id - 1]);
  };
  const handleUpdateChange = (event) => {
    let { name, value } = event.target;
    setUsePutData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const updateUserDataByClick = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${userPutData.id}`, {
      name: userPutData.name,
      username: userPutData.username,
      email: userPutData.email,
    });
    // handleGetApi();
  };
  //remove user
  const removeUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>{
      console.log(res)
    });
    handleGetApi();
  };
  return (
    <div className="table-data">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol lg="10">
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
                          src="https://www.freeiconspng.com/uploads/free-apple-icon-png-13.png"
                          alt="error"
                          style={{
                            height: "80px",
                            width: "100px",
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
                            handleSelectUserData(user.id);
                          }}
                        >
                          <i class="fa-solid fa-pen"></i>
                        </MDBBtn>
                      </td>
                      <td style={{ color: "red" }}>
                        <MDBBtn
                          color="danger"
                          onClick={() => {
                            removeUser(user.id);
                          }}
                        >
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
                  name="name"
                  value={userPutData.name}
                  onChange={handleUpdateChange}
                />
                <MDBInput
                  name="username"
                  value={userPutData.username}
                  onChange={handleUpdateChange}
                />
                <MDBInput
                  name="email"
                  value={userPutData.email}
                  onChange={handleUpdateChange}
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updateUserDataByClick}
                >
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
