import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>retrogames</title>
        <meta property="og:title" content="retrogames" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <Script
            html={`<iframe src="https://www.retrogames.cc" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
