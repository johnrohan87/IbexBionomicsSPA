import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';
import { Figure, Grid, SectionHeading } from './everNeed.style';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return isTablet ? children : null
}


const EverNeed = (props) => {
  const data = useStaticQuery(graphql`
    query {
			appCreative2Json {
        everNeed {
          background
          icon {
            publicURL
          }
          id
          title
        }
      }
    }
  `);

  const { appCreative2Json: everNeed } = data;

  let items = [...everNeed?.everNeed];
  let contents = [...Array(Math.ceil(items?.length / 3))]?.map((el, i) => items?.slice(i * 3, (i + 1) * 3));

  return (
    <div {...props}>
        <SectionHeading>
            <Heading content="It’s everything you’ll ever need" />
        </SectionHeading>
				<Desktop>
					{/* Upper 991 */}
					{contents?.length > 0 ?
					<Grid>
						<Fade up>
						{contents?.map((items, index) => {
								return (
										<div className='icon-box-items' key={index}>
										{items?.map((data, index) => {
												return (
                          <Box className="icon-box-item" key={index} style={{"--backgroundColor": data?.background}}>
                              <Figure>
                                <Image src={data?.icon?.publicURL} alt={data?.title} />
                              </Figure>
                              {data?.title}
                          </Box>
												)
										})}
										</div>
								)
						})}
						</Fade>
					</Grid>
					:
					"" // Post not found
					}
				</Desktop>

				<Tablet>
					{/* Under 991 */}
					{everNeed?.everNeed?.length > 0 ?
					<Grid>
						<Fade up>
						{everNeed?.everNeed?.map((item, index) => {
								return (
									<div className='icon-box-items' key={index}>
                    <Box className="icon-box-item" style={{"--backgroundColor": item?.background}}>
                        <Figure>
                          <Image src={item?.icon?.publicURL} alt={item?.title} />
                        </Figure>
                        {item?.title}
                    </Box>
									</div>
								)
						})}
						</Fade>
					</Grid>
					:
					""
					}
				</Tablet>
    </div>
  );
};

export default EverNeed;
