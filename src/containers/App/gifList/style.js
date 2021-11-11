import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
  padding-left: 30px;
  padding-right: 30px;
  height: 100%;
  width: 100%;
  // max-width: 1200px;
  margin: auto;
`;

export const HeaderContainer = styled.div`
  padding: 0px 20px;
  height: 64px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
  display: flex;
  justify-content: center;
  flex-direction: row;
  box-shadow: rgb(0 0 0 / 5%) 0px 3px 10px 0px;
  align-items: center;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
`;

export const GifContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
 //   justify-content:center;
   // align-items:center;
    padding: 10px;
}
`;

export const GifCard = styled.div`
  margin: 15px;
  height: 250px;
  flex: 1;
  img {
    width: 300px;
    height: 100%;
  }
`;
