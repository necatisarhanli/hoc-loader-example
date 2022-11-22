import { PostData } from "../post/type";
import Post from "../post";

interface ListProps {
  data?: Array<PostData>;
}

const List = ({ data }: ListProps): JSX.Element => {
  return (
    <>
      {data?.map((postData, index) => {
        return <Post data={postData} key={`post-${index}`} />;
      })}
    </>
  );
};

export default List;
