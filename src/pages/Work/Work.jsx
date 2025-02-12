import React, { useEffect } from "react";
import "./Work.css";
import { Link } from "react-router";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Cursor from "../../components/Cursor/Cursor";
import Transition from "../../components/Transition/Transition";
import BackButton from "../../components/BackButton/BackButton";
import BackToTopButton from "../../components/BackButton/BackToTopButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <ReactLenis root>
      <Cursor />
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1>Bespoke Financial Strategies by Context.Partners</h1>
          </div>
        </section>

        <section className="sp-banner">
          <img src="/work/work1.jpg" alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Context.Partners</p>

              <div className="sp-tags">
                <p>Strategic Advisory</p>
                <p>Risk Mitigation</p>
                <p>Capital Structuring</p>
                <p>International Transactions</p>
              </div>

              <div className="sp-date">
                <p>Global Expertise</p>
              </div>

              <div className="sp-link">
                <Link to="/">
                  <button>
                    <div className="icon">
                      <IoIosArrowRoundForward size={16} />
                    </div>
                    Explore Our Approach
                  </button>
                </Link>
              </div>
            </div>
            <div className="sp-info-desc">
              <p>
                Context.Partners specializes in custom-crafted bespoke financial
                and operational solutions that prioritize value optimization and
                risk mitigation—all grounded in over a century of combined
                experience across financial, operational, legal, and
                international sectors.
              </p>
              <div className="spacer"></div>
              <p>
                Our client engagements are often extraordinary, reflecting the
                unique circumstances and exceptional nature of those we serve.
                We take great pride in maintaining the utmost discretion for our
                clients, which include sovereign wealth funds,
                ultra-high-net-worth family offices, multinational corporations,
                and leading financial institutions.
              </p>
            </div>
          </div>
        </section>

        <section className="showreel">
          <VideoPlayer />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Our Approach</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Each engagement is a testament to our expertise in finance, law,
                and corporate strategy. From pre-bankruptcy planning to
                regulatory compliance, we navigate complex scenarios with
                precision.
              </p>
              <div className="spacer"></div>
              <p>
                Our ability to source and structure capital on favorable terms
                ensures rapid, predictable outcomes that position our clients
                for success.
              </p>
              <div className="spacer"></div>
              <p>
                Our confidential assignments exemplify the trust our clients
                place in us. We pride ourselves on our knowledge and research
                capabilities to understand the relevant industries and markets,
                based on our collective experience, while being able to think
                outside-the-box to craft innovative custom solutions.
              </p>
              <div className="spacer"></div>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/work/work2.jpg" alt="" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Tailored Solutions</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                We arrange tailored transactions that align capital with
                opportunity on a risk-adjusted basis, bring disruptive products
                and technologies to market, and discretely negotiate complex
                acquisitions and dispositions across both domestic and
                international landscapes.
              </p>
              <div className="spacer"></div>
              <p>
                Moreover, we handle intricate financial, corporate, and real
                estate transactions with the highest level of confidentiality.
                Our expertise extends to managing special situations and
                sensitive crises, including pre- and post-bankruptcy planning
                and compliance issues that could jeopardize our clients'
                reputations and freedoms.
              </p>
              <div className="spacer"></div>
              <p>
                Our team is comprised of professionals with backgrounds from
                prestigious international law firms and top-tier investment
                banking platforms. While not every assignment may appear
                extraordinary at first glance, we regard the privilege of
                partnering with each client as a truly exceptional experience,
                committed to providing unparalleled privacy and discretion in
                every aspect of our representation.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/work/work3.jpg" alt="" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>Key Expertise</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Our Specialties</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Strategic Financial Structuring, Risk Mitigation, Corporate
                    Transactions
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Client Sectors</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Family Offices, Sovereign Wealth Funds, Institutional
                    Investors
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Leadership</p>
                </div>
                <div className="credits-copy">
                  <p>Advisors from Top-Tier Law Firms & Investment Banks</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Advisors from Top-Tier Law Firms & Investment Banks</p>
                </div>
                <div className="credits-copy">
                  <p>Confidentiality, Integrity, Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/projects/project4.jpg" alt="" />
          </div>

          <div className="container">
            <div className="next-project-header">
              <BackToTopButton />
              <div className="sp-info-title">
                <h2>Back to Top</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
