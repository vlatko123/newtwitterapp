import React  from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button/Button';
import { NavLink } from '../../components/NavLink/NavLink';
import {FaTwitter} from "react-icons/fa";
import {FaHome} from "react-icons/fa"
import {FaHashtag} from "react-icons/fa";
import {FaBell} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaBookmark} from "react-icons/fa";
import {FaRegListAlt} from "react-icons/fa";
import {FaUser} from "react-icons/fa";






export const Navbar = () => {
    return(
        <Styled.Container className='col-3'>
            <NavLink text = "" icon = {<FaTwitter />}/>
            <NavLink text = "Home" icon = {<FaHome />}/>
            <NavLink text = "Explore" icon = {<FaHashtag />}/>
            <NavLink text = "Notifications" icon = {<FaBell />}/>
            <NavLink text = "Messages" icon = {<FaEnvelope />}/>
            <NavLink text = "Bookmarks" icon = {<FaBookmark />}/>
            <NavLink text = "Lists" icon = {<FaRegListAlt />}/>
            <NavLink text = "Profile" icon = {<FaUser />}/>
            <NavLink text = "More" icon = {<FaEnvelope />}/>

            

            <Button name = "Twitter" backgroundColor='RGB(29, 155, 240)' textColor='white' />
            </Styled.Container>
    )
}


/*inside the component writing styled component code*/

const Styled = {
    Container: styled.nav`
    height: 100vh;
`
}