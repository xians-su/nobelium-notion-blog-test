import Link from "next/link";

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null;
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto">
        {Object.keys(tags).map((key, index) => {
          const selected = key === currentTag;
          return (
            <li
              key={key}
              className={`${
                Object.keys(tags).length - 1 !== index ? "mr-3" : ""
              } font-normal border whitespace-nowrap hover:opacity-70 dark:text-gray-300 rounded transition-opacity duration-200 ${
                selected
                  ? "text-white bg-gray-500 border-gray-500 dark:bg-gray-600 dark:border-gray-600"
                  : "bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-700"
              }`}
            >
              <Link
                key={key}
                href={selected ? "/search" : `/tag/${encodeURIComponent(key)}`}
              >
                <a className="px-4 py-1 block ">{`${key} (${tags[key]})`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
