import React, { useEffect, useState } from 'react'

const stats = [
  { value: '98%', label: 'Student Satisfaction', icon: '★' },
  { value: '150+', label: 'Doubts Clarified', icon: '✓' },
  { value: '12', label: 'Active Mentors', icon: '◎' },
  { value: '< 2 hrs', label: 'Avg Response Time', icon: '⏱' }
]

const testimonials = [
  {
    quote: 'The mentors were extremely helpful! I was struggling with multivariable calculus, and the step-by-step explanations cleared all my doubts.',
    stars: 5,
    name: 'Student •••402'
  },
  {
    quote: 'Quick responses and detailed answers. It would be great if we could also have live doubt-clearing sessions.',
    stars: 4,
    name: 'Student •••112'
  },
  {
    quote: 'Mentor Connect has been a lifesaver for my PDE assignments. Highly recommend using this resource!',
    stars: 5,
    name: 'Student •••993'
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
            Your feedback helps us improve the Mentor Connect experience. Let us know how we are doing and what we can do to support you better.
          </p>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Feedback Form</h3>
          <p className="mentor-copy mentor-copy-tight">
            Please fill out the form below to share your thoughts on your recent mentorship experience. Your responses will remain strictly confidential.
          </p>

          <form className="mentor-form-grid" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="feedback-student-name" className="mentor-label">Student Name</label>
              <input id="feedback-student-name" name="studentName" className="mentor-input" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="feedback-roll-number" className="mentor-label">Roll Number</label>
              <input id="feedback-roll-number" name="rollNumber" className="mentor-input" placeholder="2023ABCD001" />
            </div>
            <div>
              <label htmlFor="feedback-category" className="mentor-label">Category</label>
              <select id="feedback-category" name="category" className="mentor-input">
                <option>Mentor Support</option>
                <option>Response Quality</option>
                <option>Turnaround Time</option>
                <option>General Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="feedback-recommendation" className="mentor-label">Would you recommend?</label>
              <select id="feedback-recommendation" name="recommendation" className="mentor-input">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>

            <div className="mentor-form-span-2">
              <label className="mentor-label">Overall Rating</label>
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
              <label htmlFor="feedback-went-well" className="mentor-label">What Went Well?</label>
              <textarea id="feedback-went-well" name="wentWell" className="mentor-textarea" placeholder="The mentor explained the steps clearly and provided additional resources." />
            </div>

            <div className="mentor-form-span-2">
              <label htmlFor="feedback-improvements" className="mentor-label">Areas for Improvement</label>
              <textarea id="feedback-improvements" name="improvements" className="mentor-textarea" placeholder="It would be helpful if the response time was slightly faster." />
            </div>

            <div className="mentor-form-span-2">
              <label htmlFor="feedback-additional" className="mentor-label">Additional Comments</label>
              <textarea id="feedback-additional" name="additional" className="mentor-textarea" placeholder="Any other thoughts you'd like to share..." />
            </div>

            <div className="mentor-form-span-2">
              <button type="submit" className="mentor-primary-button">Submit Feedback</button>
            </div>
          </form>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Program Statistics</h3>
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
          <h3 className="footer-col-title">Student Testimonials</h3>
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
