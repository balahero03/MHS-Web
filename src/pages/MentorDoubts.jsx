import React, { useState } from 'react'

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

const recentDoubts = [
  {
    id: 1,
    category: 'Calculus',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    postedBy: 'Student •••001',
    timeAgo: '2 hours ago',
    status: 'Answered',
    answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 2,
    category: 'Number Theory',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt',
    postedBy: 'Student •••002',
    timeAgo: '5 hours ago',
    status: 'Answered',
    answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam'
  },
  {
    id: 3,
    category: 'Probability',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
    postedBy: 'Student •••003',
    timeAgo: '1 day ago',
    status: 'Pending',
    answer: ''
  },
  {
    id: 4,
    category: 'Linear Algebra',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod',
    postedBy: 'Student •••004',
    timeAgo: '1 day ago',
    status: 'Pending',
    answer: ''
  }
]

const mentors = [
  { name: 'Mentor 1', specialty: 'Lorem Topic', available: true },
  { name: 'Mentor 2', specialty: 'Lorem Topic', available: false },
  { name: 'Mentor 3', specialty: 'Lorem Topic', available: true },
  { name: 'Mentor 4', specialty: 'Lorem Topic', available: true }
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
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
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
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </div>
          )}

          <form className="mentor-form-grid" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="doubt-student-name" className="mentor-label">Student Name</label>
              <input id="doubt-student-name" name="studentName" className="mentor-input" placeholder="Lorem Student" />
            </div>
            <div>
              <label htmlFor="doubt-roll-number" className="mentor-label">Roll Number</label>
              <input id="doubt-roll-number" name="rollNumber" className="mentor-input" placeholder="Lorem001" />
            </div>
            <div>
              <label htmlFor="doubt-department" className="mentor-label">Department</label>
              <input id="doubt-department" name="department" className="mentor-input" placeholder="Lorem Department" />
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
              <input id="doubt-title" name="title" className="mentor-input" placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore" />
            </div>
            <div className="mentor-form-span-2">
              <label htmlFor="doubt-description" className="mentor-label">Doubt Description</label>
              <textarea id="doubt-description" name="description" className="mentor-textarea" placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
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
              <input id="doubt-attachment" name="attachment" className="mentor-input" placeholder="https://example.com/lorem" />
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
