import { Anchor, Flex, Paper, Text } from '@mantine/core';

export const Events = () => {
  return (
    <Paper radius={'md'} withBorder>
      <Text weight={600} size="md" py="10px" pl={'20px'} color="gray">
        Recent Events
      </Text>
      <hr
        color="#E9ECEF"
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
