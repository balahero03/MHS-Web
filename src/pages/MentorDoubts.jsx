import React, { useState } from 'react'

const recentDoubts = [
  {
    id: 1,
    category: 'Calculus',
    title: 'Help with evaluating improper integrals with infinite discontinuities',
    postedBy: 'Student •••402',
    timeAgo: '2 hours ago',
    status: 'Answered',
    answer: 'You need to split the integral at the point of discontinuity and take the limit as you approach it from both sides. Check out the attached notes for a step-by-step example.'
  },
  {
    id: 2,
    category: 'Linear Algebra',
    title: 'Geometric interpretation of eigenvectors',
    postedBy: 'Student •••112',
    timeAgo: '5 hours ago',
    status: 'Answered',
    answer: 'An eigenvector is a vector whose direction remains unchanged when a linear transformation is applied to it. Consider the transformation matrix A; an eigenvector v satisfies Av = λv.'
  },
  {
    id: 3,
    category: 'Probability',
    title: 'Confusion between mutually exclusive and independent events',
    postedBy: 'Student •••993',
    timeAgo: '1 day ago',
    status: 'Pending',
    answer: ''
  },
  {
    id: 4,
    category: 'Number Theory',
    title: "Proving Fermat's Little Theorem using modular arithmetic",
    postedBy: 'Student •••331',
    timeAgo: '1 day ago',
    status: 'Pending',
    answer: ''
  }
]

const mentors = [
  { name: 'Dr. Srinivasan', specialty: 'Real Analysis', available: true },
  { name: 'Prof. Raman', specialty: 'Abstract Algebra', available: false },
  { name: 'V. A. Sivamurugan', specialty: 'Differential Equations', available: true },
  { name: 'K. Swaminathan', specialty: 'Probability & Statistics', available: true }
]

const MentorDoubts = () => {
  const [category, setCategory] = useState('All')
  const [openAccordion, setOpenAccordion] = useState(false)

  const filteredDoubts = category === 'All'
    ? recentDoubts
    : recentDoubts.filter((doubt) => doubt.category === category)

  return (
    <div className="mentor-page-wrap">
      <section className="container mentor-page-header">
        <div className="page-header mentor-page-header-inner">
          <div className="mentor-eyebrow">Mentor Connect</div>
          <h2 className="mentor-title">Ask a Doubt</h2>
          <p className="mentor-copy">
            Stuck on a tricky problem or need clarification on a complex concept? Submit your doubt here, and our experienced mentors from the Mathematics Honor Society will help you out.
          </p>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Category Filter</h3>
          <div className="mentor-chip-row" role="group" aria-label="Doubt category filter">
            {['All', 'Calculus', 'Number Theory', 'Probability', 'Linear Algebra'].map((item) => (
              <button
                key={item}
                type="button"
                className={`mentor-chip ${category === item ? 'mentor-chip-active' : ''}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Submit a Doubt</h3>
          <p className="mentor-copy mentor-copy-tight">
            Fill out the form below to submit your question. A mentor will review it and provide a detailed answer as soon as possible.
          </p>

          <button
            type="button"
            className="mentor-accordion-toggle"
            onClick={() => setOpenAccordion((prev) => !prev)}
            aria-expanded={openAccordion}
          >
            Submission Guidelines
          </button>
          {openAccordion && (
            <div className="mentor-accordion-content" role="region">
              Please provide a clear and concise title for your doubt. In the description, try to explain what you have already attempted and where exactly you are stuck. If applicable, provide an image or link to the problem.
            </div>
          )}

          <form className="mentor-form-grid" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="doubt-student-name" className="mentor-label">Student Name</label>
              <input id="doubt-student-name" name="studentName" className="mentor-input" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="doubt-roll-number" className="mentor-label">Roll Number</label>
              <input id="doubt-roll-number" name="rollNumber" className="mentor-input" placeholder="2023ABCD001" />
            </div>
            <div>
              <label htmlFor="doubt-department" className="mentor-label">Department</label>
              <input id="doubt-department" name="department" className="mentor-input" placeholder="Computer Science" />
            </div>
            <div>
              <label htmlFor="doubt-subject" className="mentor-label">Subject Category</label>
              <select id="doubt-subject" name="subject" className="mentor-input">
                <option>Calculus</option>
                <option>Number Theory</option>
                <option>Probability</option>
                <option>Linear Algebra</option>
              </select>
            </div>
            <div className="mentor-form-span-2">
              <label htmlFor="doubt-title" className="mentor-label">Doubt Title</label>
              <input id="doubt-title" name="title" className="mentor-input" placeholder="How to solve non-homogeneous differential equations?" />
            </div>
            <div className="mentor-form-span-2">
              <label htmlFor="doubt-description" className="mentor-label">Doubt Description</label>
              <textarea id="doubt-description" name="description" className="mentor-textarea" placeholder="I understand the method of undetermined coefficients, but I'm getting stuck when the forcing function is a product of sine and exponential functions. Can someone explain the process?" />
            </div>
            <div>
              <label htmlFor="doubt-urgency" className="mentor-label">Urgency</label>
              <select id="doubt-urgency" name="urgency" className="mentor-input">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label htmlFor="doubt-attachment" className="mentor-label">Attachment URL</label>
              <input id="doubt-attachment" name="attachment" className="mentor-input" placeholder="https://example.com/image.png" />
            </div>
            <div className="mentor-form-span-2">
              <button type="submit" className="mentor-primary-button">Submit Doubt</button>
            </div>
          </form>
        </div>
      </section>

      <section className="container mentor-section-gap">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Recent Doubts Board</h3>
          <div className="mentor-list-wrap">
            {filteredDoubts.map((doubt) => (
              <article key={doubt.id} className="mentor-list-item">
                <div className="mentor-list-head">
                  <span className="mentor-list-category">{doubt.category}</span>
                  <span className={`mentor-status ${doubt.status === 'Answered' ? 'mentor-status-ok' : 'mentor-status-pending'}`}>
                    {doubt.status}
                  </span>
                </div>
                <h4 className="mentor-list-title">{doubt.title}</h4>
                <p className="mentor-list-meta">{doubt.postedBy} · {doubt.timeAgo}</p>
                {doubt.answer && <p className="mentor-copy mentor-copy-tight">{doubt.answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mentor-section-gap mentor-section-end">
        <div className="content-card mentor-card">
          <h3 className="footer-col-title">Mentor Availability</h3>
          <div className="mentor-strip-grid">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="mentor-strip-card">
                <div className="mentor-strip-head">
                  <span
                    className="mentor-dot"
                    style={{ backgroundColor: mentor.available ? '#22c55e' : '#ef4444' }}
                    aria-label={mentor.available ? 'Mentor available' : 'Mentor busy'}
                  />
                  <h4 className="mentor-list-title">{mentor.name}</h4>
                </div>
                <p className="mentor-list-meta">{mentor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MentorDoubts

