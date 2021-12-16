import React, { useState } from "react";
import styled from "styled-components";
import BgImage from "../assets/images/Bg.jpg";
import eclips from "../assets/images/Ellipse 2.svg";
import Lock from "../assets/images/lock.svg";
import Message from "../assets/images/Vector.svg";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";
import { useHistory } from 'react-router-dom'
 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    setMessage("")
    e.preventDefault();
    axios
      .post(`${BASE_URL}`, { username, password })
      .then((response) => {
        console.log(response.data);
        let data = response.data;
        localStorage.setItem("user_data",JSON.stringify(data));
        history.push("/dashboard")
      })
      .catch((error) => {
        console.log(error.response);
        if(error.response.status == 401){
          setMessage(error.response.data.data.detail)

        }
      });
  };

  return (
    <div>
      <Container>
        <Left>
          <Content>
            <ContentHeading>GoFinance</ContentHeading>
            <ContentParagraph>
              The most popular peer to peer lending at SEA
            </ContentParagraph>
            <ContentButton>Read More</ContentButton>
          </Content>
          <EclipsContainer>
            <EclipsImage src={eclips} alt="Image" />
          </EclipsContainer>
          <EclipsContainer2>
            <EclipsImage2 src={eclips} alt="Image" />
          </EclipsContainer2>
        </Left>
        <Right>
          <RightContent>
            <RightContentHeading>Saas Kit</RightContentHeading>
            <RightContentSubHeading>Hello!</RightContentSubHeading>
            <RightContentParagraph>Sign Upto Get Started</RightContentParagraph>
            <RightContentForm
              onSubmit={handleSubmit}
              method="post"
              action={BASE_URL}
            >
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
                placeholder="Username"
              />
              <InputPassword
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                placeholder="Password"
              />
              {message && <ErrorMessage>{message}</ErrorMessage>}
              <InputButton type="submit" name="Login" value="Login" />
            </RightContentForm>
          </RightContent>
        </Right>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
const Left = styled.div`
  width: 60%;
  background: url(${BgImage});
  background-size: cover;
  height: 100vh;
`;
const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 250px;
  margin-left: 150px;
`;
const ContentHeading = styled.h2`
  color: #fff;
  font-size: 40px;
  margin: 0px;
`;
const ContentParagraph = styled.p`
  font-size: 15px;
  color: #fff;
  font-weight: 600;
`;
const ContentButton = styled.button`
  border: none;
  background: #0575e6;
  color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
`;
const EclipsContainer = styled.div`
  width: 27%;
  position: relative;
`;
const EclipsImage = styled.img`
  position: absolute;
  top: 107px;
  right: 44px;
`;
const EclipsContainer2 = styled.div`
  width: 31%;
  position: relative;
`;
const EclipsImage2 = styled.img`
  position: absolute;
  top: 144px;
`;
const Right = styled.div`
  width: 30%;
`;
const RightContent = styled.div`
  width: 50%;
  margin-top: 41%;
`;
const RightContentHeading = styled.h2`
  font-size: 40px;
  color: #0575e6;
  margin-bottom: 50px;
`;
const RightContentSubHeading = styled.h4`
  font-size: 32px;
  font-weight: 700;
  margin: 0px;
`;
const RightContentParagraph = styled.p`
  margin-top: 0px;
  font-size: 20px;
`;

const RightContentForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-top: 10px;
  padding: 10px 40px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid grey;
  background: url(${Message}) no-repeat;
  background-position: 9px;
`;
const InputPassword = styled.input`
  margin-top: 10px;
  padding: 10px 40px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid grey;
  background: url(${Lock}) no-repeat;
  background-position: 9px;
`;
const InputButton = styled.input`
  margin-top: 10px;
  padding: 15px 40px;
  width: 250px;
  background: #0575e6;
  border: none;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
    font-size:12px;
    font-weight:600;
    color:red;
    margin-bottom:25px;
    text-align:center;
`;
