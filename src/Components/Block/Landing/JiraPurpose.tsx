
import styled from "styled-components";
import num from "../../../Assets/number-one.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import image1 from "../../../Assets/arrow.jpg";
import image2 from "../../../Assets/docs.jpg";
import image3 from "../../../Assets/Bulb.jpg";
import image4 from "../../../Assets/like_dna.jpg";

const JiraPurpose = () => {
  const data: any = [
    { imgs: image1, linkPrt: "Learn agile best practices" },
    { imgs: image2, linkPrt: "Team Playbook" },
    { imgs: image3, linkPrt: "Jira Software community" },
    { imgs: image4, linkPrt: "Learn DevOps with best practices" },
  ];
  return (
    <div>
      <Container>
        <Main>
          <HolderLeft>
            <Img src={num} />
            <BigText>
              Why Jira is the #1 tool recommended by agile teams.*
            </BigText>
            <SmallText>
              Trusted by more than 100,000 organizations, Jira Software comes
              out-of-the-box with the features and best practices agile teams
              need to develop and evolve their agile practices.
              <p>*2021 State of Agile Report</p>
            </SmallText>
          </HolderLeft>
          <HolderRight>
            {data.map((el: any) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 10px",
                }}
              >
                <Box>
                  <ImgA src={el.imgs} />
                </Box>
                <SmallText style={{ color: "blue" }}>
                  {el.linkPrt}
                  <Icons />
                </SmallText>
              </div>
            ))}
          </HolderRight>
        </Main>
      </Container>
    </div>
  );
};

export default JiraPurpose;

const Container = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled(AiOutlineArrowRight)`
`;

const Main = styled.div`
  width: 87%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HolderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 400px;
  height: 100%;
  align-items: center;
  color: #172b4d;
`;

const BigText = styled.div`
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SmallText = styled.div`
  font-size: 14px;
  p {
    font-size: 12px;
  }
  transition: all 350ms;

  :hover {
    text-decoration-line: underline;
    cursor: pointer;
    transform: translate(3px, 0);
  }
`;

const Img = styled.img`
  margin-left: -204px;
  width: 350px;
  height: 350px;
`;

const HolderRight = styled.div`
  width: 700px;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 320px;
  height: 200px;
  background-color: red;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ImgA = styled.img`
  width: 100%;
  height: 100%;
`;
