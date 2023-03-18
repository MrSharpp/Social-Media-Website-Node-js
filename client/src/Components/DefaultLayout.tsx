import {
  AppShell,
  Aside,
  Box,
  MediaQuery,
  Navbar,
  Paper,
  Text,
} from "@mantine/core";
import React from "react";
import Header from "./Header";
import { TrendingPosts } from "./TrendingPosts";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      header={<Header />}
      navbar={
        <Navbar
          p="md"
          sx={(theme) => ({ background: '#f9f9f9' })}
          styles={{ root: { borderRight: "none" } }}
          width={{ base: 350 }}
        >
          <TrendingPosts />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 350 }}
            sx={(theme) => ({
              background: '#f9f9f9',
              borderLeft: "none",
            })}
            styles={{ root: { borderLeft: "none" } }}
          >
            <Paper withBorder p="md">
              <Text>Paper is the most basic ui component</Text>
              <Text>
                Use it to create cards, dropdowns, modals and other components
                that require background with shadow
              </Text>
            </Paper>
          </Aside>
        </MediaQuery>
      }
      padding="md"
    >
      <Box>{children}</Box>
    </AppShell>
  );
};

export default DefaultLayout;
