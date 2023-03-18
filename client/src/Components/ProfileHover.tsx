import { HoverCard, Avatar, Group, Stack, Anchor, Text } from '@mantine/core';

export function ProfileHover({ showProfile }: { showProfile: boolean }) {
  if (!showProfile)
    return (
      <Avatar
        src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4"
        radius="xl"
      />
    );

  return (
    <HoverCard width={320} shadow="md" withArrow>
      <HoverCard.Target>
        <Avatar
          src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4"
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
              Mantine
            </Text>
            <Anchor
              href="https://twitter.com/mantinedev"
              color="dimmed"
              size="xs"
              sx={{ lineHeight: 1 }}
            >
              @User
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
