import styled from 'styled-components'



export const Container = styled.div`
  display: flex;
  background: var(--bg-footer);
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  text-align: center;
  line-height: 2.8rem;
  padding: 2rem;
  @media (min-width: 550px) {
    display: block;
  }
  > a img {
    width: 35%;
    opacity: 0.5;
    @media (min-width: 550px) and (max-width: 999px){
      width: 8%;
      max-width: 10%;
    }
     @media (min-width: 1000px) and (max-width:1300px) {
       width: 3%;
     }
    &:hover {
      opacity: 1;
      transition: opacity .15s ease-in-out;
    }
  }
  > p {
    color: var(--main-footer-color);
    font-size: 1.22rem;
    @media (min-width: 550px) {
      font-size: 1.5rem;
    }
  }
`;
