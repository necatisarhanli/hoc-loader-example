import { Skeleton as PostSkeleton } from "../post";

const Skeleton = () => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map(() => {
          return <PostSkeleton />;
        })}
    </>
  );
};

export default Skeleton;
