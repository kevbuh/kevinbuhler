import React from "react";

function Skills() {
  return (
    <div className="w-3/4 mx-auto space-y-4">
      <h1 className="text-5xl font-bold text-center mb-8 mt-10">Skills</h1>
      <div className="flex flex-row flex-wrap justify-evenly lg:flex-row mx-auto">
        <div>
          <p className="text-4xl my-auto py-1">
            Primary &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
        </div>
        <div className="flex flex-col my-auto">
          <p className="max-w-lg">
            Python | Pytorch | React Native | Redux | Django | PostgreSQL |
            Tailwind CSS |
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly lg:flex-row mx-auto">
        <div>
          <p className="text-4xl my-auto py-1">Everything &nbsp; &nbsp;</p>
        </div>
        <div className="flex flex-col my-auto">
          <p className="max-w-lg">
            Pandas | Scikit-learn | React | TypeScript | GraphQL | Redis |
            NodeJS | MongoDB | Docker | Heroku | Many More
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly lg:flex-row mx-auto">
        <div>
          <p className="text-4xl my-auto py-1">
            Overall &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
        </div>
        <div className="flex flex-col my-auto">
          <p className="max-w-lg">
            I am skilled in JavaScript, TypeScript, HTML, CSS. I have also used
            C++ and Java. I have utilized many web technologies including React,
            React Native, MongoDB, Express.js, PostgreSQL, GraphQL, Redis,
            NodeJS, and more. In addition, I use Docker and Digital Ocean to
            build, run and operate my web applications in the cloud and
            implement Stripe API for payment processing. I have been actively
            studying Neural Networks and Deep Learning in my own time. To do so,
            I have been using the machine learning platform TensorFlow, with
            Keras API alongside the Scikit-Learn library.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
