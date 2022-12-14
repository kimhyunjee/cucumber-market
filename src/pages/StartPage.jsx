import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../image/image_cucumber.png";

function StartPage() {
  const navigate = useNavigate();

  const onClickSNSButton = () => {
    navigate("/snslogin");
  };

  const onClickSignUpButton = () => {
    navigate("/signup");
  };

  const onClickLogInButton = () => {
    navigate("/login");
  };

  return (
    <>
      <Container>
        <StLogobox>
          <div className="logobox">
            <img src={logo} alt="오이마켓 로고" />
          </div>
        </StLogobox>
        <StTitleBox>
          <h2>당신 근처의 오이마켓</h2>
          <p>
            중고 거래부터 동네 정보까지,
            <br />
            지금 내 동네를 선택하고 시작해보세요!
          </p>
        </StTitleBox>
        <Buttonbox>
          <button onClick={onClickSNSButton}>
            SNS 계정으로 3초만에 시작하기
          </button>
          <button onClick={onClickSignUpButton}> 회원가입하기 </button>
          <p>
            이미 계정이 있나요? <span onClick={onClickLogInButton}>로그인</span>
          </p>
        </Buttonbox>
      </Container>
    </>
  );
}

export default StartPage;

const Container = styled.div`
  /* height: calc(100% - 39px); */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StLogobox = styled.div`
  /* background-color: coral; */
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .logobox {
    /* background-color: darkslategray; */
    display: flex;
    justify-content: center;

    align-items: center;
  }
  & img {
    width: 40%;
  }
`;

const StTitleBox = styled.div`
  text-align: center;
  & p {
    margin-top: 20px;
  }
`;

const Buttonbox = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; */
  width: 100%;
  transform: translateY(120px);
  text-align: center;

  & button {
    /* width: 100%;
    box-sizing: border-box; */
    background-color: #72a740;
    color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    width: 80%;

    cursor: pointer;

    padding: 10px;
    margin: 10px;
  }
  & p {
    font-size: 12px;
  }
  & span {
    cursor: pointer;
    color: blue;
  }
`;
