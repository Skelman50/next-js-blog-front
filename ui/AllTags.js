import { Fragment } from "react";
import Link from "next/link";

const AllTags = ({ tags }) => (
  <div>
    {tags.map((tag) => (
      <Link key={tag._id} href={`tags/${tag.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt3">{tag.name}</a>
      </Link>
    ))}
  </div>
);

export default AllTags;
