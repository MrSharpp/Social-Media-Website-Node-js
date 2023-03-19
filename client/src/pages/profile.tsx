import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  createStyles,
  Flex,
  Grid,
  Group,
  Paper,
  Text,
  Avatar,
  Input,
  Stack,
} from '@mantine/core';
import { AddFeed } from '@/Components/AddFeed';
import { Feed } from '@/Components/Feed';
import { TrendingPosts } from '@/Components/TrendingPosts';
import { Events } from '@/Components/Events';
import DefaultLayout from '@/Components/DefaultLayout';
import { UserProfile } from '@/Components/UserProfile';
import { decode } from '@/utils/jwt';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserPosts } from '@/api/post';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [feeds, setFeeds] = useState();

  const getFeedQuery = useQuery({
    queryKey: ['get_feeds'],
    queryFn: () => getUserPosts(decode(localStorage.getItem('token')).id),
    initialData: [],
  });

  return (
    <DefaultLayout
      Left={() =>
        <UserProfile
          image={
            'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }
          name={'Amir Alam'}
          job={'Freelencer'}
          stats={[
            { label: 'Upvotes', value: '23' },
            { label: 'Downvotes', value: '23' },
          ]}
          avatar={''}
        />}
      Right={() => <Events />}
    >
      <Head>
        <title>Very Usefull APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack>
        {getFeedQuery?.data?.map((post) => <>{JSON.stringify(post)}</>)}
      </Stack>
    </DefaultLayout>
  );
}
