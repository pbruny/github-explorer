import styled, { css } from 'styled-components'

interface FormProps {
  hasError: Boolean
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 56px;
`

export const Header = styled.header`
  margin: 20px 0;
`

export const Form = styled.form<FormProps>`
  margin-top: 50px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: none;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #FFF;
    border-right: 0;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 70px;
    background-color: #04d361;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #FFF;
    font-weight: bold;
    transition: 0.7s;

    &:hover {
      opacity: 0.80;
    }
  }
`

export const Error = styled.span`
  margin-top: 8px;
  color: #c53030;
  display: block;
`


export const Repositories = styled.div`
  
  margin-top: 80px;
  max-width: 700px;

  a{
    display: block;
    text-decoration: none;
    background-color: #FFF;
    width: 100%;
    padding: 24px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    transition: transform 0.5s;

    &:last-child {
      margin-bottom: 16px;
    }

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

`
