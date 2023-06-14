import styled from "styled-components";
import { useState, useContext } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { iProps } from "../../../Utils/Interface";
import { GlobalContext } from "../../../Global/GlobalProvider";

const InputProps: React.FC<iProps> = ({
  name,
  name1,
  namePlace,
  email1,
  email,
  emailPlace,
  password1,
  password,
  passwordPlace,
  confirm1,
  confirmPlace,
  confirm,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const {
    actualConfirm,
    actualEmail,
    actualName,
    actualPassword,
    setActualName,
    setActualConfirm,
    setActualEmail,
    setActualPassword,
  } = useContext(GlobalContext);

  const onShow = () => {
    setShow(!show);
  };

  const onShow2 = () => {
    setShow2(!show2);
  };

  return (
    <div>
      <Container>
        {name ? (
          <InputHolder>
            <Text>
              {name1}
              <p>*</p>
            </Text>
            <Input
              placeholder={`${namePlace}`}
              value={actualName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActualName(e.target.value);
              }}
            />
          </InputHolder>
        ) : null}

        {email ? (
          <InputHolder>
            <Text>
              {email1}
              <p>*</p>
            </Text>
            <Input
              placeholder={`${emailPlace}`}
              type="email"
              value={actualEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActualEmail!(e.target.value);
              }}
            />
          </InputHolder>
        ) : null}

        {password ? (
          <InputHolder>
            <Text>
              {password1}
              <p>*</p>
            </Text>
            {show ? (
              <InputHold>
                <Input placeholder={`${passwordPlace}`} type="" value={actualPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActualPassword!(e.target.value)
              }}/>
                <Icon onClick={onShow} />
              </InputHold>
            ) : (
              <InputHold>
                <Input placeholder={`${passwordPlace}`} type="password" value={actualPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActualPassword!(e.target.value)
              }}/>
                <Icon2 onClick={onShow} />
              </InputHold>
            )}
          </InputHolder>
        ) : null}

        {confirm ? (
          <InputHolder>
            <Text>
              {confirm1}
              <p>*</p>
            </Text>
            {show2 ? (
              <InputHold>
                <Input placeholder={`${confirmPlace}`} type="" value={actualConfirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActualConfirm!(e.target.value)
              }}/>
                <Icon onClick={onShow2} />
              </InputHold>
            ) : (
              <InputHold>
                <Input placeholder={`${confirmPlace}`} type="password" value={actualConfirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setActualConfirm!(e.target.value)
              }}/>
                <Icon2 onClick={onShow2} />
              </InputHold>
            )}
          </InputHolder>
        ) : null}
      </Container>
    </div>
  );
};

export default InputProps;

const Container = styled.div``;

const InputHolder = styled.div`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
  margin: 18px 0;
`;

const Text = styled.div`
  display: flex;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);

  p {
    margin-top: 1px;
    margin-left: 3px;
    color: #ff0000;
  }
  line-height: 0.1;
`;

const Input = styled.input`
  width: 380px;
  height: 35px;
  border: 1px solid silver;
  outline: 0;
  border-radius: 8px;
  padding-left: 5px;

  :focus {
    outline: 1px solid #1c7ed6;
    border: 1px solid transparent;
  }

  ::placeholder {
    color: silver;
  }
`;

const Icon = styled(MdOutlineVisibilityOff)`
  position: absolute;
  right: 12px;
  top: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const Icon2 = styled(MdOutlineVisibility)`
  position: absolute;
  right: 12px;
  top: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const InputHold = styled.div`
  display: flex;
  position: relative;
`;
