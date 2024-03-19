import React from 'react'
import Layout from '../components/Layout'
import { graphql,Link } from 'gatsby'
import setupTags from '../Utils/setupTags'
import slugify from 'slugify'
import SEO from "../components/SEO"

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>   
      <SEO title="Tags"/>
        <main className='page'>
          <section className='tags-page'>
            {newTags.map((tag,i)=>{
              const [text,value] = tag
              const slug = slugify(text,{lower:true})
              return <Link to={`/tags/${slug}`} key={i} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            })}
          </section>
        </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
