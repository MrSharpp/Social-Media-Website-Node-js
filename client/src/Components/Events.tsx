import { Flex, Paper, Text } from '@mantine/core';

export const Events = () => {
  return (
    <Paper shadow={'xs'} radius={'md'} withBorder>
      <Text weight={400} py="8px" pl={'20px'}>
        Events
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
          <Text size={'sm'}>Where do i need to got ..</Text>
        </div>
        <div>
          <Text fz="xs" size={'xs'} tt="uppercase" fw={700} c="dimmed">
            #2
          </Text>
          <Text size={'sm'}>Where do i need to got ..</Text>
        </div>
      </Flex>
    </Paper>
  );
};
