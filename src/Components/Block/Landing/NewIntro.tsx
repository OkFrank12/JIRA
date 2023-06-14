import {useState} from "react";
import styled from "styled-components";
import img1 from "../../../Assets/quote.svg";
import img2 from "../../../Assets/Capture.png";

const NewIntro = () => {
  const data: any = [
    { divs: "Plan" },
    { divs: "Track" },
    { divs: "Release" },
    { divs: "Report" },
    { divs: "Automate" },
  ];

  const [click, setClick] = useState<boolean>(false);

  const onclick = () => {
    setClick(!click)
  }
  return (
    <div>
      <Container>
        <Main>
          <Head>All from a single source of truth</Head>
          <Holds>
            {data.map((props: any) => (
              <Div onClick={onclick}>{props.divs}</Div>
            ))}
          </Holds>
          <Holder>
            <Cage>
              <Head>Plan</Head>
              <Outlines>
                Break the big ideas down into manageable chunks across teams
                with user stories, issues, and tasks.
              </Outlines>
              <Curver>
                <Imgs src={img1} />
                <Outlines>
                  Work becomes a lot more visible when it’s all in one place. It
                  makes collaboration a whole lot easier.
                </Outlines>
                <Name>
                  <Sub style={{ fontSize: "17px", fontWeight: "700" }}>
                    JEFF LAI
                  </Sub>
                  <Sub>INTERNAL INFRASTRUCTURE,</Sub>
                  <Sub>CANVA</Sub>
                </Name>
              </Curver>
            </Cage>
            <Cage2>
              <Imgs1 src={img2} />
            </Cage2>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default NewIntro;

const Container = styled.div`
  width: 100%;
  min-height: 125vh;
  background-color: #deebff;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 87%;
  height: 100vh;
  background-color: #deebff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Head = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #253858;
  line-height: 2.5;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: white;
  min-width: 80px;
  padding-right: 10px;
  padding-left: 10px;
  height: 40px;
  font-size: 18px;

  :hover {
    border: 1px solid grey;
    cursor: pointer;
  }
`;

const Holds = styled.div`
  display: flex;
  width: 550px;
  justify-content: space-between;
`;

const Imgs = styled.img`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
`;

const Holder = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Outlines = styled.div`
  color: #253858;
  width: 250px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sub = styled.div`
  color: #253858;
`;

const Curver = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(90deg, #a100ff00 0%, #fdf8f8b9 97%);
  border-radius: 0 100% 100% 0;
  margin-top: 45px;
`;

const Cage = styled.div``;

const Cage2 = styled.div``;

const Imgs1 = styled.img`
  margin-left: 20px;
`;
