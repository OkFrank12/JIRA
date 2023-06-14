import img1 from "../../../Assets/JSW free-responsive.png";
import img2 from "../../../Assets/JSW sign-responsive2.png";
import img3 from "../../../Assets/Prem sign-responsive.png";
import img4 from "../../../Assets/Ent sign-responsive.png";
import img5 from "../../../Assets/JA sign-responsive.png";
import styled from "styled-components";
import Button from "../../Static/Button";

const Conclusion = () => {
  const data: any = [
    {
      vals: img1,
      mt: "-30px",
    },
    {
      vals: img2,
      mt: "-40px",
    },
    {
      vals: img3,
      mt: "-50px",
    },
    {
      vals: img4,
      mt: "-60px",
    },
    {
      vals: img5,
      mt: "-75px",
    },
  ];

  let newData: any = [
    {
      text: "Jira Software free forever for teams up to 10",
    },
    {
      text: "Jira Software Standard for growing teams",
    },
    {
      text: "Scale across teams with Jira Software Premium",
    },
    {
      text: "Connect and accelerate your entire enterprise",
    },
    {
      text: "Enterprise agility with Jira Align",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <ForText style={{marginTop: "20px"}}>
            <BoldText>Built for teams of 1 to 20,000</BoldText>
            <LightText>
              A growing team doesn’t need to mean growing pains. With
              best-of-breed features, security, privacy, and the right tool for
              every step of your journey - Jira Software allows you to scale
              without friction - regardless of your company size.
            </LightText>
          </ForText>
          <HardLet style={{marginTop: "50px"}}>
            {" "}
            <Rod>
              {data.map((el: any) => (
                <Circle>
                  <SRod>
                    <SCircle src={el.vals} mt={`${el.mt}`} />
                  </SRod>
                </Circle>
              ))}
            </Rod>
            <Inline>
              {newData.map((el: any) => (
                <LightText
                  style={{
                    textAlign: "center",
                    width: "250px",
                    fontWeight: "bold",
                    margin: "20px 10px",
                    fontSize: "13px",
                  }}
                >
                  {el.text}
                </LightText>
              ))}
            </Inline>
          </HardLet>
          <SoftLet>
            <BoldText style={{ width: "600px", textAlign: "center" }}>
              Get started with Jira Software
            </BoldText>
            <Btn style={{margin: "25px 0"}}>
              <Button title="Get it free" bg="blue" color="white" brad="3px"/>
              <br />
              <Button title="See features" color="blue"/>
            </Btn>
          </SoftLet>
        </Main>
      </Container>
    </div>
  );
};

export default Conclusion;

const Container = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6effa;
`;

const Main = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  color: #253858;
  justify-content: space-between;
`;

const BoldText = styled.div`
  width: 400px;
  font-size: 33px;
  font-weight: 600;
`;

const LightText = styled.div`
  font-size: 14px;
  margin-top: 20px;
`;

const ForText = styled.div`
  width: 400px;
`;

const Btn = styled.div`
  width: 150px;
  height: 35px;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: #0065ff;
  top: -10px;
  left: 0px;
  position: relative;
`;

const Rod = styled.div`
  width: 100%;
  height: 5px;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(90deg, #0065ff 31%, #79f2c0 57%);
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const HardLet = styled.div`
  width: 100%;
`;

const SCircle = styled.img<{
  mt: string;
}>`
  width: 100px;
  height: 100px;
  margin-top: ${({ mt }) => mt};
  margin-left: -50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 100%;
`;

const SRod = styled.div`
  height: 100px;
  width: 5px;
  background-color: #0065ff;
  position: absolute;
  bottom: 18px;
  left: 10px;
`;

const Inline = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SoftLet = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
