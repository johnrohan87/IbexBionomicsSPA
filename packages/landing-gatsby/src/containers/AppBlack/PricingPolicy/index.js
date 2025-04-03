import React from 'react'
import Box from 'common/components/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Button from 'common/components/Button'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import Text from 'common/components/Text'
import Container from 'common/components/UI/Container'
import { useState } from 'react'
import Icon from 'react-icons-kit'
import { chevronRight } from 'react-icons-kit/fa/chevronRight'

import Section, {
  ReactSlick,
  SectionHeading,
  PricingCard,
  ButtonGroup,
} from './pricingPolicy.style'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const PricingPolicy = () => {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        pricing {
          title
          monthly {
            id
            title
            description
            suggested
            price
            iconBlack {
              publicURL
            }
            iconWhite {
              publicURL
            }
          }

          annualy {
            id
            title
            description
            suggested
            price
            iconBlack {
              publicURL
            }
            iconWhite {
              publicURL
            }
          }
        }
      }
    }
  `)

  const { monthly, annualy } = Data.appBlackJson.pricing
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  })

  const handlePricingPlan = (plan) => {
    if (plan === 'annualy') {
      setState({
        ...state,
        active: 'annualy',
        pricingPlan: annualy,
      })
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      })
    }
  }

  const [activePriceCard, setActivePriceCard] = useState(
    state.pricingPlan[1].title
  )

  return (
    <Section id='testimonials'>
      <Container width='75%'>
        <SectionHeading>
          <Heading
            content='Meet our awesome pricing plan'
            className='section-title'
          />
        </SectionHeading>
        <ButtonGroup>
          <button
            className={state.active === 'monthly' ? 'active' : ''}
            type='button'
            onClick={() => handlePricingPlan('monthly')}
          >
            Monthly Plan
          </button>
          <button
            className={state.active === 'annualy' ? 'active' : ''}
            type='button'
            onClick={() => handlePricingPlan('annualy')}
          >
            Annual Plan
          </button>
        </ButtonGroup>
        <ReactSlick {...settings}>
          {state.pricingPlan.map((item) => (
            <PricingCard
              key={`${state.active}-card--key${item.id}`}
              className={activePriceCard === item.title ? 'card-black' : ''}
              onMouseEnter={() =>
                typeof window !== 'undefined' &&
                window.innerWidth > 649 &&
                setActivePriceCard(item.title)
              }
            >
              <strong className='price'>${item.price}</strong>
              <Heading as='h3' content={item.title} className='title' />
              <Text content={item.description} className='description' />
              <Box className='image icon-white'>
                <Image src={item.iconWhite.publicURL} alt={item.title} />
              </Box>
              <Box className='image icon-black'>
                <Image src={item.iconBlack.publicURL} alt={item.title} />
              </Box>
              <Button title='Start 6 month trial' />
              <Box className='link'>
                <span className='link-text'>What’s include</span>
                <Icon icon={chevronRight} className='icon' size={10} />
              </Box>
            </PricingCard>
          ))}
        </ReactSlick>
      </Container>
    </Section>
  )
}

export default PricingPolicy
