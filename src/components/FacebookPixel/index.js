import React from 'react'

import ReactPixel from 'react-facebook-pixel'

const PIXEL_ID = '509518335896450'

class FacebookPixel extends React.Component {
  componentDidMount() {
    ReactPixel.init(PIXEL_ID)
  }

  render() {
    return null;
  }
}

export default FacebookPixel
