import PostType from '@/types/post-type';
import PostCard from '@/components/applications/postcard';
// auto complete: import PostCard from '../postcard';

export default async function PostList({ posts }: { posts: PostType[] }) {
  return (
    <>
      {posts?.map((post: PostType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};