import React from 'react';
import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
  Center,
  Group,
  Header as MHeader,
  Menu,
  SimpleGrid,
  TextInput,
  Title,
  UnstyledButton,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import {
  IconBell,
  IconDotsVertical,
  IconMessage,
  IconSearch,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <MHeader height={120}>
      <SimpleGrid
        h={60}
        px="lg"
        cols={3}
        sx={theme => ({
          alignItems: 'center',
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
        })}
      >
        <Title order={2} color={'blue'}>
          Amu Tweets
        </Title>

        <TextInput
          icon={<IconSearch size={20} />}
          size="md"
          placeholder="Search Posts..."
        />

        <Group position="right">
          <ActionIcon size={'lg'}>
            <IconMessage size={22} />
          </ActionIcon>

          <ActionIcon size={'lg'}>
            <IconBell size={22} />
          </ActionIcon>

          <Menu withinPortal>
            <Menu.Target>
              <ActionIcon size="lg" p={0}>
                <Avatar size={rem(35)} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown miw={100}>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item
                color="red"
                onClick={() => {
                  localStorage.removeItem('token');
                  router.replace('login');
                }}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </SimpleGrid>

      <Group position="apart" align="center" h={60} px={'lg'}>
        <Group spacing={50}>
          <Title order={3}> Community </Title>

          <Group spacing={5}>
            {[
              { link: '/', title: 'Explore' },
              { link: '/profile', title: 'My Profile' },
              { link: '/events', title: 'Events' },
            ].map(item =>
              <Button
                key={item.link}
                component={Link}
                href={item.link}
                variant="white"
                p="xs"
                color={item.link === router.asPath ? 'blue' : 'gray'}
              >
                {item.title}
              </Button>
            )}
          </Group>
        </Group>

        <ActionIcon size="lg">
          <IconDotsVertical size={22} />
        </ActionIcon>
      </Group>
    </MHeader>
  );
};

export default Header;
