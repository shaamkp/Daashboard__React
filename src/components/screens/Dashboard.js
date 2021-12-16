import React from "react";
import styled from "styled-components";
import user from "../assets/images/image2.svg";
import user2 from "../assets/images/image4.svg";
import user3 from "../assets/images/image5.svg";
import Main from "../include/Main";
import PieChart from "../screens/PieChart";



export default function Dashboard() {
  return (
    <div>
      
      <Main />
      <Body>
        <Container>
          <ContainerTop>
            <Top>
              <Span>8 task completed out of 10</Span>
              <Small>
                Show:<Category>This Week</Category>
              </Small>
            </Top>
            <Bar>
              <GreenBar></GreenBar>
            </Bar>
            <TopTitle>23 December, Sunday</TopTitle>

            <Bottom>
              <Date>
                <Week>Sun</Week>
                <Day className="Marked">23</Day>
              </Date>
              <Date>
                <Week>Mon</Week>
                <Day>24</Day>
              </Date>
              <Date>
                <Week>Tue</Week>
                <Day>25</Day>
              </Date>
              <Date>
                <Week>Wed</Week>
                <Day>26</Day>
              </Date>
              <Date>
                <Week>Thu</Week>
                <Day>27</Day>
              </Date>
              <Date>
                <Week>Fri</Week>
                <Day>28</Day>
              </Date>
              <Date>
                <Week>Sat</Week>
                <Day>29</Day>
              </Date>
            </Bottom>
          </ContainerTop>
          <ContainerBottom>
            <Schedules>
              <SchedulesTop>
                <SchedulesRight>
                  <Title>Send benefits review by Sunday</Title>
                  <ScheduleSpan>
                    Due Date: <ScheduleSmall> December 23, 2018</ScheduleSmall>
                  </ScheduleSpan>
                </SchedulesRight>
                <SchedulesLeft>
                  <ScheduleSpan>Reminder</ScheduleSpan>
                </SchedulesLeft>
              </SchedulesTop>
              <SchedulesBottom>
                <Right>
                  <RighImageContainer>
                    <RightImage src={user} alt="Image" />
                  </RighImageContainer>
                  <RightTitle>George Fields</RightTitle>
                </Right>
                <Left>
                  <LeftButton>Completed</LeftButton>
                </Left>
              </SchedulesBottom>
            </Schedules>

            <Schedules>
              <SchedulesTop>
                <SchedulesRight>
                  <Title>Invite to office meet-up</Title>
                  <ScheduleSpan>
                    Due Date: <ScheduleSmall> December 23, 2018</ScheduleSmall>
                  </ScheduleSpan>
                </SchedulesRight>
                <SchedulesLeft>
                  <ScheduleSpan>Call</ScheduleSpan>
                </SchedulesLeft>
              </SchedulesTop>
              <SchedulesBottom>
                <Right>
                  <RighImageContainer>
                    <RightImage src={user2} alt="Image" />
                  </RighImageContainer>
                  <RightTitle>Rebecca Moore</RightTitle>
                </Right>
                <Left>
                  <LeftButton1>Ended</LeftButton1>
                </Left>
              </SchedulesBottom>
            </Schedules>

            <Schedules>
              <SchedulesTop>
                <SchedulesRight>
                  <Title>Send benefits review by Sunday</Title>
                  <ScheduleSpan>
                    Due Date: <ScheduleSmall> December 23, 2018</ScheduleSmall>
                  </ScheduleSpan>
                </SchedulesRight>
                <SchedulesLeft>
                  <ScheduleSpan>Reminder</ScheduleSpan>
                </SchedulesLeft>
              </SchedulesTop>
              <SchedulesBottom>
                <Right>
                  <RighImageContainer>
                    <RightImage src={user3} alt="Image" />
                  </RighImageContainer>
                  <RightTitle>Lindsey Stroud</RightTitle>
                </Right>
                <Left>
                  <LeftButton>Completed</LeftButton>
                </Left>
              </SchedulesBottom>
            </Schedules>
            <ShowMore>Show More</ShowMore>
          </ContainerBottom>
        </Container>
        <Graph>
          <Graphtop>
            <Graphleft>
              <Graphtitle>Deals</Graphtitle>
              <GraphSpan>
                Show:<GraphSmall>Monthly</GraphSmall>
              </GraphSpan>
            </Graphleft>
            <PieChart />
          </Graphtop>
        </Graph>
      </Body>
    </div>
  );
}

const Body = styled.div`
  position: relative;
  background: #0000;
  width: 100%;
  z-index: -5;
`;
const Container = styled.div`
    box-shadow: 9px 6px 46px -24px rgba(0,0,0,0.75);
    position: absolute;
    padding: 20px 25px;
    left: 24%;
    top: 150px;
    width: 40%;
    
}
`;
const ContainerTop = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Span = styled.span``;
const Small = styled.small``;
const Category = styled.span`
  color: #0575e6;
`;
const Bar = styled.div`
  width: 100%;
  height: 6px;
  background: #ebeff2;
  z-index: 0;
  border-radius: 10px;
  margin-top: 20px;
`;
const GreenBar = styled.div`
  width: 50%;
  height: 6px;
  background: #2dd47a;
  z-index: 2;
  border-radius: 10px;
`;
const TopTitle = styled.h4`
  margin-top: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-bottom: 1px solid #c2cfe0;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(1) .Marked {
    background: #109cf1;
    padding: 05px;
    color: #fff;
    border-radius: 50%;
  }
  margin-bottom: 30px;
`;
const Week = styled.div`
  color: #c2cfe0;
`;
const Day = styled.div`
  color: #c2cfe0;
  margin-top: 15px;
`;
const ContainerBottom = styled.div``;
const Schedules = styled.div`
  margin-top: 30px;
  box-shadow: 9px 6px 46px -24px rgba(0, 0, 0, 0.75);
  padding: 20px 25px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const SchedulesTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SchedulesRight = styled.div``;
const Title = styled.h4`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 7px;
`;
const ScheduleSpan = styled.span`
  font-size: 15px;
  color: #c2cfe0;
  font-weight: 500;
`;
const ScheduleSmall = styled.span`
  color: #000;
`;
const SchedulesLeft = styled.div``;
const SchedulesBottom = styled.div`
  margin-top: 30px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const RighImageContainer = styled.div`
  width: 20%;
`;
const RightImage = styled.img`
  border-radius: 50%;
`;
const RightTitle = styled.h6`
  margin: 0px;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 500;
`;
const Left = styled.div``;
const LeftButton = styled.button`
  border: none;
  padding: 10px 14px;
  background: #2ed47a;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
`;
const LeftButton1 = styled.button`
  background: #f7685b;
  border: none;
  padding: 10px 14px;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
`;
const ShowMore = styled.small`
  color: #109cf1;
  font-size: 15px;
  margin-top: 15px;
  text-align: center;
  display: block;
  font-weight: 700;
  cursor: pointer;
`;
const Graph = styled.div`
    position: absolute;
    right: 10%;
    top: 200px;
    width: 20%;
    
}
`;
const Graphtop = styled.div``;
const GraphSmall = styled.div``;
const Graphleft = styled.div``;
const Graphtitle = styled.h5``;
const GraphSpan = styled.div``;
