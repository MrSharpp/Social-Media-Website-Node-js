import {
  Box,
  Paper,
  Grid,
  Avatar,
  Flex,
  Input,
  Group,
  Button,
  Textarea,
} from '@mantine/core';
import {
  IconCamera,
  IconPhoto,
  IconVideo,
  IconFiles,
  IconMapPin,
} from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import { DeletePost } from '../api/post';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { NotifiationError } from './Notification';

export const AddFeed = () => {
  useEffect(() => {
    NotifiationError('Somethng Went Wrong');
  }, []);

  const addMutation = useMutation({
    mutationFn: DeletePost,
    onSuccess: () => {},
    onError: () => {},
  });

  return (
    <Paper radius={'md'} withBorder>
      <Flex p="xs" gap="sm">
        <Avatar radius={'md'} mr={0} size={44} />

        <Box w="100%">
          <Textarea
            variant="filled"
            size="md"
            placeholder="Share or ask something from everyone"
            style={{ width: '100%' }}
            styles={theme => ({
              input: {
                background: theme.colors.gray[0],
                '&:hover': {
                  background: theme.colors.gray[1],
                },
              },
            })}
          />

          <Group mt="sm" position="apart">
            <Group>
              <Button
                size="sm"
                leftIcon={<IconCamera size={22} />}
                color="gray"
                variant="subtle"
              >
                {' '}Camera{' '}
              </Button>
              <Button
                size="sm"
                leftIcon={<IconPhoto size={22} />}
                color="gray"
                variant="subtle"
              >
                {' '}Images{' '}
              </Button>
              <Button
                size="sm"
                leftIcon={<IconVideo size={22} />}
                color="gray"
                variant="subtle"
              >
                {' '}Videos{' '}
              </Button>
              <Button
                size="sm"
                leftIcon={<IconFiles size={22} />}
                color="gray"
                variant="subtle"
              >
                {' '}Files{' '}
              </Button>
            </Group>

            <Button
              size="sm"
              color="blue"
              style={{ marginLeft: 'auto' }}
              variant="filled"
            >
              {' '}Create Post{' '}
            </Button>
          </Group>
        </Box>
      </Flex>
    </Paper>
  );
};
