import React from 'react';

const Home = () => {
  const createDummyEmployees = () => {
    fetch('http://localhost:4000/employees/createDummyUsers/').then(res => res.json()).then(res => alert(res.message))
  }

  return (
    <main role="main">
      <section className="jumbotron text-center mb-0" style={{height: '100vh',}}>
        <div className="container">
          <h1 className="jumbotron-heading">Feedback System</h1>
          <p className="lead text-muted">
            Login with appropriate user.</p>
          <p>
            <a className="btn btn-primary m-2" href="/admin">Admin section</a>
            <a className="btn btn-secondary my-2" href="/select-employee">Employee Section</a>
            <a className="btn btn-secondary my-2" href="#" onClick={createDummyEmployees}>Create Dummy employees</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home;
