// pages/about.js

import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | YourAppName</title>
        <meta
          name="description"
          content="Learn more about YourAppName, our mission, vision, and the team behind our success."
        />
      </Head>
      <main className="container mx-auto p-4">
        <section className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <strong>YourAppName</strong>! We're on a mission to [your mission statement].  
            Our goal is to [specific value your app provides] while ensuring [commitment or promise].  
          </p>
        </section>

        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-md text-gray-700 text-center">
            To revolutionize [industry/field] by delivering [specific services or products].
          </p>
        </section>

        <section className="py-8 bg-gray-100">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
          <p className="text-md text-gray-700 text-center">
            To become the leading [industry/field] platform by fostering innovation,  
            quality, and trust within our community.
          </p>
        </section>

        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/team/member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-xl font-medium mt-4">Name</h3>
              <p className="text-gray-600">Role</p>
            </div>
            <div className="text-center">
              <img
                src="/team/member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-xl font-medium mt-4">Name</h3>
              <p className="text-gray-600">Role</p>
            </div>
            <div className="text-center">
              <img
                src="/team/member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-xl font-medium mt-4">Name</h3>
              <p className="text-gray-600">Role</p>
            </div>
          </div>
        </section>

        <section className="py-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or want to learn more? Contact us at{" "}
            <a href="mailto:support@yourapp.com" className="text-blue-500">
              support@yourapp.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
