import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Icon } from 'react-icons-kit'
import { plusCircled } from 'react-icons-kit/ionicons/plusCircled'
import { minusCircled } from 'react-icons-kit/ionicons/minusCircled'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Container from 'common/components/UI/Container'
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion'
import FaqSection, { SectionHeader } from './faq.style'

const Faq = () => {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        faq {
          title
          faqs {
            id
            question
            answer
          }
        }
      }
    }
  `)

  const { title, faqs } = Data.appBlackJson.faq
  return (
    <FaqSection id='faq'>
      <Container>
        <SectionHeader>
          <Heading content={title} className='section-title' />
        </SectionHeader>
        <Accordion>
          <Fragment>
            {faqs.map((item) => (
              <AccordionItem key={`accordion-key--${item.id}`}>
                <Fragment>
                  <AccordionTitle>
                    <Fragment>
                      <Heading
                        as='h3'
                        content={item.question}
                        className='faq-question'
                      />
                      <IconWrapper className='icon-wrapper'>
                        <OpenIcon>
                          <Icon icon={minusCircled} size={20} />
                        </OpenIcon>
                        <CloseIcon>
                          <Icon icon={plusCircled} size={20} />
                        </CloseIcon>
                      </IconWrapper>
                    </Fragment>
                  </AccordionTitle>
                  <AccordionBody>
                    <Text content={item.answer} className='faq-answer' />
                  </AccordionBody>
                </Fragment>
              </AccordionItem>
            ))}
          </Fragment>
        </Accordion>
      </Container>
    </FaqSection>
  )
}

export default Faq
