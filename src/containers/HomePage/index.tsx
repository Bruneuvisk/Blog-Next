/* eslint-disable react/react-in-jsx-scope */

import { PostData } from "@/domain/posts/post";
import { Container, Category } from './styles';
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';
import Head from 'next/head';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
}

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : `${SITE_NAME}`}</title>
        <meta name="description" content="Este é meu blog de tecnologia." />
      </Head>
    <Header />
    {category && <Category>Categoria: {category}</Category>}
    <MainContainer>
      <Container>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            cover={post.cover.formats.small.url}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </Container>
    </MainContainer>
    <Footer />
    </>
  );
}
