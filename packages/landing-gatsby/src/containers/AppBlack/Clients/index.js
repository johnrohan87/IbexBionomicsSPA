import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'common/components/UI/Container'
import Heading from 'common/components/Heading'
import Logo from 'common/components/UIElements/Logo'
import ClientsWrapper, { ImageSlide, ImageSlider } from './clients.style'

const Clients = () => {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        CLIENTS_DATA {
          title

          clients {
            logo {
              publicURL
            }
            id
            name
            link
          }
        }
      }
    }
  `)
  const { title, clients } = Data.appBlackJson.CLIENTS_DATA
  return (
    <ClientsWrapper>
      <Container>
        <Heading as='h2' content={title} className='section-title' />
        <ImageSlider>
          <ImageSlide>
            {clients.map((item) => (
              <Logo
                key={`slide1__key${item.id}`}
                href={item.link}
                logoSrc={item.logo.publicURL}
                title={item.name}
              />
            ))}
          </ImageSlide>
          <ImageSlide>
            {clients.map((item) => (
              <Logo
                key={`slide2__key${item.id}`}
                href={item.link}
                logoSrc={item.logo.publicURL}
                title={item.name}
              />
            ))}
          </ImageSlide>
        </ImageSlider>
      </Container>
    </ClientsWrapper>
  )
}

export default Clients
