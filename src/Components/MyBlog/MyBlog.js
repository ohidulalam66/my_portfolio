import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Flip from 'react-reveal/Flip'
import Bounce from 'react-reveal/Bounce'

const MyBlog = () => {
  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <i className="fas fa-blog"></i> My Blog
            </span>
          </Flip>
        </h3>
        <Bounce>
          <div className="d-flex justify-content-center">
            <Image
              className="w-50"
              src="https://i.ibb.co/tD7XVdn/abstract-grunge-style-coming-soon-with-black-splatter-1017-26690.webp"
            ></Image>
          </div>
        </Bounce>
      </Container>
    </>
  )
}

export default MyBlog
