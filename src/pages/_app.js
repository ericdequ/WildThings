// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CSSReset } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { extendTheme } from "@chakra-ui/react";
import { ScrollShadow } from "@nextui-org/react";
import Head from "next/head";
import dynamic from "next/dynamic";

const queryClient = new QueryClient();

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

// Dynamically import React Query Devtools
const ReactQueryDevtoolsComponent = dynamic(
  () => import("react-query/devtools").then((mod) => mod.ReactQueryDevtools),
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other meta tags and head elements */}
      </Head>
      <NextUIProvider>
        <ScrollShadow
          hideScrollBar
          offset={100}
          orientation="horizontal"
          className="max-w-[400px] max-h-[300px]"
        >
          <ChakraProvider theme={theme}>
            <CSSReset />
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              {process.env.NODE_ENV !== "production" && (
                <ReactQueryDevtoolsComponent />
              )}
            </QueryClientProvider>
          </ChakraProvider>
        </ScrollShadow>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
