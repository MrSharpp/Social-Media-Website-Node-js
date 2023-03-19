import {
  Paper,
  Flex,
  Text,
  createStyles,
  Anchor,
  rem,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import { title } from 'process';

const useStyles = createStyles(theme => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xs,
    paddingLeft: `calc(${theme.spacing.lg} * 2)`,

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

export const TrendingPosts = () => {
  const { classes } = useStyles();

  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Title size="xl" weight={500} mt="xs">
        Trending Posts
      </Title>
      <Flex direction={'column'} py="8px" pr={'sm'} sx={{ gap: '10px' }}>
        <div>
          <Text fz="xs" size={'xs'} tt="uppercase" c="dimmed">
            #1
          </Text>
          <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={400}>
            Today i found a good way to achieve my practical...
          </Anchor>
        </div>

        <div>
          <Text fz="xs" size={'xs'} tt="uppercase" c="dimmed">
            #2
          </Text>
          <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={400}>
            Asslamualikum dears hope you are good, i have something...
          </Anchor>
        </div>
      </Flex>
    </Paper>
  );
};

<Paper radius={'md'} withBorder>
  <Text weight={600} size="md" py="10px" pl={'20px'} color="gray">
    Trending Posts
  </Text>
  <hr
    color="#E9ECEF"
    style={{ border: 'none', height: '1px', margin: 0, padding: 0 }}
  />
  <Flex direction={'column'} py="8px" pl={'20px'} sx={{ gap: '10px' }}>
    <div>
      <Text fz="xs" size={'xs'} tt="uppercase" fw={700} c="dimmed">
        #1
      </Text>
      <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={800}>
        Today i found a good way to achieve my practical...
      </Anchor>
    </div>

    <div>
      <Text fz="xs" size={'xs'} tt="uppercase" fw={700} c="dimmed">
        #2
      </Text>
      <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={800}>
        Asslamualikum dears hope you are good, i have something...
      </Anchor>
    </div>
  </Flex>
</Paper>;
