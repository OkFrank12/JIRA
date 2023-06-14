import styled from "styled-components";
import img0 from "../../../Assets/newIcons.png";
import img1 from "../../../Assets/Icon_more.png";
import Button from "../../Static/Button";

const Relationships = () => {
  return (
    <div>
      <Container>
        <Imgs src={img0} />
        <DivHold>
          <WriteUp>We believe in open relationships</WriteUp>
          <More>
            If your team uses it, we integrate with it. Easily add your tools
            from the Atlassian Marketplace, keeping Jira as your central source
            of truth.
          </More>
          <Button brad="3px" color="blue" title="Explore integrations" bdr="1px solid blue"/>
        </DivHold>

        <Imgs src={img1} />
      </Container>
    </div>
  );
};

export default Relationships;

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imgs = styled.img`
  height: 320px;
`;

const WriteUp = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #222768;
  line-height: 3;
`;

const More = styled.div`
  font-size: 14px;
  width: 600px;
  margin-bottom: 15px;
`;

const DivHold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
