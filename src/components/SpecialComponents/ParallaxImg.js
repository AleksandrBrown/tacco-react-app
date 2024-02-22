import React from 'react'
import { Events, animateScroll as scroll } from 'react-scroll'

const ParallaxImg = () => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    Events.scrollEvent.register('scroll', handleScroll)

    return () => {
      Events.scrollEvent.remove('scroll', handleScroll)
    };
  }, [])

  return (
    <div style={{ backgroundImage: `url('/path/to/your/image.jpg')`, backgroundPosition: `center ${offset * 0.5}px`, backgroundSize: 'cover', height: '500px' }}></div>
  )
}

export default ParallaxImg;
