import styled from 'styled-components'
import Loader from './Loader'
import { useEffect, useState } from 'react'

function Card() {
  const [quote,setQuote] = useState({})

  useEffect(async () => {
    getQuote()
  },[])

  const getQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuote(quote => ({
        ...quote,
        ...data
      }))
    } catch (error) {
      throw Error(error)
    }
  }

  if (quote.length > 0) {
    return (
      <StyledCard>
        <p className='author'>{ quote.author }</p>
        <p className='quote'>{ quote.content }</p>
        <button onClick={getQuote}>new quote</button>
      </StyledCard>
    )
  } else {
    return (
      <Loader />
    )
  }
}

//styled-components
const StyledCard = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 350px;
    height: 200px;
    background: #232323;
    border-radius: 10px;
    padding: 20px;

    .author {
      font-size: 12px;
      color: #4B5159;
      font-weight: 600;
    }

    .quote {
      margin-top: 5px;
      color: #C7CDD7;
      font-style: italic;
      font-size: 14px;
    }

    button {
      position: absolute;
      bottom: 20px;
      right: 20px;
      padding: 7px 12px;
      border: none;
      outline: none;
      border-radius: 5px;
      background: #3682F4;
      color: #FFFFFF;
      text-transform: uppercase;
      font-size: 12px;
      cursor: pointer;
    }

    @media (max-width: 480px) {
      width: 80%;
    }
`

export default Card