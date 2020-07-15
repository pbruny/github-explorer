import React from 'react'
import logo from '../../assets/images/logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Header, Form, Repositories } from './style'

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer Logo" className="logo" />
        <Title>Explore repositórios no Github</Title>
      </Header>

      <Form>
          <input type="text" placeholder="Digite o nome do repositório" />
          <button type="submit" >Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#" >
          <img src="https://avatars0.githubusercontent.com/u/14647700?s=460&u=18119ff02309fb80ba5d8b0cc1b858b37429fd5b&v=4" alt="Paulo Bruny Lima" />
          <div>
            <strong>pbruny/pbruny.github.io</strong>
            <p>My personal repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#" >
          <img src="https://avatars0.githubusercontent.com/u/14647700?s=460&u=18119ff02309fb80ba5d8b0cc1b858b37429fd5b&v=4" alt="Paulo Bruny Lima" />
          <div>
            <strong>pbruny/pbruny.github.io</strong>
            <p>My personal repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#" >
          <img src="https://avatars0.githubusercontent.com/u/14647700?s=460&u=18119ff02309fb80ba5d8b0cc1b858b37429fd5b&v=4" alt="Paulo Bruny Lima" />
          <div>
            <strong>pbruny/pbruny.github.io</strong>
            <p>My personal repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>

    </>
  )
}

export default Dashboard
