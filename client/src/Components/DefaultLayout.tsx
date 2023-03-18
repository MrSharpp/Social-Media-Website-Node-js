import { AppShell, Center, Group, Header } from "@mantine/core";
import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      header={
        <Header p="xs" height={60}>
          <Group align="center" h="100%" >Very Usefull App</Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default DefaultLayout;
