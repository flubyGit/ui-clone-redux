import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3.5rem;
  padding: 1rem;
  grid-template-areas: 'first second';
  background: ${({ theme }) => theme.body};

  @media (min-width: 1000px) and (max-width: 1300px) {
    grid-template-columns: 15% 1fr;
  }
`

export const WrapperLeft = styled.div`
  grid-area: first;
  display: flex;
  align-items: center;
  > img {
    cursor: pointer;
    margin-left: 4rem;
    @media (max-width: 599px) {
      width: 15%;
      max-width: 25%;
    }
    @media (min-width: 600px) and (max-width: 999px) {
      width: 7%;
      max-width: 15%;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
      min-width: 17%;
      margin: 0;
    }
  }
  > span {
    font-weight: 700;
    > i {
      cursor: pointer;
    }

    @media (min-width: 1000px) and (max-width: 1300px) {
      margin-left: 1rem;
    }
  }
`
export const WrapperRight = styled.div`
  grid-area: second;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > span {
    @media (max-width: 1000px) {
      display: none;
      cursor: pointer;
    }
  }
  > i {
    cursor: pointer;
    @media (min-width: 1000px) {
      display: none;
    }
  }
  > input {
    background: var(--bg-input);
    padding: 1rem;
    margin-left: 20px;
    width: 80%;
    color: #000;
    outline: none;
    border-radius: 20px;
    border: none;
    display: none;

    @media (min-width: 1000px) and (max-width: 1300px) {
      width: 20%;
      display: block;
    }
  }
`
