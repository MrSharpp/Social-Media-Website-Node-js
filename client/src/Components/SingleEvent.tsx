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
      <Flex p="xs" gap="sm">
        <Avatar radius={'md'} mr={0} size={44} />

        <Box w="100%">
          <Flex gap={'sm'}>
            <IconSpeakerphone color="green" />
            <Title order={5} weight={600} color="#495057">
              GDSC Hackathon{' '}
            </Title>
            <IconCalendarEvent color="#4DABF7" style={{ marginLeft: 'auto' }} />
            <Title order={5} weight={600} color="#495057">
              19 March 2023
            </Title>
          </Flex>
          <Text>A hackathon where bla bla bla bla bla bla bla</Text>
          <Flex style={{ marginRight: 'auto' }}>
            <ActionIcon color={'green'}>
              <IconArrowBigUp size={16} />
            </ActionIcon>
            <ActionIcon color={'red'}>
              <IconArrowBigDown size={16} />
            </ActionIcon>
          </Flex>
        </Box>
      </Flex>
    </Paper>
  );
};
