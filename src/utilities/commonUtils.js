import Home from '../PortofolioContainer/Home/Home'
import AboutUs from '../PortofolioContainer/AboutUs/AboutUs'
import Careers from '../PortofolioContainer/Careers/Careers'
import Service from '../PortofolioContainer/Services/Service'
import Blog from '../PortofolioContainer/Blog/Blog'
import ContactUs from '../PortofolioContainer/ContactUs/ContactUs'

export const TOTAL_SCREENS = [
  {
    component: Home,
  },
  
  {
    screen_name: "About Us",
    component: AboutUs,
  },
  {
    screen_name: "Careers",
    component: Careers,
  },
  {
    screen_name: "Service",
    component: Service,
  },
  {
    screen_name: "Blog",
    component: Blog,
  },
  {
    screen_name: "Contact Us",
    component: ContactUs
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
