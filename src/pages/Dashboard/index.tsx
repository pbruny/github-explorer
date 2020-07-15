import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Header, Form, Repositories, Error } from './style'
import api from '../../services/api'

interface Repository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localData = localStorage.getItem('@GithubExpolorer:repositories')

    if(localData) {
      return (JSON.parse(localData))
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      '@GithubExpolorer:repositories', 
      JSON.stringify(repositories)
    )
  }, [repositories])

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if(!newRepo) {
      setErrorMessage('Digite um autor/repositório para pesquisar')
      return
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`)

      const repository = response.data

      setRepositories([...repositories, repository])
      setNewRepo('')
      setErrorMessage('')      
    } catch (err) {
      setErrorMessage('Repositório não encontrado')
    }

    
  }

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer Logo" className="logo" />
        <Title>Explore repositórios no Github</Title>
      </Header>

      <Form hasError={Boolean(errorMessage)} onSubmit={handleAddRepository} >
          <input 
            type="text" placeholder="Digite o autor/nome do repositório" 
            value={newRepo}
            onChange={e => setNewRepo(e.target.value)}
          />
          <button type="submit" >Pesquisar</button>
      </Form>

      {errorMessage && <Error>{errorMessage}</Error>}

      <Repositories >
        {repositories.map(repository => (
          <Link href="/repository" key={repository.full_name} to={`repository/${repository.full_name}`} >
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
