/* eslint-disable react/react-in-jsx-scope */

import { GetStaticProps } from "next";
import { PostData } from "@/domain/posts/post";
import { getAllPosts } from "@/data/posts/get-all-posts";
import HomePage from "@/containers/HomePage";

export type HomeProps = {
  posts: PostData[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <HomePage posts={posts}>
    </HomePage>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts('_sort=id:desc&_start=0&_limit=30');

  return {
    props: { posts }
  }
};
