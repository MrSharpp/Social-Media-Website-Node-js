import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { createStyles, Flex, Grid, Group, Paper, Text, Avatar, Input } from "@mantine/core";
import { Feed } from "@/Components/Feed";
import { TrendingPosts } from "@/Components/TrendingPosts";
import { Events } from "@/Components/Events";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  return (
    <>
      <Head>
        <title>Very Usefull APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Grid.Col span={3}>
        <TrendingPosts/>
        </Grid.Col>
        <Grid.Col span={6}>
         <Feed/>
        </Grid.Col>
        <Grid.Col span={3}> 
        <Events/>
    </Grid.Col>

      </Grid>
    </>
  );
}
