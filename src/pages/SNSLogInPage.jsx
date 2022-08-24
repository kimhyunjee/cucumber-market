import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { SiKakaotalk, SiNaver } from "react-icons/si";
import { ImGoogle2 } from "react-icons/im";
import styled from "styled-components";

function SNSLogInPage() {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <STArrowBox>
          <BiArrowBack onClick={onClickBackButton} />
        </STArrowBox>
        <StTitleBox>
          안녕하세요!
          <br />
          SNS계정으로 로그인 해주세요
        </StTitleBox>
        <StIconBox>
          <div className="logo">
            <ImGoogle2 size="40px" color="red" />
          </div>
          <div className="logo">
            <SiKakaotalk size="40px" color="f9e000" />
          </div>
          <div className="logo">
            <SiNaver size="40px" color="2de400" />
          </div>
        </StIconBox>
      </div>
    </>
  );
}

export default SNSLogInPage;

const STArrowBox = styled.div`
  margin: 20px 0;
  padding: 5px;
`;

const StTitleBox = styled.div`
  padding: 5px;
  margin: 20px 0px;
`;

const StIconBox = styled.div`
  display: flex;
  justify-content: center;
  & .logo {
    margin: 15px;
    cursor: pointer;
  }
`;
