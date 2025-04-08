import React, { useEffect, useRef, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'common/components/GatsbyImage'
import ScrollableStickyWrapper, {
  MockupImageWrapper,
  ScreenImageWrapper,
  Mockup,
  MockupFrame,
} from './scrollableSticky.style'
// import { Fade } from 'react-reveal'

const ScrollableSticky = ({ children }) => {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        BANNER_DATA {
          screenImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          title
        }

        SCROLLABLE_STICKY_DATA {
          mockupImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `)

  const { screenImage, title } = Data.appBlackJson.BANNER_DATA
  const { mockupImage } = Data.appBlackJson.SCROLLABLE_STICKY_DATA
  const [img, setImg] = useState(screenImage)

  const prevImgRef = useRef()

  useEffect(() => {
    prevImgRef.current = img
  }, [img])

  return (
    <ScrollableStickyWrapper>
      <MockupImageWrapper>
        <Mockup>
          <MockupFrame>
            <GatsbyImage
              src={
                (mockupImage !== null) | undefined
                  ? mockupImage.childImageSharp.gatsbyImageData
                  : {}
              }
              alt={title}
            />
          </MockupFrame>

          <ScreenImageWrapper>
            <GatsbyImage
              src={
                (img !== null) | undefined
                  ? img.childImageSharp.gatsbyImageData
                  : {}
              }
              alt={title}
            />
          </ScreenImageWrapper>
        </Mockup>
      </MockupImageWrapper>

      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setImg: setImg })
      )}
    </ScrollableStickyWrapper>
  )
}

export default ScrollableSticky
