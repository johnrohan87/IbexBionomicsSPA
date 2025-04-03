import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import { foodDeliveryTheme } from 'common/theme/foodDelivery';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/FoodDelivery/foodDelivery.style';

import Navbar from '../containers/FoodDelivery/Navbar';
import Testimonials from '../containers/FoodDelivery/Testimonials';
import Banner from '../containers/FoodDelivery/Banner';
import AvailableRestaurants from '../containers/FoodDelivery/AvailableRestaurants';
import PopularCategory from '../containers/FoodDelivery/PopularCategory';
import HowWorks from '../containers/FoodDelivery/HowWorks';
import ProductDelivery from '../containers/FoodDelivery/ProductDelivery';
import QualityFeatures from '../containers/FoodDelivery/QualityFeatures';
import Clients from '../containers/FoodDelivery/Clients';
import DownloadApp from '../containers/FoodDelivery/DownloadApp';
import Gallery from '../containers/FoodDelivery/Gallery';
import CallToAction from '../containers/FoodDelivery/CallToAction';
import Footer from '../containers/FoodDelivery/Footer';
import Seo from '../components/seo';

const FoodDelivery = () => {
  return (
    <ThemeProvider theme={foodDeliveryTheme}>
      <Fragment>
        <Seo title="Food Delivery | A react Gatsby landing page" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <AvailableRestaurants />
          <PopularCategory />
          <HowWorks />
          <ProductDelivery />
          <QualityFeatures />
          <Clients />
          <Testimonials />
          <DownloadApp />
          <Gallery />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default FoodDelivery;
