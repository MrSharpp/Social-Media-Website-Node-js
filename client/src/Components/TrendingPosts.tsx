import { Paper, Flex, Text, createStyles, Anchor } from '@mantine/core';

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
    <Paper shadow={'xs'} radius={'md'}>
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
          <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={800}>
            Where do i need to got ..
          </Anchor>
        </div>
        <div>
          <Text fz="xs" size={'xs'} tt="uppercase" fw={700} c="dimmed">
            #2
          </Text>
          <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={800}>
            Where do i need to got ..
          </Anchor>
        </div>
      </Flex>
    </Paper>
  );
};
