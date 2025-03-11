import React from 'react'

function Collab() {
  return (
      <div>
      <div>
  <header style={{backgroundColor: '#343a40', color: '#fff', padding: '1rem', textAlign: 'center'}}>
    <h1>Collaboration Portal</h1>
  </header>
  <main style={{padding: 20, maxWidth: 1000, margin: 'auto', background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 8}}>
    {/* Past Work Experience */}
    <section style={{marginBottom: 30, padding: 20, borderRadius: 8, background: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: 10}}>Past Work Experience</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
        <div className="company-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <img src="logo1.png" alt="Company 1 Logo" style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} />
          <h3>Company 1</h3>
          <p>Details about past projects with this company.</p>
        </div>
        <div className="company-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <img src="logo2.png" alt="Company 2 Logo" style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} />
          <h3>Company 2</h3>
          <p>Details about past projects with this company.</p>
        </div>
        <div className="company-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <img src="logo2.png" alt="Company 3 Logo" style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} />
          <h3>Company 3</h3>
          <p>Details about past projects with this company.</p>
        </div>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 6}}>
        <div className="company-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <img src="logo1.png" alt="Company 1 Logo" style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} />
          <h3>Company 1</h3>
          <p>Details about past projects with this company.</p>
        </div>
        <div className="company-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <img src="logo2.png" alt="Company 2 Logo" style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} />
          <h3>Company 2</h3>
          <p>Details about past projects with this company.</p>
        </div>
        <div className="company-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <img src="logo2.png" alt="Company 3 Logo" style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} />
          <h3>Company 3</h3>
          <p>Details about past projects with this company.</p>
        </div>
      </div>
    </section>
    {/* Current Collaborations */}
    <section style={{marginBottom: 30, padding: 20, borderRadius: 8, background: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: 10}}>Current Collaborations</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
        <div className="project-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <h3>Ongoing Project 1</h3>
          <p>Partner: <b>Company A</b></p>
          <p>Status: In Progress</p>
        </div>
        <div className="project-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <h3>Ongoing Project 2</h3>
          <p>Partner: <b>Company B</b></p>
          <p>Status: On Hold</p>
        </div>
        <div className="project-card" style={{flex: 1, maxWidth: 250, background: '#e9ecef', padding: 15, textAlign: 'center', border: '1px solid #ddd', borderRadius: 8, transition: 'transform 0.2s'}}>
          <h3>Ongoing Project 2</h3>
          <p>Partner: <b>Company B</b></p>
          <p>Status: On Hold</p>
        </div>
      </div>
    </section>
    {/* Collaboration Instructions */}
    <section style={{marginBottom: 30, padding: 20, borderRadius: 8, background: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: 10}}>Collaboration Instructions</h2>
      <ul style={{listStyleType: 'disc', marginLeft: 20}}>
        <li>Fill out the collaboration proposal form accurately.</li>
        <li>Ensure all required documents are attached.</li>
        <li>Follow up via provided contact details after submission.</li>
        <li>Wait for confirmation before initiating collaborative activities.</li>
      </ul>
    </section>
    {/* Required Documentation Upload */}
    <section style={{marginBottom: 30, padding: 20, borderRadius: 8, background: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: 10}}>Required Documentation</h2>
      <form action="#" method="post" encType="multipart/form-data">
        <label htmlFor="collaborationName" style={{display: 'block', marginBottom: 10}}>
          Collaboration Title:
          <input type="text" id="collaborationName" name="collaborationName" placeholder="Enter collaboration title" style={{width: '100%', padding: 8, marginTop: 5, borderRadius: 4, border: '1px solid #ccc'}} />
        </label>
        <label htmlFor="documents" style={{display: 'block', marginBottom: 10}}>
          Upload Documents:
          <input type="file" id="documents" name="documents" style={{marginTop: 5}} />
        </label>
        <button type="submit" style={{backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: 5, cursor: 'pointer', transition: 'background-color 0.3s'}}>
          Submit Documentation
        </button>
      </form>
    </section>
  </main>
</div>



    </div>
  )
}

export default Collab