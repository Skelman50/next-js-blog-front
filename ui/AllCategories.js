import { Fragment } from "react";
import Link from "next/link";

const AllCategories = ({ categories }) => (
  <div>
    {categories.map((category) => (
      <Link key={category._id} href={`categories/${category.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt3">{category.name}</a>
      </Link>
    ))}
  </div>
);

export default AllCategories;
