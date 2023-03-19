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
import { DeletePost, Post } from '../api/post';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { NotifiationError, NotifiationSucess } from './Notification';
import { useForm, zodResolver } from '@mantine/form';
import z from 'zod';
import { PostDTO } from '../api/post';
import { queryClient } from '@/QueryClient';
import { decode } from '@/utils/jwt';

export const AddFeed = () => {
  const addMutation = useMutation({
    mutationFn: Post,
    onSuccess: () => {
      NotifiationSucess('Words Posted!');
      queryClient.invalidateQueries(['allPosts'])
    },
    onError: ({ response }) => {
      console.log(response.data.message);

      NotifiationError(response.data.message);
    },
  });

  interface PForm extends z.infer<typeof PostDTO> {}

  const postForm = useForm<Omit<PForm, 'user'>>({
    initialValues: {
      description: '',
    },
    validate: zodResolver(PostDTO.partial({ user: true })),
  });

  return (
    <Paper radius={'md'} withBorder>
      <Flex p="xs" gap="sm">
        <Avatar radius={'md'} mr={0} size={44} />
        <form
          onSubmit={postForm.onSubmit(data => {
            addMutation.mutate({ user: decode(localStorage.getItem('token'))?.id, description: data.description });
          })}
        >
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
              disabled={addMutation.isLoading}
              {...postForm.getInputProps('description')}
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
                type="submit"
                color="blue"
                style={{ marginLeft: 'auto' }}
                variant="filled"
                loading={addMutation.isLoading}
              >
                {' '}Create Post{' '}
              </Button>
            </Group>
          </Box>
        </form>
      </Flex>
    </Paper>
  );
};
