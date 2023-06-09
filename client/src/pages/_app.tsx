import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import DefaultLayout from "@/Components/DefaultLayout";
import { Montserrat, Poppins, Quicksand } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/QueryClient";
const fontStyles = Quicksand({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
import { Notifications } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Notifications />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          defaultRadius: "md",

          ...fontStyles.style,

          globalStyles: (theme) => ({
            ".tabler-icon": {
              strokeWidth: 1.5,
            },
          }),
        }}
      >
        <QueryClientProvider client={queryClient} >
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
