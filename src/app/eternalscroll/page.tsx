
import LoadMore from "@/components/applications/loadmore";
import PostCard from "@/components/applications/postcard";
import PostList from "@/components/applications/postlist";
import { POST_LIST_PAGE_SIZE } from "@/modules/constants";
import PostType from "@/types/post-type";

async function getPosts(offset: number) {
    const json = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${POST_LIST_PAGE_SIZE}`
    ).then((res) => res.json());
    return json as PostType[] | [];
}
async function loadMorePost(offset: number = 0) {
    'use server';
    const posts = await getPosts(offset);
  
    const nextOffset = posts.length >= POST_LIST_PAGE_SIZE ? offset + POST_LIST_PAGE_SIZE : null;
  
    return [
      posts.map((post: PostType) => <PostCard key={post.id} post={post} />),
      nextOffset,
    ] as const;
}
  
export default async function Home() {
    const initialPosts = await getPosts(0);
  
    return (
      <main className='flex min-h-screen flex-col container mb-8 mt-32'>
        <h1 className='text-2xl md:text-4xl font-bold mb-8 text-black text-center'>
          (^_^)
        </h1>
  
        <div className='flex flex-col gap-4 items-center'>
          <LoadMore loadMoreAction={loadMorePost} initialOffset={0}>
            <PostList posts={initialPosts} />
          </LoadMore>
        </div>
      </main>
    );
}

  