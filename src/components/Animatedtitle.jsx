import React from 'react'

const Animatedtitle = ({ title, containerClass }) => {
  return (
    <div>
      <div className="animated-title ${containerClass}">
        {title.split('<br />').map((line, index) => (
          <div
            key={index}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(' ').map((word, i) => (
              <span
                key={i}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Animatedtitle
