import {
  Box,
  TypographyStylesProvider,
  Paper,
  Grid,
  Avatar,
  Flex,
  Input,
  Group,
  Button,
  Title,
  Text,
} from '@mantine/core';
import { IconArrowBigUp, IconArrowBigDown, IconEye } from '@tabler/icons-react';

import { useState } from 'react';

export const Feed = () => {
  const [status, setStatus] = useState<'' | 'upvoted' | 'downoted'>('');

  return (
    <Box p="sm">
      <Flex gap="sm" p={'xs'}>
        <Avatar radius={'md'} mr={0} size={44} />

        <Box>
          <Title order={5} my="sm">
            {' '}UserName{' '}
          </Title>

          <TypographyStylesProvider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              metus consequat, gravida Nulla ac sapien eros. Donec ut orci orci.
              Duis euismod eros nec tortor molestie sollicitudin.{' '}
            </p>
          </TypographyStylesProvider>

          <Group mt="sm" spacing="xs">
            <Button
              size="sm"
              leftIcon={<IconArrowBigUp size={22} />}
              color={status === 'upvoted' ? 'blue' : 'gray'}
              variant={status === 'upvoted' ? 'light' : 'subtle'}
              onClick={() => {
                setStatus(prev => (prev === 'upvoted' ? '' : 'upvoted'));
              }}
            >
              2234 Upvotes{' '}
            </Button>
            <Button
              size="sm"
              leftIcon={<IconArrowBigDown size={22} />}
              onClick={() => {
                setStatus(prev => (prev === 'downvoted' ? '' : 'downvoted'));
              }}
              variant={status === 'downvoted' ? 'light' : 'subtle'}
              color={status === 'downvoted' ? 'red' : 'gray'}
            >
              1192 Downvotes{' '}
            </Button>
            <Flex gap={'xs'} style={{ marginLeft: 'auto' }}>
              <IconEye color="grey" />
              <Text color={'gray'}>1190</Text>
            </Flex>
          </Group>
        </Box>
      </Flex>
    </Box>
  );
};
