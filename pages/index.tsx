import React from "react";
import Head from "next/head";
import { Feed } from "../components/Feed";
import { Post, Category } from "../shared/types";
import { fetchPosts, fetchCategories } from "../requests";

type FrontProps = {
  posts: Post[];
  categories: Category[];
};

export async function getServerSideProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();

  return { props: { posts, categories } };
}

export default function Front({ posts, categories }: FrontProps) {
  return (
    <>
      <Head>:D</Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
}
