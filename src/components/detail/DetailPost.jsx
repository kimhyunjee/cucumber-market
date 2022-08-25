import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//1. 전체리스트를 불러온다.
//1-1. get요청을 통해 화면에 그릴 정보를 불러온다.
//1-2. get요청으로 불러온 값을 담을 state를 생성한다. [posts,setPost]

//2. params의 id값과 list의 id값을 대조해 일치한 list를 뽑아 렌더링한다.
//2-1. useParams로 postId(주소창 id값)을 불러온다.
//2-2. id값에 맞게 가져온 data를 find를 이용해 비교하고 일치한 것만 뽑는다.

//1. get요청을 통해 화면에 그릴 정보를 불러온다.
//2. get요청으로 불러온 값을 담을 state를 생성한다. [posts,setPost]
//3. get요청해서 불러온 값을 response에 담는다.
//4. fetchPost를 이용해 get한 값을 state에 담는다.
//4. 생성한 state에 response값을 담는다. = state변경완료
//5. useEffect로 렌더링될때 fetchPost를 실행시킨다.


const DetailPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams(); 
  const [posts, setPosts] = useState([]);
  console.log(postId)

  const fetchPosts = async () => {
    const res = await axios.get(`http://54.180.128.147/api/post/${postId}`);
    console.log(postId)
    setPosts(res.data);
  }
  console.log(posts)

  useEffect(()=> {
    fetchPosts()
  }, []);

  // const detailPost = posts.find((post)=> post.postId == postId);
  // console.log(detailPost)

  const onClickDeleteBtnHandler = async () => {
    //console.log(postId)
    const data = await axios.delete(`http://15.164.171.114/api/post/${postId}`);
    console.log(data)
    alert("게시글이 삭제되었습니다");
    navigate('/main');
  };

  return (
    <>
      <Header>
        <div
          style={{ flexDirection: "row" }}
        >
            {/* style={{ marginLeft : "10px" }} */}
          <FiArrowLeft className="arrow"
            size={28}
            onClick={() => {
              navigate("/main");
            }}
          />
          </div>
          <div>
          <FiEdit className="edit"
            size={28}
            onClick={() => {
              navigate(`/edit/${postId}`);
            }}
          />
        
          <FiTrash2 
            className="delete"
            size={30} 
            type="button"
            onClick={()=>{onClickDeleteBtnHandler(posts.id)}}
            />
        </div>
      </Header>
      <Body>
        <Image
          url={posts.imageUrl}
        >
        </Image>
        <UserInfo>
          <div>
          <MdAccountCircle
            size={40}
          />
          </div>
          <div>
            <div className="nickname">{posts.nickname}</div>
            <div>{posts.location}</div>
            {/* {posts?.map((post)=>
               (
                <div key={post.postId}>
                  <div>{post.nickname}</div>
                </div>
              )
            )} */}
            {/* <div className="nickname"> {detailPost.nickname} </div>
            <div className="location"> {detailPost.location} </div> */}
                
          </div>
        </UserInfo>
        <hr />
        <ContentBox>
        <div>
          <div className="title">{posts.title}</div>
          <div className="body">{posts.content}</div>
        </div>
        </ContentBox>
      </Body>
      <hr />
      <Bottom>
        <BsHeart 
          size={30}
        />
        {/* <div className="price">{DetailPost.price}</div> */}
        <StButton>채팅하기</StButton>
      </Bottom>
    </>
  );
};
export default DetailPost;

const Header = styled.div`
  height: 50px;
  background-color: #acd137;
  color: white;
  padding: 6px;
  display: flex; //
  justify-content: space-between; //
  align-items: center; //

  & svg {
    cursor: pointer;
    margin-left: 5px;
    margin-right: 2px;
  }
`;

const Body = styled.div`
  //font-weight: 700;
`;
const ContentBox = styled.div`
  background-color: white;
  height: 200px;
  margin-left: 20px;

  .title {
    font-weight: 700;
    font-size: larger;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const UserInfo = styled.div`
  color: rgb(169, 169, 169);
  background-color: white;
  display: flex;
  align-items: center;
  height: 70px;

  .nickname {
    margin-left: 10px;
    color: black;
    font-weight: 600;
  }

  & svg {
    margin-left: 15px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
  
const Image = styled.div`
  background-position: center;
  background-size: cover;
  height: 300px;
  background-image: url(${(props) => props.url});
`;

const Bottom = styled.div`
  background-color: white;
  height: 60px;
  color: rgb(169, 169, 169);
  
  display: flex;
  justify-content: space-between;
  & svg {
    margin: auto;
    margin-left: 20px;
    cursor: pointer;
  }
  .price {
    margin: auto;
    margin-left: -60px;
    
  }
`;
const StButton = styled.button`
  width: 90px;
  height: 40px;
  border: 1px solid #acd137;
  cursor: pointer;
  color: white;
  font-size: medium;
  background-color: #acd137;
  border-radius: 10px;
  margin: auto;
  margin-right: 10px;
`;
