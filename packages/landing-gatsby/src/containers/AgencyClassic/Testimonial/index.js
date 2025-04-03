import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import TestimonialSectionWrapper, {
	TextWrapper,
	ImageWrapper,
} from './testimonialSection.style';

import arrowRight from 'common/assets/image/agencyClassic/arrow-right.svg';
import { Fade } from 'react-reveal';

const TestimonialSection = ({
	sectionHeader,
	sectionTitle,
	sectionSubTitle,
	btnWrapperStyle,
	commentStyle,
	nameStyle,
	btnStyle,
	designationStyle,
}) => {
	const Data = useStaticQuery(graphql`
		query {
			agencyClassicJson {
				testimonials {
					title
					review
					name
					designation
					avatar {
						publicURL
					}
					brand {
						publicURL
					}
				}
			}
		}
	`);

	const glideOptions = {
		type: 'carousel',
		autoplay: 5000,
		perView: 1,
		animationDuration: 700,
	};

	return (
		<TestimonialSectionWrapper id="testimonial_section">
			<Container>
				<Fade delay={100}>
					<Heading
						content="What our client say about us"
						className="section_heading"
						{...sectionTitle}
					/>
					<GlideCarousel
						width={1170}
						options={glideOptions}
						buttonWrapperStyle={btnWrapperStyle}
						nextButton={
							<Button
								icon={<i className="flaticon-next next_arrow" />}
								aria-label="Next"
								variant="textButton"
								{...btnStyle}
							/>
						}
						prevButton={
							<Button
								icon={<i className="flaticon-left-arrow  prev_arrow" />}
								aria-label="Prev"
								variant="textButton"
								{...btnStyle}
							/>
						}
					>
						<Fragment>
							{Data.agencyClassicJson.testimonials.map((item, index) => (
								<GlideSlide key={index}>
									<Fragment>
										<TextWrapper>
											<Text content={item.review} {...commentStyle} />
											<Heading content={item.name} {...nameStyle} />
											<Heading
												className="designation"
												content={item.designation}
												{...designationStyle}
											/>
											<Image src={item.brand.publicURL} alt="Brand Logo" />
										</TextWrapper>
										<ImageWrapper>
											<Image src={item.avatar.publicURL} alt="Client Image" />
										</ImageWrapper>
									</Fragment>
								</GlideSlide>
							))}
						</Fragment>
					</GlideCarousel>

					<div className="read_more">
						Read the GeekWire case study
						<Image src={arrowRight} alt="Arrow right" />
					</div>
				</Fade>
			</Container>
		</TestimonialSectionWrapper>
	);
};

export default TestimonialSection;
