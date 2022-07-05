import React from "react";

function About() {
  return (
    <div className="w-3/4 mx-auto space-y-4 mt-20">
      <h1 className="text-5xl font-bold text-center mb-8 mt-10">About</h1>
      <div className="flex flex-row flex-wrap justify-between lg:flex-row mx-auto">
        <div>
          <p className="text-4xl my-auto">Summary</p>
        </div>
        <div className="flex flex-col my-auto">
          <p className="max-w-lg">
            Sophomore studying Computer Science at the University of Colorado
            Boulder. <br />
            GPA: 3.96 / 4.00 <br />
            Boulder Esteemed Scholars Program, Be Boulder Scholarship <br />I
            currently hold a 3.96 / 4.00 GPA and am involved in many software
            development and mathematical modeling activities. I have experience
            using a multitude of programming languages and frameworks. I’m most
            comfortable with Python and C++, but have used others extensively. I
            have experience with implementing payments in an e-commerce website
            and working with a CFO to eliminate redundancies in a financial
            database.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between lg:flex-row mx-auto">
        <div>
          <p className="text-4xl my-auto">Data Science</p>
        </div>
        <div className="flex flex-col my-auto">
          <p className="max-w-lg">
            In Data Science, I have experience with data analysis using many
            machine learning and statistical frameworks using Python, Pandas,
            and scikit-learn. I also have experience using PyTorch and am
            familiar with many aspects of the end-to-end development of Machine
            Learning projects. Earlier this year I entered the COMAP
            Mathematical Contest in Modeling where I successfully submitted a
            paper on an Asteroid Mining Global Equity model to predict asteroid
            mining’s impact on global equity using a TOPSIS model with weighted
            parameters using PCA analysis and a least-squares linear regression
            machine learning model.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between lg:flex-row mx-auto">
        <div>
          <p className="text-4xl my-auto">Projects</p>
        </div>
        <div className="flex flex-col my-auto">
          <p className="max-w-lg">
            I have developed my own projects, which include: Bitcoin
            reimplementation from scratch in Python with the ability to create,
            sign, and broadcast transactions onto Bitcoin’s test network
            Full-stack Android and iOS mobile application built with React
            Native, Redux, Python/Django, and PostgreSQL Custom-made LED strip
            with an ESP-8266 internet-enabled microcontroller and C++ that
            connects to the WLED app
          </p>
          <p className="max-w-lg">
            In addition, I have work in mobile app development for both iOS and
            Android. I have deployed multiple websites using React and am
            working on a cross-platform mobile app using React Native, Django,
            and PostgreSQL.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
