import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
      <ThirdwebProvider
        desiredChainId={ChainId.Goerli}
        chainRpc={{
          [ChainId.Goerli]:
            "https://goerli.infura.io/v3/c2dd6f52f0784c0da49637db4e20addd",
        }}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    );
}

export default MyApp
