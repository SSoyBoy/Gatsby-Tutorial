import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'

const images = () => {
  return (
    <Wraper>
      <article>
        <h4>constraned / default</h4>
        <StaticImage src='../assets/images/recipe-1.jpeg' alt='food' height={400} placeholder="tracedSVG"
                    layout='constrained' className='example-img' as='section'
        /> 
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage src='../assets/images/recipe-1.jpeg' alt='food' height={400} placeholder="blurred"
                    layout='fixed' width={200} className='example-img' as='div'
        /> 
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage src='../assets/images/recipe-1.jpeg' alt='food' height={400} placeholder="dominantColor"
                    layout='fullWidth' className='example-img' as='article'
        /> 
      </article>
    </Wraper>
  )
}

const Wraper = styled.section`
  width: 70vh;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article{
    border: 2px solid red;
  }
  .example-img{
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img{
      height: 200px;
    }
  }
`

export default images
