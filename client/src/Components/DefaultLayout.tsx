import {
  AppShell,
  Aside,
  Box,
  MediaQuery,
  Navbar,
  Paper,
  rem,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import { title } from 'process';
import React from 'react';
import { Events } from './Events';
import Header from './Header';
import { TrendingPosts } from './TrendingPosts';

const useStyles = createStyles(theme => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}));

const DefaultLayout = ({
  children,
  Left,
  Right,
}: {
  children: React.ReactNode;
  Left;

  Right;
}) => {
  const { classes } = useStyles();

  return (
    <AppShell
      header={<Header />}
      navbar={
        <Navbar
          p={'md'}
          ml={'100px'}
          sx={theme => ({ background: '#f9f9f9' })}
          styles={{ root: { borderRight: 'none' } }}
          width={{ base: 350 }}
        >
          <Left />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside
            p="md"
            mr={'100px'}
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 350 }}
            sx={theme => ({
              background: '#f9f9f9',
              borderLeft: 'none',
            })}
            styles={{ root: { borderLeft: 'none' } }}
          >
            <Right />
          </Aside>
        </MediaQuery>
      }
      padding="xs"
    >
      <Box style={{ maxWidth: 800 }} mr="auto" ml="auto">
        {children}
      </Box>
    </AppShell>
  );
};

export default DefaultLayout;
