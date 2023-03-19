import {
  Anchor,
  Flex,
  Paper,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';

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

export const TrendingEvents = () => {
  const { classes } = useStyles();

  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Title size="xl" weight={500} mt="xs">
        Trending Events
      </Title>
      <Flex direction={'column'} py="8px" pr={'sm'} sx={{ gap: '10px' }}>
        <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={400}>
          AMU Computer Scoiety Hakathon
        </Anchor>

        <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={400}>
          ASAAS 2k23
        </Anchor>
      </Flex>
    </Paper>
  );
};
