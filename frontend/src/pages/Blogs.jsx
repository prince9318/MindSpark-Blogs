import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner";

const Blogs = () => {
  const { blogData, isLoading } = useContext(StoreContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-black-900 dark:text-black mb-4">
            All Blogs
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-black-600 dark:text-black-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to our blog section, where you can explore a variety of
            articles on different topics written by our talented authors. Stay
            updated with the latest trends, insights, and stories, all curated
            to inspire and inform.
          </p>
        </motion.header>

        {blogData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-red-500">
              No blogs found. Check back later!
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogData.map((blog) => (
              <motion.div key={blog.id} variants={itemVariants}>
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  image={blog.image}
                  category={blog.category}
                  author_name={blog.author.name}
                  author_image={blog.author.image}
                  date={blog.date}
                  excerpt={blog.excerpt}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
