import Link from 'next/link';
import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../components/UserContext";
import {logout} from '../utils/auth';
const Logo = styled.a`
  color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  padding: 40px 0 0 40px;
  display: block;
  cursor: pointer;
`;
const LeftRail = styled.div`
  background: ${props => props.theme.colors.orange};
  width: auto;
  min-width: 270px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  
`;
const TopRail = styled.div`
  display: flex;
  background: ${props => props.theme.colors.orange};
`;
const Top = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const NavLinksWrapper = styled.div`
`;
const NavLinks = styled.ul`
  list-style-type: none;
  li {

    background: #FFA949;
    margin-bottom: 15px;
    border-radius: 4px 0 0 4px;
    &.active {
      background: ${props => props.theme.colors.darkOrange};

    }
    a {
      padding: 20px 0;
      display: block;
      font-weight: bold;
      font-size: 11px;
      line-height: 18px;
      letter-spacing: 1px;
      -webkit-font-smoothing: antialiased;
      margin-left: 60px;
    }
  }
`;
const Bottom = styled.div`

`;

const Nav = props => {
  const {loggedIn} = useContext(UserContext);

  return (
    <>
      {loggedIn && (
        <LeftRail>
          <Top>
            <Link href="/">
              <Logo>
                <svg className="icon icon-coco">
                  <use xlinkHref="#icon-coco" />
                </svg>
              </Logo>
            </Link>
          </Top>
          <NavLinksWrapper>
            <NavLinks>
              <li className={"active"}>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/messages">
                  <a>Messages</a>
                </Link>
              </li>
              <li>
                <Link href="/campaigns">
                  <a>Campaigns</a>
                </Link>
              </li>
            </NavLinks>
          </NavLinksWrapper>
          <Bottom>
            <button onClick={logout}>Logout</button>
          </Bottom>
        </LeftRail>
      )}
      {!loggedIn && (
        <TopRail>
          <Link href="/">
            <Logo>
              <svg className="icon icon-coco">
                <use xlinkHref="#icon-coco" />
              </svg>
            </Logo>
          </Link>
        </TopRail>
      )}
    </>
  );
}

export default Nav;
