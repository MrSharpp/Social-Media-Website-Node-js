import { Paper, Flex, Text, createStyles, Anchor } from '@mantine/core';

export const TrendingPosts = () => {
  return (
    <Paper shadow={'xs'} radius={'md'}>
      <Text weight={600} py="8px" pl={'20px'} color="gray">
        Trending Posts
      </Text>
      <hr
        color="#E9ECEF"
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
