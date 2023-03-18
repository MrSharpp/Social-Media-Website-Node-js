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
  Title,
  Text,
  ActionIcon,
  TypographyStylesProvider,
} from '@mantine/core';
import {
  IconCamera,
  IconPhoto,
  IconVideo,
  IconFiles,
  IconMapPin,
  IconSpeakerphone,
  IconCalendarEvent,
  IconArrowBigUp,
  IconArrowBigDown,
} from '@tabler/icons-react';

export const SingleEvent = () => {
  return (
    <Paper radius={'md'}>
      <Flex p="xs" gap="sm" pr="lg">
        <Avatar radius={'md'} mr={0} size={44} />

        <Box>
          <Flex gap={'sm'} my="sm">
            <IconSpeakerphone color="green" />
            <Title order={5} weight={600} color="#495057">
              GDSC Hackathon{' '}
            </Title>
            <IconCalendarEvent color="#4DABF7" style={{ marginLeft: 'auto' }} />
            <Title order={5} weight={600} color="#495057">
              19 March 2023
            </Title>
          </Flex>
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
            >
              {' '}Upvote{' '}
            </Button>

            <Button
              size="sm"
              leftIcon={<IconArrowBigDown size={22} />}
              variant={status === 'downvoted' ? 'light' : 'subtle'}
              color={status === 'downvoted' ? 'red' : 'gray'}
            >
              {' '}Downvote{' '}
            </Button>

            <Button style={{ marginLeft: 'auto' }}>Register</Button>
          </Group>
        </Box>
      </Flex>
    </Paper>
  );
};
