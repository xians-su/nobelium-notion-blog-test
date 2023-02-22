import Link from "next/link";

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <a>
      <p className="mr-2 rounded-full px-2 py-1 border leading-none text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors duration-200">
        {tag}
      </p>
    </a>
  </Link>
);

export default TagItem;
