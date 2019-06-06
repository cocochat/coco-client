import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import axios from "axios";
import {withAuthSync} from '../utils/auth.js';
import {useContext} from 'react';
import UserContext from "../components/UserContext";
import {PageWrapper, LoggedInPageWrapper} from '../styles/PageWrapper';
import styled from 'styled-components';
import BlueWave from '../components/BlueWave';
const AccountHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 60px;
  position: relative;
  /* background-image: url("../static/images/account-page-wave-svg.svg"); */
  /* background-position: center; */
  z-index: 1;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
const AccountInfo = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 60px;
`;
const Content = styled.div`
  z-index: 1;
`;
const Label = styled.label`
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.orange};
`;
const ArtistName = styled.h1`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 44px;
  color: ${props => props.theme.colors.orange};
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Data = styled.h3`
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;
const Databox = styled.div`
  padding: 30px 25px 30px 25px;
  border-radius: 6px;
  flex: 1 0 50%;
  max-width: calc(50% - 60px);
  margin: 0px 30px 30px 0;
  &.orange {
    background: ${props => props.theme.colors.orange};

    color: ${props => props.theme.colors.black};
    label {
      color: ${props => props.theme.colors.black};
    }
  }
  &.black {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.orange};
    label {
      color: ${props => props.theme.colors.orange};
    }
  }
  &.blue {
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.seafoam};
    label {
      color: ${props => props.theme.colors.seafoam};
    }
  }
  &.lightBlue {
    background: ${props => props.theme.colors.seafoam};
    color: ${props => props.theme.colors.black};
    label {
      color: ${props => props.theme.colors.black};
    }
  }
`;
// const EditProfile = styled.a``;

const Account = ({token}) => {
  const { loggedIn } = useContext(UserContext);
  if (loggedIn) {
    return (
      <LoggedInPageWrapper>
        <AccountHeader>
          <div className="bg">
            <BlueWave />
          </div>
          <Content>
            <Label>Artist Name</Label>
            <ArtistName>Clairo</ArtistName>
          </Content>
          {/* <EditProfile>Edit Profile</EditProfile> */}
        </AccountHeader>
        <AccountInfo>
          <Row>
            <div className="artist-number" />
            <Databox className="data-box orange">
              <Label>Fans</Label>
              <Data>17,890</Data>
            </Databox>
            <Databox className="data-box black">
              <Label>Fans</Label>
              <Data>17,890</Data>
            </Databox>
            <Databox className="data-box blue">
              <Label>Fans</Label>
              <Data>17,890</Data>
            </Databox>
            <Databox className="data-box lightBlue">
              <Label>Fans</Label>
              <Data>17,890</Data>
            </Databox>
          </Row>
        </AccountInfo>
      </LoggedInPageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <AccountHeader>
          
          <Label>Artist Name</Label>
          <ArtistName>Clairo</ArtistName>
        </AccountHeader>
        <h2>{loggedIn ? 'loggedIn' : ''}</h2>
      </PageWrapper>
    )
  }
}
export default withAuthSync(Account);


Account.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
    // console.log({ token });
    
  return { token };
}