import { Paper, Grid, Avatar, Flex, Input } from '@mantine/core';

export const Feed = () => {
  return (
    <Paper shadow="xs" radius={'md'} withBorder>
      <Grid>
        <Grid.Col span={2} p="lg">
          <Avatar radius={'md'} mr={0} />
        </Grid.Col>
        <Grid.Col span={10} p="lg">
          <Flex>
            <Input placeholder="Your email" style={{ width: '100vh' }} />
          </Flex>
          <Flex>as</Flex>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
