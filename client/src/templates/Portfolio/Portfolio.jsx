import React from 'react';
import "./css/styles.css"
import "./css/vendor.css"
import about_img from "./images/about-photo.jpg"
import fuji_img from "./images/portfolio/fuji.jpg"
import lamp from "./images/portfolio/lamp.jpg"
import Gfuji_img from "./images/portfolio/gallery/g-fuji.jpg"
import avatar_img from "./images/avatars/user-02.jpg"

const Portfolio = () => {
    return (
        <>
            <div className="s-pagewrap">
                <div className="circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <header className="s-header">
                    <div className="header-mobile">
                        <span className="mobile-home-link"><a href="index.html">Luther.</a></span>
                        <a className="mobile-menu-toggle" href="#0"><span>Menu</span></a>
                    </div>

                    <div className="row wide main-nav-wrap">
                        <nav className="column lg-12 main-nav">
                            <ul>
                                <li><a href="index.html" className="home-link">Luther.</a></li>
                                <li className="current"><a href="#intro" className="smoothscroll">Intro</a></li>
                                <li><a href="#about" className="smoothscroll">About</a></li>
                                <li><a href="#works" className="smoothscroll">Works</a></li>
                                <li><a href="#contact" className="smoothscroll">Say Hello</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main className="s-content">
                    <section id="intro" className="s-intro target-section">
                        <div className="row intro-content wide">
                            <div className="column">
                                <div className="text-pretitle with-line">
                                    Hello World
                                </div>
                                <h1 className="text-huge-title">
                                    I am Luther, <br />
                                    a digital designer <br />
                                    & frontend <br />
                                    developer based <br />
                                    in Somewhere.
                                </h1>
                            </div>
                            <ul className="intro-social">
                                <li><a href="#0">Behance</a></li>
                                <li><a href="#0">Twitter</a></li>
                                <li><a href="#0">Dribbble</a></li>
                                <li><a href="#0">Instagram</a></li>
                            </ul>
                        </div>
                        <a href="#about" className="intro-scrolldown smoothscroll">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" /></svg>
                        </a>
                    </section>

                    <section id="about" className="s-about target-section">
                        <div className="row about-info wide" >
                            <div className="column lg-6 md-12 about-info__pic-block">
                                <img src={about_img} alt="" className="about-info__pic" />
                            </div>
                            <div className="column lg-6 md-12">
                                <div className="about-info__text" >
                                    <h2 className="text-pretitle with-line" >
                                        About
                                    </h2>
                                    <p className="attention-getter">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <a href="#0" className="btn btn--medium u-fullwidth" >Download CV</a>
                                </div>
                            </div>
                        </div>

                        <div className="row about-expertise" >
                            <div className="column lg-12">
                                <h2 className="text-pretitle" >Expertise</h2>
                                <ul className="skills-list h1" >
                                    <li>Visual Design</li>
                                    <li>Branding Identity</li>
                                    <li>UI Design</li>
                                    <li>Product Design</li>
                                    <li>Prototyping</li>
                                    <li>Illustration</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row about-timelines" >
                            <div className="column lg-6 tab-12">
                                <h2 className="text-pretitle" >
                                    Experience
                                </h2>
                                <div className="timeline" >
                                    <div className="timeline__block">
                                        <div className="timeline__bullet"></div>
                                        <div className="timeline__header">
                                            <h4 className="timeline__title">Dropbox</h4>
                                            <h5 className="timeline__meta">Product Designer</h5>
                                            <p className="timeline__timeframe">August 2019 - Present</p>
                                        </div>
                                        <div className="timeline__desc">
                                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                        </div>
                                    </div>
                                    <div className="timeline__block">
                                        <div className="timeline__bullet"></div>
                                        <div className="timeline__header">
                                            <h4 className="timeline__title">Microsoft</h4>
                                            <h5 className="timeline__meta">Frontend Developer</h5>
                                            <p className="timeline__timeframe">August 2016 - July 2019</p>
                                        </div>
                                        <div className="timeline__desc">
                                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column lg-6 tab-12">
                                <h2 className="text-pretitle" >
                                    Education
                                </h2>
                                <div className="timeline" >
                                    <div className="timeline__block">
                                        <div className="timeline__bullet"></div>
                                        <div className="timeline__header">
                                            <h4 className="timeline__title">University of Life</h4>
                                            <h5 className="timeline__meta">Master in Graphic Design</h5>
                                            <p className="timeline__timeframe">April 2015</p>
                                        </div>
                                        <div className="timeline__desc">
                                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                        </div>
                                    </div>
                                    <div className="timeline__block">
                                        <div className="timeline__bullet"></div>
                                        <div className="timeline__header">
                                            <h4 className="timeline__title">School of Cool Designers</h4>
                                            <h5 className="timeline__meta">B.A. Degree in Graphic Design</h5>
                                            <p className="timeline__timeframe">August 2012</p>
                                        </div>
                                        <div className="timeline__desc">
                                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="works" className="s-works target-section">
                        <div className="row works-portfolio">
                            <div className="column lg-12" >
                                <h2 className="text-pretitle" >
                                    Recent Works
                                </h2>
                                <p className="h1" >
                                    Here are some of my favorite projects I have done lately. Feel free to check them out.
                                </p>
                                <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                                <li class="folio-list__item column">
                                <a class="folio-list__item-link" href="#modal-01">
                                    <div class="folio-list__item-pic">
                                        <img src={Gfuji_img} alt="" />
                                    </div>
                                    
                                    <div class="folio-list__item-text">
                                        <div class="folio-list__item-cat">
                                            Website
                                        </div>
                                        <div class="folio-list__item-title">
                                            Retro Camera.
                                        </div>
                                    </div>
                                </a>
                                <a class="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                            </li> 

                            <li class="folio-list__item column">
                                <a class="folio-list__item-link" href="#modal-02">
                                    <div class="folio-list__item-pic">
                                        <img src={lamp}  alt="" />
                                    </div>
                                    
                                    <div class="folio-list__item-text">
                                        <div class="folio-list__item-cat">
                                            Product Design
                                        </div>
                                        <div class="folio-list__item-title">
                                            The White Lamp.
                                        </div>
                                    </div>
                                </a>
                                <a class="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                            </li> 

                            <li class="folio-list__item column">
                                <a class="folio-list__item-link" href="#modal-03">
                                    <div class="folio-list__item-pic">
                                        <img src={Gfuji_img} alt="" />
                                    </div>
                                    
                                    <div class="folio-list__item-text">
                                        <div class="folio-list__item-cat">
                                            Branding
                                        </div>
                                        <div class="folio-list__item-title">
                                            Rucksuck.
                                        </div>
                                    </div>
                                </a>
                                <a class="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                            </li>

                            <li class="folio-list__item column">
                                <a class="folio-list__item-link" href="#modal-04">
                                    <div class="folio-list__item-pic">
                                        <img src={Gfuji_img} alt="" />
                                    </div>
                                    
                                    <div class="folio-list__item-text">
                                        <div class="folio-list__item-cat">
                                            Website
                                        </div>
                                        <div class="folio-list__item-title">
                                            Since Day One.
                                        </div>
                                    </div>
                                </a>
                                <a class="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                            </li> 

                            <li class="folio-list__item column">
                                <a class="folio-list__item-link" href="#modal-05">
                                    <div class="folio-list__item-pic">
                                        <img src={Gfuji_img} alt="" />
                                    </div>
                                    
                                    <div class="folio-list__item-text">
                                        <div class="folio-list__item-cat">
                                            Illustration
                                        </div>
                                        <div class="folio-list__item-title">
                                            Sand Dunes.
                                        </div>
                                    </div>
                                </a>
                                <a class="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                            </li> 

                            <li class="folio-list__item column">
                                <a class="folio-list__item-link" href="#modal-06">
                                    <div class="folio-list__item-pic">
                                        <img src={Gfuji_img} alt="" />
                                    </div>
                                    
                                    <div class="folio-list__item-text">
                                        <div class="folio-list__item-cat">
                                            Branding
                                        </div>
                                        <div class="folio-list__item-title">
                                            Minimalismo.
                                        </div>
                                    </div>
                                </a>
                                <a class="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </a>
                            </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="row testimonials">
                            <div className="column lg-6" >
                                <div className="swiper-container testimonial-slider" >
                                    <div className="swiper-wrapper">
                                        <div className="testimonial-slider__slide swiper-slide">
                                            <div className="testimonial-slider__author">
                                                <img src={avatar_img} alt="Author image" className="testimonial-slider__avatar" />
                                                <cite className="testimonial-slider__cite">
                                                    <strong>Tim Cook</strong>
                                                    <span>CEO, Apple</span>
                                                   </cite> 
                        
                                            </div>
                                            <p>
                                                Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                                                Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                                Laudantium quia consequatur molestias delectus culpa.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                            <div className="column lg-6" >
                                <div className="swiper-container testimonial-slider" >
                                    <div className="swiper-wrapper">
                                        <div className="testimonial-slider__slide swiper-slide">
                                            <div className="testimonial-slider__author">
                                                <img src={avatar_img} alt="Author image" className="testimonial-slider__avatar" />
                                                <cite className="testimonial-slider__cite">
                                                    <strong>Tim Cook</strong>
                                                    <span>CEO, Apple</span>
                                                   </cite> 
                        
                                            </div>
                                            <p>
                                                Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                                                Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                                Laudantium quia consequatur molestias delectus culpa.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonials">
                            <div className="column lg-6" >
                                <div className="swiper-container testimonial-slider" >
                                    <div className="swiper-wrapper">
                                        <div className="testimonial-slider__slide swiper-slide">
                                            <div className="testimonial-slider__author">
                                                <img src={avatar_img} alt="Author image" className="testimonial-slider__avatar" />
                                                <cite className="testimonial-slider__cite">
                                                    <strong>Tim Cook</strong>
                                                    <span>CEO, Apple</span>
                                                   </cite> 
                        
                                            </div>
                                            <p>
                                                Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                                                Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                                Laudantium quia consequatur molestias delectus culpa.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                            <div className="column lg-6" >
                                <div className="swiper-container testimonial-slider" >
                                    <div className="swiper-wrapper">
                                        <div className="testimonial-slider__slide swiper-slide">
                                            <div className="testimonial-slider__author">
                                                <img src={avatar_img} alt="Author image" className="testimonial-slider__avatar" />
                                                <cite className="testimonial-slider__cite">
                                                    <strong>Tim Cook</strong>
                                                    <span>CEO, Apple</span>
                                                   </cite> 
                        
                                            </div>
                                            <p>
                                                Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                                                Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                                Laudantium quia consequatur molestias delectus culpa.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="s-contact target-section">
                        <div className="row contact-top">
                            <div className="column lg-12">
                                <h2 className="text-pretitle">
                                    Get In Touch
                                </h2>
                                <p className="h1">
                                    I love to hear from you.
                                    Whether you have a question or just
                                    want to chat about design, tech & art — shoot me a message.
                                </p>
                            </div>
                        </div>

                        <div className="row contact-bottom">
                            <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
                                <h3 className="text-pretitle">Reach me at</h3>
                                <p className="contact-links">
                                    <a href="mailto:sayhello@luther.com" className="mailtoui">sayhello@luther.com</a> <br />
                                    <a href="tel:+1975432345">+197 543 2345</a>
                                </p>
                            </div>
                            <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                                <h3 className="text-pretitle">Social</h3>
                                <ul className="contact-social">
                                    <li><a href="#0">Behance</a></li>
                                    <li><a href="#0">Dribble</a></li>
                                    <li><a href="#0">Twitter</a></li>
                                    <li><a href="#0">Instagram</a></li>
                                    <li><a href="#0">Github</a></li>
                                </ul>
                            </div>
                            <div className="column lg-4 md-12 contact-block">
                                <a href="mailto:sayhello@luther.com" class="mailtoui btn btn--medium u-fullwidth contact-btn">Say Hello.</a>
                            </div>
                        </div>
                    </section>

                </main>
                <footer className="s-footer">

                    <div className="row">
                        <div className="column ss-copyright">
                            <span>© Copyright Luther 2021</span>
                            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a> Distribution By <a href="https://themewagon.com">Themewagon</a></span>
                        </div>

                        <div className="ss-go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clipRule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
                            </a>
                        </div>
                    </div>

                </footer>

            </div>
        </>
    )
}

export default Portfolio
