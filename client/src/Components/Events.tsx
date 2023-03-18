import { Anchor, Flex, Paper, Text } from '@mantine/core';

export const Events = () => {
  return (
    <Paper shadow={'xs'} radius={'md'}>
      <Text weight={400} py="8px" pl={'20px'}>
        Events
      </Text>
      <hr
        color="lightGray"
        style={{ border: 'none', height: '1px', margin: 0, padding: 0 }}
      />
      <Flex direction={'column'} gap="xs" py="15px" pl={'20px'}>
        <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={800}>
          Where do i need to got ..
        </Anchor>
        <Anchor style={{ textDecoration: 'none' }} size={'sm'} weight={800}>
          Where do i need to got ..
        </Anchor>
      </Flex>
    </Paper>
  );
};
