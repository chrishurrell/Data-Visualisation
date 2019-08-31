import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import ContentSection from "./../../components/ContentSection";
import ContentCardsSection from "./../../components/ContentCardsSection";
import ClientsSection from "./../../components/ClientsSection";
import NewsletterSection2 from "./../../components/NewsletterSection2";
import StatsSection from "./../../components/StatsSection";
import CtaSection from "./../../components/CtaSection";
import TestimonialsSection from "./../../components/TestimonialsSection";
import TeamBiosSection from "./../../components/TeamBiosSection";
import FaqSection from "./../../components/FaqSection";
import PricingSection from "./../../components/PricingSection";
import Announcement from "./../../components/Announcement";
import ContactPage from "./../contact";
import ProductsPage from "./../products";
import ServicesPage from "./../services";
import FeaturesSection3 from "./../../components/FeaturesSection3";
import FeedPage from "./../feed";
import SignupPage from "./../signup";
import LoginPage from "./../login";
import ForgotpassPage from "./../forgotpass";
import UpdatepassPage from "./../updatepass";
import { Switch, Route, Router } from "./../../util/router.js";
import Footer from "./../../components/Footer";
import Footer2 from "./../../components/Footer2";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <section className="column" title="Test">
          <Navbar
            color="white"
            spaced={true}
            logo="https://uploads.divjoy.com/logo.svg"
          />
          <section className="column">
            <Switch>
              <Route exact path="/" component={HomePage} />

              <Route exact path="/contact" component={ContactPage} />

              <Route exact path="/products" component={ProductsPage} />

              <Route exact path="/services" component={ServicesPage} />

              <Route exact path="/feed" component={FeedPage} />

              <Route exact path="/signup" component={SignupPage} />

              <Route exact path="/login" component={LoginPage} />

              <Route exact path="/forgotpass" component={ForgotpassPage} />

              <Route exact path="/updatepass" component={UpdatepassPage} />

              <Route
                component={({ location }) => {
                  return (
                    <div
                      style={{
                        padding: "50px",
                        width: "100%",
                        textAlign: "center"
                      }}
                    >
                      The page <code>{location.pathname}</code> could not be
                      found.
                    </div>
                  );
                }}
              />
            </Switch>
          </section>
          <Footer
            color="white"
            size="medium"
            logo="https://uploads.divjoy.com/logo.svg"
            description="A short description of what you do here"
            copyright="© 2019 Company"
          />
          <Footer2
            color="white"
            size="normal"
            logo="https://uploads.divjoy.com/logo.svg"
            copyright="© 2019 Company"
          />
        </section>
      </Router>
    </ProvideAuth>
  );
}

export default App;
