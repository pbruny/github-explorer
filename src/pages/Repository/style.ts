import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.5s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }

  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  
  header {
    display: flex;
    align-items: center;
    
    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        font-size: 16px;
      }
    }
  }
`

export const Issues = styled.div`
  
  margin-top: 80px;

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
