import React from 'react'
import Web3Provider from 'web3-react'
import connectors from './Connectors'

export default function App () {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName={'ethers.js'|'web3.js'| null}
    >
      hello world
    </Web3Provider>
  )
}
