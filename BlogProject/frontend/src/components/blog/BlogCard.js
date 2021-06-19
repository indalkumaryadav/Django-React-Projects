import { useHistory } from "react-router-dom";
const BlogCard = (props) => {
  const { title, username, postId, image } = props;
  const history = useHistory();
  return (
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8  cursor-pointer"
      onClick={() => {
        history.push(`${username}/${postId}`);
      }}
    >
      <img class="w-full" src={image} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-600 text-base"></p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
          #developer
        </span>
        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
          #web
        </span>
        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
          #technology
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
