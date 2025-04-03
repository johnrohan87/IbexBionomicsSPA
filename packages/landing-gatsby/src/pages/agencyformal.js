import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/agencyFormal";
import { ResetCSS } from "common/assets/css/style";
import {
	GlobalStyle,
	ContentWrapper,
} from "containers/AgencyFormal/agencyFormal.style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/AgencyFormal/Navbar";
import Banner from "containers/AgencyFormal/Banner";
import Services from "containers/AgencyFormal/Services";
import PremiumFeature from "containers/AgencyFormal/PremiumFeature";
import UltimateFeature from "containers/AgencyFormal/UltimateFeature";
import Testimonial from "containers/AgencyFormal/Testimonial";
import Pricing from "containers/AgencyFormal/Pricing";
import News from "containers/AgencyFormal/News";
import Footer from "containers/AgencyFormal/Footer";
import Seo from "components/seo";

const AgencyFormal = () => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Seo title="AgencyFormal" />
				<ResetCSS />
				<GlobalStyle />
				<ContentWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
						<DrawerProvider>
							<Navbar />
						</DrawerProvider>
					</Sticky>
					<Banner />
					<Services />
					<PremiumFeature />
					<UltimateFeature />
					<Testimonial />
					<Pricing />
					<News />
					<Footer />
				</ContentWrapper>
			</Fragment>
		</ThemeProvider>
	);
};
export default AgencyFormal;
