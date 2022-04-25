import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const GenreTags = () => {
  const {
    example: { data },
  } = useStaticQuery(query)

  const filteredData = [
    ...new Set(
      data.map(item => {
        return item.genre
      })
    ),
  ]
  console.log(filteredData)

  return (
    <Wrapper>
      <section className="grid">
        <div className="container-underline">
          <h2>Genres</h2>
          <div className="underline"></div>
        </div>
        {filteredData.map(genre => {
          return <button className="btn">{genre}</button>
        })}
      </section>
    </Wrapper>
  )
}

export const query = graphql`
  {
    example {
      data {
        genre
      }
    }
  }
`

const Wrapper = styled.section`
  h2 {
    grid-column: 1 / 4;
    margin: 1.5rem auto 0;
  }
  .underline {
    width: 17vw;
    height: 1px;
    background-color: white;
  }
`

export default GenreTags