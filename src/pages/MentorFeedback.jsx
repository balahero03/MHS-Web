import React, { useEffect, useState } from 'react'

/*
  Phase 0 extracted palette lock for Mentor Connect files:
  1) body background: #ffffff
  2) main heading: #1155cc
  3) paragraph/body text: #64748b
  4) nav background: #ffffff
  5) nav link default: #64748b, hover: #1155cc
  6) accent: #3b82f6
  7) card background: #ffffff
  8) card border: #e2e8f0
  9) footer background: #ffffff
  10) footer text: #64748b
*/

const stats = [
  { value: 'XX%', label: 'Lorem Satisfaction Metric', icon: '★' },
  { value: 'XXX+', label: 'Lorem Doubts Processed', icon: '✓' },
  { value: 'XX', label: 'Lorem Active Mentors', icon: '◎' },
  { value: 'X hrs', label: 'Lorem Avg Response Time', icon: '⏱' }
]

const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    stars: 5,
    name: 'Student •••001'
  },
  {
    quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    stars: 4,
    name: 'Student •••002'
  },
  {
    quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
    stars: 5,
    name: 'Student •••003'
  }
]

const MentorFeedback = () => {
  const [rating, setRating] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[activeTestimonial]

  return (
    <div className="mentor-page-wrap">
      <section className="container mentor-page-header">
        <div className="page-header mentor-page-header-inner">
          <div className="mentor-eyebrow">Mentor Connect</div>
          <h2 className="mentor-title">Give Feedback</h2>
          <p className="mentor-copy">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Feedback Form</h3>
          <p className="mentor-copy mentor-copy-tight">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>

          <form className="mentor-form-grid" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="feedback-student-name" className="mentor-label">Student Name</label>
              <input id="feedback-student-name" name="studentName" className="mentor-input" placeholder="Lorem Student" />
            </div>
            <div>
              <label htmlFor="feedback-roll-number" className="mentor-label">Roll Number</label>
              <input id="feedback-roll-number" name="rollNumber" className="mentor-input" placeholder="Lorem001" />
            </div>
            <div>
              <label htmlFor="feedback-category" className="mentor-label">Category</label>
              <select id="feedback-category" name="category" className="mentor-input">
                <option>Mentor Support</option>
                <option>Response Quality</option>
                <option>Turnaround Time</option>
              </select>
            </div>
            <div>
              <label htmlFor="feedback-recommendation" className="mentor-label">Recommendation</label>
              <select id="feedback-recommendation" name="recommendation" className="mentor-input">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>

            <div className="mentor-form-span-2">
              <label className="mentor-label">Rating</label>
              <div className="mentor-rating-row" role="group" aria-label="Star rating">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    className={`mentor-star ${rating >= i ? 'mentor-star-active' : ''}`}
                    onClick={() => setRating(i)}
                    aria-label={`Rate ${i} out of 5`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="mentor-form-span-2">
              <label htmlFor="feedback-went-well" className="mentor-label">What Went Well</label>
              <textarea id="feedback-went-well" name="wentWell" className="mentor-textarea" placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip." />
            </div>

            <div className="mentor-form-span-2">
              <label htmlFor="feedback-improvements" className="mentor-label">Improvement Suggestions</label>
              <textarea id="feedback-improvements" name="improvements" className="mentor-textarea" placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </div>

            <div className="mentor-form-span-2">
              <label htmlFor="feedback-additional" className="mentor-label">Additional Comments</label>
              <textarea id="feedback-additional" name="additional" className="mentor-textarea" placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor." />
            </div>

            <div className="mentor-form-span-2">
              <button type="submit" className="mentor-primary-button">Submit Feedback</button>
            </div>
          </form>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Stats Strip</h3>
          <div className="mentor-stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="mentor-stats-card">
                <p className="mentor-stats-icon">{item.icon}</p>
                <p className="mentor-stats-value">{item.value}</p>
                <p className="mentor-list-meta">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mentor-section-gap mentor-section-end">
        <div className="content-card mentor-card" aria-label="Testimonials">
          <h3 className="footer-col-title">Testimonial Carousel</h3>
          <div className="mentor-carousel-wrap">
            <button type="button" className="carousel-nav-large" onClick={prevTestimonial} aria-label="Previous">
              ‹
            </button>
            <div className="mentor-carousel-card">
              <p className="mentor-copy mentor-copy-tight">{current.quote}</p>
              <p className="mentor-carousel-stars">{'★'.repeat(current.stars)}</p>
              <p className="mentor-list-meta">{current.name}</p>
            </div>
            <button type="button" className="carousel-nav-large" onClick={nextTestimonial} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MentorFeedback
