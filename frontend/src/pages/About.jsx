import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-black tracking-wide mb-4">
          About Us
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </header>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <p className="text-lg md:text-xl text-black-700 dark:text-black-300 leading-relaxed mb-8">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              MindSpark-Blogs
            </span>
            , your trusted platform for insightful articles on technology,
            lifestyle, and more. Our mission is to empower readers by sharing
            knowledge, sparking creativity, and fostering a community of curious
            minds.
          </p>
          <p className="text-lg md:text-xl text-black-900 dark:text-black-900 leading-relaxed mb-8">
            Whether you're here to learn, explore, or find inspiration, we aim
            to provide content that resonates with your interests and passions.
            Thank you for being a part of our journey!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
            Learn More About Our Team
          </button>
        </div>

        <div className="lg:w-1/2">
          <img
            src={assets.about}
            alt="Our team working together in a creative environment"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Our creative team brainstorming ideas
          </figcaption>
        </div>
      </div>
    </section>
  );
};

export default About;
