import React from 'react';
import { Link } from 'gatsby';
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from './pages.style';

const PagesDropdown = () => {
  const pages = [
    { path: '/app', name: 'App' },
    { path: '/appmodern', name: 'App Modern' },
    { path: '/appclassic', name: 'App Classic' },
    { path: '/appminimal', name: 'App Minimal' },
    { path: '/saas', name: 'SaaS' },
    { path: '/saasmodern', name: 'SaaS Modern' },
    { path: '/saasclassic', name: 'SaaS Classic' },
    { path: '/saasminimal', name: 'SaaS Minimal' },
    { path: '/saasminimal2', name: 'SaaS Minimal 2' },
    { path: '/hosting', name: 'Hosting' },
    { path: '/hostingmodern', name: 'Hosting Modern' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/ride', name: 'Ride' },
    { path: '/crypto', name: 'Crypto' },
    { path: '/cryptomodern', name: 'Crypto Modern' },
    { path: '/charity', name: 'Charity' },
    { path: '/interior', name: 'Interior' },
    { path: '/agency', name: 'Agency' },
    { path: '/agencymodern', name: 'Agency Modern' },
    { path: '/agencydigital', name: 'Agency Digital' },
    { path: '/fooddelivery', name: 'Food Delivery' },
    { path: '/saascreative', name: 'SaaS Creative' },
    { path: '/saasappcreative', name: 'SaaS App Creative' },
    { path: '/webapp', name: 'Web App' },
    { path: '/webappminimal', name: 'Web App Minimal' },
    { path: '/webappcreative', name: 'Web App Creative' },
  ];

  return (
    <DropdownContainer>
      <DropdownButton>Pages</DropdownButton>
      <DropdownContent>
        {pages.map((page, index) => (
          <DropdownItem key={index} as={Link} to={page.path}>
            {page.name}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default PagesDropdown;