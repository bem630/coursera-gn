import React from 'react';
import styled from 'styled-components';
import { testimonialsData } from '../../../../fakeData/fakeData';
import { useSpring, animated } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
    //state
    //comportements
    const cardAnimation = useSpring({
        to: { transform: 'translateY(0)', opacity: 1 },
        from: { transform: 'translateY(20px)', opacity: 0 },
        config: { tension: 120, friction: 14 },
    });

    //affichage

  return (
    <TestimonialsSection>
      <h2>Témoignages</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
      >
        {testimonialsData.map((testimonial) => (
          <animated.div key={testimonial.id} style={cardAnimation}>
            <TestimonialCard>
              <ImageWrapper>
                <img src={testimonial.image} alt={`${testimonial.name}'s photo`} />
              </ImageWrapper>
              <TestimonialContent>
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}, {testimonial.course}</h4>
              </TestimonialContent>
            </TestimonialCard>
          </animated.div>
        ))}
      </Carousel>
      <CTA>
        Rejoignez-nous maintenant et écrivez votre propre histoire de succès !
      </CTA>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #222;
    margin-bottom: 3rem;
    font-weight: 700;
  }

  .carousel .slide {
    padding: 1rem 2rem;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left;
`;

const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialContent = styled.div`
  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
    font-style: italic;
    line-height: 1.5;
  }

  h4 {
    font-size: 1rem;
    color: #222;
    font-weight: 600;
  }
`;

const CTA = styled.div`
  margin-top: 3rem;
  font-size: 1.2rem;
  color: #007BFF;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

export default Testimonials;