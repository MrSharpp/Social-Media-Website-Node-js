import { HoverCard, Avatar, Group, Stack, Anchor, Text } from '@mantine/core';
import { IUser } from '@/sharedInterfaces/post';

export function ProfileHover({
  showProfile,
  user,
}: {
  showProfile: boolean;
  user: IUser;
}) {
  if (!showProfile)
    return (
      <Avatar
        src="https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x"
        radius="xl"
      />
    );

  return (
    <HoverCard width={320} shadow="md" withArrow>
      <HoverCard.Target>
        <Avatar
          src="https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x"
          radius="xl"
        />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group>
          <Avatar
            radius={'md'}
            mr={0}
            size={44}
            onMouseEnter={() => {
              console.log('Hello');
            }}
          />
          <Stack spacing={5}>
            <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
              @{user.username}
            </Text>
            <Anchor
              href="https://twitter.com/mantinedev"
              color="dimmed"
              size="xs"
              sx={{ lineHeight: 1 }}
            >
              @{user.username}
            </Anchor>
          </Stack>
        </Group>

        <Group mt="md" spacing="xl">
          <Text size="sm">
            <b>0</b> Upvotes
          </Text>
          <Text size="sm">
            <b>1,174</b> Downvotes
          </Text>
        </Group>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
