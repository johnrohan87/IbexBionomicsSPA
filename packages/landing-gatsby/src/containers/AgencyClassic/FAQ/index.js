import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import {
	Accordion,
	AccordionItem,
	AccordionTitle,
	AccordionBody,
	IconWrapper,
	OpenIcon,
	CloseIcon,
} from 'common/components/Accordion';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './faqSection.style';
import { Fade } from 'react-reveal';

const FaqSection = ({
	sectionHeader,
	sectionTitle,
	titleStyle,
	descriptionStyle,
}) => {
	const Data = useStaticQuery(graphql`
		query {
			agencyClassicJson {
				faq {
					expend
					title
					description
				}
			}
		}
	`);

	return (
		<FaqSectionWrapper>
			<Container>
				<Fade up delay={100}>
					<Box {...sectionHeader}>
						<Heading
							content="Frequently Ask Question"
							className="section_heading"
							{...sectionTitle}
						/>
					</Box>
					<Box className="row">
						<Accordion>
							<Fragment>
								{Data.agencyClassicJson.faq.map((faqItem, index) => (
									<AccordionItem key={index}>
										<Fragment>
											<AccordionTitle>
												<Fragment>
													<div className="accordion_title">
														{index < 10 ? (
															<span>0{index + 1}.</span>
														) : (
															<span>{index + 1}.</span>
														)}
														<Heading content={faqItem.title} {...titleStyle} />
													</div>
													<IconWrapper className="icon_wrapper">
														<OpenIcon className="open-icon">
															<Icon icon={minus} size={18} />
														</OpenIcon>
														<CloseIcon className="close-icon">
															<Icon icon={plus} size={18} />
														</CloseIcon>
													</IconWrapper>
												</Fragment>
											</AccordionTitle>
											<AccordionBody>
												<Text
													content={faqItem.description}
													key={index}
													{...descriptionStyle}
												/>
											</AccordionBody>
										</Fragment>
									</AccordionItem>
								))}
							</Fragment>
						</Accordion>
					</Box>
				</Fade>
			</Container>
		</FaqSectionWrapper>
	);
};

// FaqSection style props
FaqSection.propTypes = {
	sectionHeader: PropTypes.object,
	row: PropTypes.object,
	col: PropTypes.object,
	sectionTitle: PropTypes.object,
	sectionSubTitle: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
	// section header default style
	sectionHeader: {
		mb: ['40px', '56px'],
	},
	// sub section default style
	sectionSubTitle: {
		as: 'span',
		display: 'block',
		textAlign: 'center',
		fontSize: '14px',
		letterSpacing: '0.15em',
		fontWeight: '700',
		color: '#10ac84',
		mb: '10px',
	},
	// section title default style
	sectionTitle: {
		textAlign: 'center',
		fontSize: ['20px', '24px'],
		fontWeight: '400',
		color: '#0f2137',
		letterSpacing: '-0.025em',
		mb: '0',
	},
	// accordion title default style
	titleStyle: {
		fontSize: ['16px', '19px'],
		fontWeight: '400',
		color: '#0f2137',
		letterSpacing: '-0.025em',
		mb: '0',
	},
	// accordion description default style
	descriptionStyle: {
		fontSize: '15px',
		color: '#343d48cc',
		lineHeight: '1.75',
		mb: '0',
	},
};

export default FaqSection;
