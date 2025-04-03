import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
	BannerContent,
	BannerImage,
	ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/agencyClassic/banner/heroImage.png';
import playIcon from 'common/assets/image/agencyClassic/banner/play.png';

const Banner = () => {
	return (
		<BannerWrapper id="banner_section">
			<Container>
				<BannerContent>
					<Fade up delay={100}>
						<Heading
							as="h1"
							content="We built to make your life easier & smarter"
						/>
					</Fade>
					<Fade up delay={200}>
						<Text content="We are one-man design studio founded by Dash & Andri. We specialise in web design and development using Webflow & other CMS." />
					</Fade>
					<Fade up delay={300}>
						<ButtonGroup>
							<Button
								className="primary primary_hover"
								title="Read our Story"
							/>
							<div className="playBtn">
								<Image src={playIcon} alt="play" />
								<Button
									className="text"
									variant="textButton"
									title="Our Interviews"
								/>
							</div>
						</ButtonGroup>
					</Fade>
				</BannerContent>
				<BannerImage className="heroImg">
					<Fade up delay={100}>
						<Image src={bannerImg} alt="Banner" />
					</Fade>
				</BannerImage>
			</Container>
		</BannerWrapper>
	);
};

export default Banner;
