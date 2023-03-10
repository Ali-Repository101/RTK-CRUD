import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const NavbarSection = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>RTK-TASK</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
             <MDBNavbarLink >
             <NavLink active aria-current='page' to='/'>
                Home
              </NavLink>
             </MDBNavbarLink>
           <MDBNavbarLink >
           <NavLink active aria-current='page' to='about'>
                About
              </NavLink>
           </MDBNavbarLink>
           <MDBNavbarLink >
           <NavLink active aria-current='page' to='csbanner'>
                BannerForm
              </NavLink>
           </MDBNavbarLink>
           <MDBNavbarLink >

              <NavLink active aria-current='page' to='tableData'>
                TableData
              </NavLink>
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavbarSection;;