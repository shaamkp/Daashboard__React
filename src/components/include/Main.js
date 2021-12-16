import React from "react";
import styled from "styled-components";
import User from "../assets/images/image.jpg";
import DashboardIcon from "../assets/images/qr.svg";
import Contact from "../assets/images/user.svg";
import Bell from "../assets/images/bell.svg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Container>
        <SearchBar>
          <Form>
            <InputSearch type="text" placeholder="Global Search" />
          </Form>
          <IconContainer>
            <BellImage src={Bell} alt="Image" />
          </IconContainer>

        </SearchBar>

        <Aside>
          <AsideContent>
            <Title>SaaS Kit</Title>
          </AsideContent>
          <Top>
            <TopImageContainer>
              <TopImage src={User} alt="Image" />
            </TopImageContainer>
            <TopContent>
              <TopContentTitle>Sierra Ferguson</TopContentTitle>
              <TopContentPara>s.ferguson@gmail.com</TopContentPara>
            </TopContent>
          </Top>
          <Bottom>
            <BottomNav>
              <BottomList>
                <Icon>
                  <IconImage src={DashboardIcon} alt="Image" />
                </Icon>

                <BottomTitle to="/dashboard">Dashboard</BottomTitle>
              </BottomList>
              <BottomList>
                <Icon>
                  <IconImage src={Contact} alt="Image" />
                </Icon>
                <BottomTitle to="/contact">Contact</BottomTitle>
              </BottomList>
            </BottomNav>
          </Bottom>
        </Aside>
      </Container>
    </div>
  );
}

const Container = styled.div`
  /* display: flex; */
`;
const Aside = styled.aside`
  width: 20%;
  height: 100vh;
  position: absolute;
  top: 0;
  box-shadow: 9px 6px 46px -24px rgba(0, 0, 0, 0.75);
  position: fixed;
`;

const AsideContent = styled.div`
  padding: 10px;
  color: #109cf1;
  margin-left: 20px;
`;
const Title = styled.h1``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 25px;
`;
const TopImageContainer = styled.div`
  width: 25%;
`;
const TopImage = styled.img`
  border-radius: 50%;
`;
const TopContent = styled.div``;
const TopContentTitle = styled.h2`
  font-size: 18px;
`;
const TopContentPara = styled.p`
  margin: 0px;
  color: grey;
  font-size: 12px;
  font-weight: 600;
`;
const Bottom = styled.div`
  margin-left: 20px;
`;
const BottomNav = styled.ul`
  padding: 0px;
`;
const BottomList = styled.li`
  display: flex;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
`;
const Icon = styled.div`
  width: 10%;
`;
const IconImage = styled.img``;
const BottomTitle = styled(Link)`
  margin-left: 10px;
  color: #626466;
  font-size: 18px;
  &:hover {
    color: #109cf1;
    transition: 0.4s ease-in-out;
  }
`;
const SearchBar = styled.header`
  height: 64px;
  width: 100%;
  z-index: -1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebeff2;
  position: fixed;
  background: #fff;
`;
const Form = styled.form`
  padding-left: 20%;
`;
const InputSearch = styled.input`
  padding: 21px 20px;
  width: 800px;
  border: 1px solid #fff;
  ::placeholder {
    color: #ebeff2;
  }
`;
const IconContainer = styled.div`
  margin-left: 10%;
  cursor: pointer;
`;
const BellImage = styled.img``;
