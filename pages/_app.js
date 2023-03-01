// pages/_app.js

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Container, Card, Row, Text, Avatar } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { Checkbox, Button } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

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
        <Container fluid>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="black" css={{ m: 0 }}>
                  Welcome to Resume3.xyz
                </Text>
              </Row>
            </Card.Body>
          </Card>
          <Spacer y={2} />
        </Container>
        <Row justify="left" align="left">
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />{" "}
          <ConnectWallet accentColor="#f213a4" colorMode="dark" />{" "}
          <h3>EMPLOYERS | APPLICANTS | ABOUT US | CONTACT US | HOME</h3>
        </Row>
        <Spacer y={1} />

        <Grid.Container gap={4}>
          <Grid>
            <Input bordered labelPlaceholder="Email" color="default" />
          </Grid>
          <Grid>
            <Input
              bordered
              labelPlaceholder="Years Experience"
              color="primary"
            />
          </Grid>
          <Grid>
            <Input bordered labelPlaceholder="Phone" color="secondary" />
          </Grid>
          <Grid>
            <Input bordered labelPlaceholder="Location" color="success" />
          </Grid>
        </Grid.Container>
        <Spacer y={1} />

        <Checkbox.Group
          label="Select Chains"
          orientation="horizontal"
          color="secondary"
          defaultValue={["ethereum"]}
        >
          <Checkbox value="ethereum">Ethereum</Checkbox>
          <Checkbox value="avalanche">Avalanche</Checkbox>
          <Checkbox value="binance">Binance Smart Chain</Checkbox>
          <Checkbox value="solana">Solana</Checkbox>
        </Checkbox.Group>
        <Spacer y={1} />

        <Checkbox.Group
          label="Select Technologies"
          orientation="horizontal"
          color="secondary"
          defaultValue={["javascript", "typescript"]}
        >
          <Checkbox value="javascript">JavaScript</Checkbox>
          <Checkbox value="typescript">TypeScript</Checkbox>
          <Checkbox value="node">Node.js</Checkbox>
          <Checkbox value="react">React.js</Checkbox>
        </Checkbox.Group>
        <Spacer y={1} />

        <Checkbox.Group
          label="Select Smart Contract Languages"
          orientation="horizontal"
          color="secondary"
          defaultValue={["Solidity"]}
        >
          <Checkbox value="solidity">Solidity</Checkbox>
          <Checkbox value="vyper">Vyper</Checkbox>
          <Checkbox value="yul">YUL</Checkbox>
          <Checkbox value="rust">Rust</Checkbox>
        </Checkbox.Group>
        <Spacer y={1} />
        <Row>
          <Button>WRITE CONTRACT</Button>
          <Input
            placeholder="Employers Address 0x0000000000000000000000000000000000000000"
            width="500px"
          />
        </Row>
        <Text>
          Your submission will write to the blockchain, and notify the wallet of
          your submission. Standby for your TX Hash for confirmation.
        </Text>
      </ThirdwebProvider>
    </NextUIProvider>
  );
}

export default MyApp;
