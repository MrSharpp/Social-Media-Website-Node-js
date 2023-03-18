import { Paper, Flex, Text, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export const TrendingPosts = () => {
  const { classes } = useStyles();

  return (
    <Paper shadow={'xs'} radius={'md'} withBorder>
      <Text weight={400} py="8px" pl={'20px'}>
        Trending Posts
      </Text>
      <hr
        color="lightGray"
        style={{ border: 'none', height: '1px', margin: 0, padding: 0 }}
      />
      <Flex direction={'column'} py="8px" pl={'20px'}>
        <div>
          <Text fz="xs" size={'xs'} tt="uppercase" fw={700} c="dimmed">
            #1
          </Text>
          <Text size={'sm'} className={classes.name}>
            Where do i need to got ..
          </Text>
        </div>
        <div>
          <Text fz="xs" size={'xs'} tt="uppercase" fw={700} c="dimmed">
            #2
          </Text>
          <Text size={'sm'} className={classes.name}>
            Where do i need to got ..
          </Text>
        </div>
      </Flex>
    </Paper>
  );
};
