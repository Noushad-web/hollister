import React, { useRef } from 'react'

const Video = ({videoUrl}) => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 5000)
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      width="250"
      loop
      muted
    >
      <source src={videoUrl}/>
    </video>
  )
}

export default Video