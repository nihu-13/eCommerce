// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

function Header() {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src='./images/storelogo.png' className='logo' alt='Logo ' />
            </NavLink>
            <Navbar />
        </MainHeader>
    );
}

const MainHeader = styled.header`
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
        height:7rem;
        width:10rem;
        border: 2px solid white;
        border-radius: 85px;
        margin:10px;
        padding:10px;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        /* Add your responsive styles here */
        .logo {
            height:7rem;
            width:10rem;
            border: 2px solid white;
            border-radius: 85px;
            margin:10px;
            padding:10px;
        }
    }
`;

export default Header;
