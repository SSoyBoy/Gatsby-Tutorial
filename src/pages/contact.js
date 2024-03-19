import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"


const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>   
      <SEO title="Contact"/>
        <main className='page'>
          <section className='contact-page'>
            <article className='contact-info'>
              <h3>Want To Get In Touch?</h3>
              <p>
                Cung cấp giải pháp giải quyết những vấn đề nhức nhối của khách thuê và chủ nhà.
                Với giao diện đơn giản thân thiện dễ sử dụng.
              </p>
              <p>
                A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
              </p>
              <p>
                I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it.
              </p>
            </article>
            <article>
              <form className='form contact-form' action='https://formspree.io/f/xnqlagaa' method='POST'>
                <div className='form-row'>
                  <label htmlFor='name'>Your name</label>
                  <input type="text" name="name" id="name"></input>
                </div>
                <div className='form-row'>
                  <label htmlFor='email'>Your email</label>
                  <input type="text" name="email" id="email"></input>
                </div>
                <div className='form-row'>
                  <label htmlFor='message'>Message</label>
                  <textarea name='message' id='message'></textarea>
                </div>
                <button type='submit' className='btn block'>Submit</button>
              </form>
            </article>
          </section>
          <section className='featured-recipes'>
            <h5>Look at this Awesomesouce!</h5>
            <RecipesList recipes={recipes}/>
          </section>
        </main>
    </Layout>
  )
}

export const query = graphql`
  {
  allContentfulRecipe (
    sort: { fields : title, order: ASC}
    filter: { featured: { eq : true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder:BLURRED)
        }
      }
  }
}
`

export default Contact
