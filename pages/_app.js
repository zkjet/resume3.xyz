// pages/_app.js

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Container, Card, Row, Text } from "@nextui-org/react";

const activeChainId = ChainId.Goerli;

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <ThirdwebProvider network={activeChainId}>
        <Component {...pageProps} />
        <Container>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="black" css={{ m: 0 }}>
                  Welcome to Resume3.xyz
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <ConnectWallet accentColor="#f213a4" colorMode="dark" />
      </ThirdwebProvider>
    </NextUIProvider>
  );
}

export default MyApp;
