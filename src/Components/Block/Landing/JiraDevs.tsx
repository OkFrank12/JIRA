
import styled from "styled-components";
import anImg from "../../../Assets/devops-diagram-compressed.png";
import Button from "../../Static/Button";
import flo from "../../../Assets/flo.png";

const JiraDevs = () => {
  const m: any = [
    { big: "900%", small: "increase in deployments" },
    { big: "50%", small: "decrease in cycle time" },
  ];
  return (
    <div>
      <Container>
        <Main>
          <ImgPart src={anImg} />
          <Holder>
            <Div>
              <BigText>Let developers focus on code</BigText>
              <SmallText>
                Developers want to focus on code, not update issues. We get it!
                Open DevOps makes it easier to do both regardless of the tools
                you use. Now developers can stay focused and the business can
                stay aligned.
              </SmallText>
              <DivHope>
                <Button
                  brad="3px"
                  title="Explore Open Develops"
                  color="white"
                  bdr="1px solid white"
                  bg="#172b4d"
                />
              </DivHope>
            </Div>
            <Div1>
              <SmallText style={{ fontSize: "14px" }}>
                HOW CUSTOMERS ARE BENEFITING
              </SmallText>
              <Logo src={flo} />
              {m.map((el: any) => (
                <div>
                  <BigText style={{ marginBottom: "-5px", marginTop: "8px" }}>
                    {el.big}
                  </BigText>
                  <SmallText>{el.small}</SmallText>
                </div>
              ))}
            </Div1>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default JiraDevs;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  background-color: #172b4d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120vh;
`;

const BigText = styled.div`
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Div1 = styled.div`
`;

const Div = styled.div`
  width: 450px;
`;

const SmallText = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Holder = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ImgPart = styled.img`
  width: 700px;
  height: 120vh;
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

const DivHope = styled.div`
  width: 280px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
