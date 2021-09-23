import { Connectors } from 'web3-react'
const { InjectedConnector, NetworkOnlyConnector } = Connectors
 
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })
 
const Infura = new NetworkOnlyConnector({
  providerURL: 'https://mainnet.infura.io/v3/...'
})

// const WalletConnect = Connectors.WalletConnectConnector({
//   api: WalletConnectApi,
//   bridge: ...,
//   supportedNetworkURLs: ...,
//   defaultNetwork: ...
// })
 
const connectors = { MetaMask, Infura }
// const connectors = { MetaMask, Infura, WalletConnect }

export default connectors;