import React, {Component} from 'react';
import styled from 'styled-components';
import { PageWrapper, LoggedInPageWrapper } from "../styles/PageWrapper";
import BlueWave from "../components/BlueWave";
import {Button} from '../styles/Button';
import {Label} from '../styles/Type';

const CampaignDefaultInner = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    svg {
      height: 100%;
    }
  }
`;

const CreateCampaignInner = styled.div`
  background: ${props => props.theme.colors.blue};
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
  width: auto;

`;

const CampaignOutput = styled.div`
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CampaignForm = styled.div`
  background: ${props => props.theme.colors.white};
  flex: 1 0 50%;
  padding: 60px;
`;
const DefaultContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  text-align: center;

  .btn {
    margin: 0 auto;
    margin-top: 40px;
  }
`;
const DefaultTitle = styled.h1`
  color: ${props => props.theme.colors.orange};
  font-size: 64px;
  letter-spacing: 1px;
  line-height: 44px;
  margin: 40px 0;
`;
const DefaultText = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.5px;
  max-width: 762px;
  margin: 0 auto;
`;
class Campaigns extends Component {
  state = {
    hasCampaigns: false,
    initialState: true
  }
  createCampaignhandler = () => {
    const {initialState} = this.state;
    this.setState({
      initialState: !initialState
    })
  }
  render() {
    return (
      <>
        {this.state.hasCampaigns ? (
          <LoggedInPageWrapper>
            <h1>Campaigns</h1>
          </LoggedInPageWrapper>
        ) : (
          <LoggedInPageWrapper>
            {this.state.initialState ? (
              <CampaignDefaultInner>
                <div className="bg">
                  <BlueWave />
                </div>
                <DefaultContentWrapper>
                  <DefaultTitle>Campaigns</DefaultTitle>
                  <DefaultText>
                    Use the campaign builder to design and send your own
                    custom text messages.
                  </DefaultText>
                  <Button
                    blue
                    className="btn"
                    onClick={this.createCampaignhandler}
                  >
                    Create a Campaign
                  </Button>
                </DefaultContentWrapper>
              </CampaignDefaultInner>
            ) : (
              <CreateCampaignInner>
                <CampaignOutput>
                  <PhoneRendering>output</PhoneRendering>
                </CampaignOutput>
                <CampaignForm>
                  <InputWrapper>
                    <Label>Campaign Text</Label>
                    <input type="textarea" />
                  </InputWrapper>
                  <InputWrapper>
                    <Label>Campaign Text</Label>
                    <textarea type="textarea" cols="120" rows="10"/>
                  </InputWrapper>
                </CampaignForm>
              </CreateCampaignInner>
            )}
          </LoggedInPageWrapper>
        )}
      </>
    );
  }
}

export default Campaigns;


const PhoneRendering = styled.div`
  min-height: 678px;
  width: 375px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.black};
`;

const InputWrapper = styled.div`
  input {
    height: 50px;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    background: #ececec;
    -webkit-appearance: none;
    border: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
`;