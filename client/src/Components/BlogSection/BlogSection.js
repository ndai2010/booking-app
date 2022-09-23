import React from 'react'
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'
import Blog4 from '../../assets/blog4.jpg'
import Blog5 from '../../assets/blog5.jpg'

import './Style.scss'
function BlogSection() {
    return (
        <div className='blog-section-container container'>
            <div className='row'>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section_title">
                        <h2>Blog</h2>
                        <h3>Latest news</h3>
                    </div>
                </div>
                <div className='right-content col-md-6 col-sm-6 col-xs-12'>
                    <div class="grid-hotel space-right-double">
                        <figure class="effect-sadie">
                            <img src={Blog1} alt="blog" />
                            {/* <figcaption>
                                <h2>3 reasons to take a break</h2>
                                <p>We continuously strive to enhance our living and working environments. The environments we live in today are almost unrecognisable from those that existed before the internet. <br /> <a href="single-blog.html">View more</a></p>
                            </figcaption> */}
                        </figure>
                    </div>
                </div>
                <div className='left-content col-md-6 col-sm-6 col-xs-12'>
                    <div className='row'>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="grid-hotel space-right">
                                <figure class="effect-sadie">
                                    <img src={Blog2} alt="blog" />
                                    {/* <figcaption>
                                    <h2>The most famous beach</h2>
                                    <p>We continuously strive to enhance our living and working environments. <br /> <a href="single-blog.html">View more</a></p>
                                </figcaption> */}
                                </figure>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="grid-hotel space-left">
                                <figure class="effect-sadie">
                                    <img src={Blog3} alt="blog" />
                                    {/* <figcaption>
                                    <h2>Romantic atmosphere</h2>
                                    <p>We continuously strive to enhance our living and working environments. <br /> <a href="single-blog.html">View more</a></p>
                                </figcaption> */}
                                </figure>
                            </div>

                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">

                            <div class="grid-hotel space-right space-top">
                                <figure class="effect-sadie">
                                    <img src={Blog4} alt="blog" />
                                    {/* <figcaption>
                                    <h2>Wedding Ceremony</h2>
                                    <p>We continuously strive to enhance our living and working environments. <br /> <a href="single-blog.html">View more</a></p>
                                </figcaption> */}
                                </figure>
                            </div>

                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="grid-hotel space-left space-top">
                                <figure class="effect-sadie">
                                    <img src={Blog5} alt="blog" />
                                    {/* <figcaption>
                                    <h2>Ideas for a party</h2>
                                    <p>We continuously strive to enhance our living and working environments. <br /> <a href="single-blog.html">View more</a></p>
                                </figcaption> */}
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection