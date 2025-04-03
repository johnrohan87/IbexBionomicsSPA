import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/ionicons/checkmark';
import { useMediaQuery } from 'react-responsive';
import SectionWrapper, {
  ButtonGroup, InnerWrapper, PricingArea, PricingCard,
  SectionHeader
} from './pricingPolicy.style';

const PricingPolicy = (props) => {
  const data = useStaticQuery(graphql`
    query {
      appCreative2Json {
        pricing {
          currency
          plans {
            monthly {
              button {
                label
                link
              }
              description
              features {
                id
                text
              }
              id
              period
              price
              title
            }
            yearly {
              button {
                label
                link
              }
              description
              features {
                id
                text
              }
              id
              period
              price
              title
            }
          }
          save
          slogan
          title
        }
      }
    }
  `);

  const { appCreative2Json: pricing } = data;

  const items = pricing?.pricing;

  const { slogan, title, save, currency } = items;
  const keys = Object?.keys(items?.plans || []).slice(0, 2);
  const [state, setState] = useState({
    active: `${keys[0]?.toString()}`,
    pricingPlan: items?.plans[keys[0]],
  });

  const handlePricingPlan = (plan, keys) => {
    const result = keys?.filter(el => el.toLowerCase().indexOf(plan.toLowerCase()) !== -1)

    if (plan?.toLowerCase() === result.toString().toLowerCase()) {
      setState({
        ...state,
        active: `${plan}`,
        pricingPlan: items?.plans[plan],
      })
    }
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 401px)',
  });

  return (
    <SectionWrapper id="pricing" {...props}>
      <Container>
        <SectionHeader>
          <Heading content={slogan} />
          <Text content={title} />
        </SectionHeader>
        {keys?.length ?
        <ButtonGroup>
          <div className='button_groups_outer_wrapper'>
            <div className='button_groups_wrapper'>
              {keys?.map((key, value) => {
                  return (
                    <React.Fragment key={key}>
                      <label className={`switch_button_${value} switch_button ${state?.active === key ? 'checked' : ''}`}>
                        <span>{key?.charAt(0)?.toUpperCase() + key?.slice(1)}</span>
                        <input
                          checked={state?.active === key ? 'checked' : ''}
                          onClick={() => handlePricingPlan(key, keys)}
                          onChange={() => handlePricingPlan(key, keys)}
                          key={key}
                          type="radio"
                          name='pricing'
                        />
                      </label>
                    </React.Fragment>
                  )
              })}
              <div className="switch_outer"><div className="switch_inner"></div></div>
            </div>
            {isDesktop && <div className='promotion_alert_box'>{save}</div>}
          </div>
        </ButtonGroup>
        :
        ""
        }

        <PricingArea>
          <InnerWrapper>
            {state?.pricingPlan?.map((item, index) => (
              <PricingCard key={index}>
                <div className="card-body">
                  <div className="card-header">
                    <Heading as="h3" content={item?.title} />
                    <div className='price'>
                      {item?.price === 0 ?
                      <>
                        <span className='amount'>Free</span>
                      </>
                      :
                      <>
                        <span className='symbol'>{currency}</span>
                        <span className='amount'>{item?.price}</span>
                        <span className='state'>/{item?.period}</span>
                      </>
                      }
                    </div>
                    <Text content={item?.description} />
                  </div>
                  <ul className="feature-list">
                    {item?.features?.map((item, index) => (
                      <li key={index}>
                        <Icon icon={checkmark} /> {item?.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <Link to={item?.button?.link} className="card_button">
                    {item?.button?.label}
                  </Link>
                </div>
              </PricingCard>
            ))}
          </InnerWrapper>
        </PricingArea>
      </Container>
    </SectionWrapper>
  );
};

export default PricingPolicy;
