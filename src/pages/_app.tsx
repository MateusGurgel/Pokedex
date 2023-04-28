import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/layouts/layout";
import theme from "@/styles/theme";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ChakraProvider>
  );
}
