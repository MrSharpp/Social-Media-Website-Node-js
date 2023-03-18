import { AppShell, Box } from "@mantine/core";
import React from "react";
import Header from "./Header";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={<Header />}>
      <Box>{children}</Box>
    </AppShell>
  );
};

export default DefaultLayout;
