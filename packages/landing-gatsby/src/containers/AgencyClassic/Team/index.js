import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import TeamWrapper, { TeamWrapperBg } from './team.style';
import arrow from 'common/assets/image/agencyClassic/arrow-right-fill.svg';
import videoConf from 'common/assets/image/agencyClassic/team/conference.png';
import Box from 'common/components/Box';

const TeamSection = () => {
	const Data = useStaticQuery(graphql`
		query {
			agencyClassicJson {
				team {
					title
					description
				}
			}
		}
	`);

	return (
		<Fragment>
			<TeamWrapper>
				<Container width="1170px">
					<Fade up delay={100}>
						<Heading
							className="section_header"
							content="We believe in remote job with whole team"
						/>
					</Fade>
				</Container>
			</TeamWrapper>

			<TeamWrapperBg>
				<Container width="1170px">
					<Fade up delay={100}>
						<img src={videoConf} alt="Team Meeting" className="meeting_ss" />
					</Fade>
					<Fade up delay={100}>
						<Box className="culture-row row">
							<Box className="team-col">
								{Data.agencyClassicJson.team.map((team, index) => (
									<Box className="culture" key={index}>
										<Image src={arrow} alt="Arrow" />
										<div className="culture_content">
											<Heading content={team.title} />
											<Text
												content={team.description}
												className="description"
											/>
										</div>
									</Box>
								))}
							</Box>
						</Box>
					</Fade>
					<Fade up delay={100}>
						<div className="join_us">
							<Heading content="Are you ready to join with us? We have multiple vacancies" />
							<Button
								className="primary primary_hover"
								title="Read our Story"
							/>
						</div>
					</Fade>
				</Container>
			</TeamWrapperBg>
		</Fragment>
	);
};

export default TeamSection;
