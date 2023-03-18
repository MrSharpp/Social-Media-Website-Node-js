import React from "react";
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
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import {
  IconBell,
  IconDotsVertical,
  IconMessage,
  IconSearch,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <MHeader height={120}>
      <SimpleGrid
        h={60}
        px="lg"
        cols={3}
        sx={(theme) => ({
          alignItems: "center",
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
        })}
      >
        <MantineLogo size={30} />

        <TextInput
          icon={<IconSearch size={20} />}
          size="md"
          placeholder="Search Posts..."
        />

        <Group position="right">
          <ActionIcon size={"lg"}>
            <IconMessage size={22} />
          </ActionIcon>

          <ActionIcon size={"lg"}>
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
              <Menu.Item color="red">Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </SimpleGrid>

      <Group position="apart" align="center" h={60} px={"lg"}>
        <Group spacing={50}>
          <Title order={3}> Community </Title>

          <Group>
            <Button> Explore </Button>
            <Button variant="subtle" color="gray" > My Posts </Button>
            <Button variant="subtle" color="gray" > Events </Button>
          </Group>
        </Group>

        <ActionIcon size="lg" >
          <IconDotsVertical size={22} />
        </ActionIcon>
      </Group>
    </MHeader>
  );
};

export default Header;
