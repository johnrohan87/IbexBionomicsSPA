import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import MarketingWrapper from './marketing.styles';
import arrowPrimary from 'common/assets/image/agencyClassic/arrow-primary.svg';
import Box from 'common/components/Box';

const MarketingSection = () => {
	const Data = useStaticQuery(graphql`
		query {
			agencyClassicJson {
				marketing {
					image {
						publicURL
					}
					date
					title
				}
			}
		}
	`);

	return (
		<Fragment>
			<MarketingWrapper>
				<Container>
					<Fade up delay={100}>
						<Heading
							className="section_header"
							content="Resources to give you the information about marketing"
						/>
						<Box className="row">
							<Box className="main_ad">
								{Data.agencyClassicJson.marketing.map((item, index) =>
									index === 0 ? (
										<Box className="main_ad" key={index}>
											<img src={item.image.publicURL} alt="marketing image" />
											<div className="content">
												<Text content={item.date} />
												<Heading content={item.title} />
												<div className="learn-more hover_links">
													<Button
														className="text"
														variant="textButton"
														title="Learn More"
													/>
													<Image src={arrowPrimary} alt="play" />
												</div>
											</div>
										</Box>
									) : null
								)}
							</Box>

							<Box className="related_ads">
								{Data.agencyClassicJson.marketing.map((item, index) =>
									index !== 0 ? (
										<Box className="single_ad" key={index}>
											<img
												src={item.image.publicURL}
												className="ad_banner"
												alt="marketing image"
											/>
											<div className="content">
												<Text content={item.date} />
												<Heading content={item.title} />
												<div className="learn-more hover_links">
													<Button
														className="text"
														variant="textButton"
														title="Learn More"
													/>
													<Image src={arrowPrimary} alt="play" />
												</div>
											</div>
										</Box>
									) : null
								)}
							</Box>
						</Box>
					</Fade>
				</Container>
			</MarketingWrapper>
		</Fragment>
	);
};

export default MarketingSection;
