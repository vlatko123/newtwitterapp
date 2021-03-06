import React from 'react';
import styled from 'styled-components';
import {FaTwitter} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {FaHashtag} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaBookmark} from 'react-icons/fa';
import {FaRegListAlt} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi';
import {Button} from '../../components copy/button/Button';
import {NavbarLink} from '../../components copy/NavbarLink/NavbarLink';
import {LogoutBtn} from './LogoutBtn';

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <NavbarLink to="/" text="" icon={<FaTwitter />} />
      <NavbarLink to="/home" text="Home" icon={<FaHome />} />
      <NavbarLink to="/explore" text="Explore" icon={<FaHashtag />} />
      <NavbarLink to="/notifications" text="Notifications" icon={<FaBell />} />
      <NavbarLink to="/messages" text="Messages" icon={<FaEnvelope />} />
      <NavbarLink to="/bookmarks" text="Bookmarks" icon={<FaBookmark />} />
      <NavbarLink to="/lists" text="Lists" icon={<FaRegListAlt />} />
      <NavbarLink to="/profile" text="Profile" icon={<FaUser />} />
      <NavbarLink
        to="/more"
        text="More"
        icon={<HiOutlineDotsCircleHorizontal />}
      />

      <Button
        name="Twitter"
        backgroundColor="RGB(29, 155, 240)"
        textColor="white"
        padding="15px 30px"
      />

      <LogoutBtn />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    border-right: 1px solid ${props => props.theme.color};
  `,
};
