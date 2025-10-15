import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import ReturnAndRefund from "../pages/ReturnAndRefund";
import CookiePolicy from "../pages/CookiePolicy";
import HomePageLayout from "../pages/HomePageLayout";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import CareerGuidance from "../pages/CareerGuidance";
import OnlineEducation from "../pages/OnlineEducation";
import BVOC from "../pages/BVOC";
import DVOC from "../pages/DVOC";
import MVOC from "../pages/MVOC";
import Diploma from "../pages/Diploma";
import SkillCourses from "../pages/SkillCourses";
import Upgrad from "../pages/Upgrad";
import Immigration_Canada from "../components/Immigration_Canada";
import AllTestimonials from "../pages/Testomonials";
import FAQAccordion from "../pages/FrequentlyAskedQuestion";
const Router_Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePageLayout />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/return-and-refund" element={<ReturnAndRefund />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/career-guidance" element={<CareerGuidance />} />
      <Route
        path="blog/onlineEducation/read-more"
        element={<OnlineEducation />}
      />
      <Route path="/bachelor-of-vocation-dvoc" element={<BVOC />} />
      <Route path="/diploma-of-vocation-dvoc" element={<DVOC />} />
      <Route path="/master-of-vocation-mvoc" element={<MVOC />} />
      <Route path="/diploma" element={<Diploma />} />
      <Route path="/skill-course" element={<SkillCourses />} />
      <Route path="/upgrad" element={<Upgrad />} />
      <Route path="/Immigration_Canada" element={<Immigration_Canada />} />
      <Route path="/testimonials" element={<AllTestimonials />} />
      <Route path="/faqs" element={<FAQAccordion />} />
      <Route path="/contact" element={<ContactUs />} />
    </Route>
  )
);
export default Router_Router;
