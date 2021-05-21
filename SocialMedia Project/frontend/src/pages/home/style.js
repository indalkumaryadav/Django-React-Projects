import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
`;

export const LeftDiv = styled.div`
  width: 18%;
  height: 100vh;
  left: 0;
  position: fixed;
`;
export const CenterDiv = styled.div`
  width: 64%;
  margin-left: 18%;
`;
export const RightDiv = styled.div`
  width: 18%;
  height: 100vh;
  right: 0;
  position: fixed;
`;

export const StoryContainer = styled.div`
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const PostContainer = styled.div`
  top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
