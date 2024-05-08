import React from 'react'
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard'

// Testimonials Data
import { testimonials } from '../../../constants/data'
import SwipperCarousel from '../../../components/SwipperCarousel/SwipperCarousel';

const TestimonialSection = () => {


    // Slide Items of Testimonials Carousel
    const slideItems = testimonials.map((testimonial, index) => ({
        id: index,
        content: (
            <TestimonialCard
                name={testimonial.name}
                experience={testimonial.experience}
                imageSrc={testimonial.imageSrc}
                description={testimonial.description}
                rating={testimonial.rating}
            />
        ),
    }));

    return (
        <section className="md:py-20 py-10">
            <div className="content_container">
                <p className="text-primary text-[24px] text-center">
                    Testimonial
                </p>
                <h2 className="text-[2.5rem] text-gray-90 mb-5 mt-3 text-center font-bold">
                    What Our Clients Say?
                </h2>
                <div className="mt-5 testimonialsCarousel">
                    <SwipperCarousel slideItems={slideItems} />
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection