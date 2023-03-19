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
  Anchor,
  HoverCard,
  Stack,
} from '@mantine/core';
import { IconArrowBigUp, IconArrowBigDown, IconEye } from '@tabler/icons-react';

import { useState } from 'react';
import { ProfileHover } from './ProfileHover';
import { IPost } from '@/sharedInterfaces/post';

interface IProps {
  showProfile?: boolean;
  data: IPost;
}

export const Feed = ({ showProfile = true, data }: IProps) => {
  const [status, setStatus] = useState<'upvoted' | 'downoted' | ''>('');

  return (
    <Paper withBorder p="sm">
      <Flex gap="sm">
        <ProfileHover showProfile={showProfile} user={data.user} />

        <Box style={{ width: '100%' }}>
          <Title order={5} mb="xs" mt={2}>
            {data.user.username}
          </Title>

          <TypographyStylesProvider>
            <p>
              {data.description}
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
              {data.upvote} Upvotes
            </Button>

            <Button
              size="sm"
              leftIcon={<IconArrowBigDown size={22} />}
              onClick={() => {
                setStatus(prev => (prev === 'downoted' ? '' : 'downoted'));
              }}
              variant={status === 'downoted' ? 'light' : 'subtle'}
              color={status === 'downoted' ? 'red' : 'gray'}
            >
              {data.downvote} Downvotes
            </Button>

            <Flex gap={'xs'} style={{ marginLeft: 'auto' }}>
              <IconEye color="grey" />
              <Text color={'gray'}>
                {data.views}
              </Text>
            </Flex>
          </Group>
        </Box>
      </Flex>
    </Paper>
  );
};
