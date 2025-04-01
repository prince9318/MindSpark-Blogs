import { useContext } from "react";
import BlogCard from "./BlogCard";
import { StoreContext } from "../context/StoreContext";

const LatestBlogs = () => {
  const { blogData } = useContext(StoreContext);

  return (
    <div>
      <h1 className="text-3xl my-3 text-gray-700 font-bold text-center sm:text-start">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
        {blogData
          ?.slice()
          .reverse()
          .slice(0, 6)
          .map((blog) => (
            <BlogCard
              key={blog._id} // Use a unique identifier instead of index
              id={blog._id}
              title={blog.title}
              image={blog.image}
              category={blog.category}
              author_name={blog.author?.name} // Optional chaining to prevent errors
              author_image={blog.author?.image}
              date={blog.createdAt}
            />
          ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
