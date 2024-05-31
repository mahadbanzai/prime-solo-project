import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1> Application Overview</h1>
        <p>Children are our future, and as adults we want to do our due diligence in making sure our children are well equipped and capable members of society. The beginning of a child’s development for the most part originates from school. If our students are educated, the more successful they become. The hard part is, not every student has that liberty of having a reliable teaching source. Especially immigrants/refugees. This app’s purpose is to provide assistance/guidance to these sorts of students with more individualized and personal delivery in a way they can understand and have a better chance of succeeding .
</p>
      </div>
    </div>
  );
}

export default AboutPage;
