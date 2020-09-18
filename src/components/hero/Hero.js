import React, { Component } from "react";
import { setupScrollReveal } from "../../assets/js/main.js";
import { Button } from "@material-ui/core";

class Hero extends Component {
  componentDidMount() {
    setupScrollReveal();
  }

  render() {
    const { title, content } = this.props;
    const Illustration = this.props.illustration;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
                <h1 className="hero-title h2-mobile mt-0 is-revealing">
                  {title}
                </h1>
                <p className="hero-paragraph is-revealing">{content}</p>
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  margin: "5px",
                }}
                href="http://eepurl.com/hdwt31"
              >
                Encuentra talento
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  margin: "5px",
                }}
                href="http://bit.ly/portfoliotalent"
              >
                Soy talento
              </Button>
            </div>

            <div className="hero-illustration">
              <Illustration />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
