import { useState, useEffect } from 'react';
import Web3 from "web3";

import TheFacesFund from './abi/TheFacesFund.json'

const Mint = () => {
	// Wallet state
	const [signedIn, setSignedIn] = useState(false);
	const [walletAddress, setWalletAddress] = useState(null);

	// Minting state
	const [facesFundContract, setFacesFundContract] = useState(null);

	// Current contract data
	const [totalSupply, setTotalSupply] = useState(0);
	const [saleStarted, setSaleStarted] = useState(false);
	const [tokenPrice, setTokenPrice] = useState(0);

	const signIn = async () => {
		// Check if metamask is installed.
		// TODO: Check once metamask is installed or instruct to refresh page
		if (window.ethereum) {
			if (typeof window.web3 !== 'undefined') {
				// Use existing gateway
				window.web3 = new Web3(window.ethereum);
			} else {
				// TODO: Don't make this an alert
				alert("No Ethereum interface injected into browser. Read-only access");
			}
	
			try {
				const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				const network = await window.web3.eth.net.getNetworkType();

				if (network !== "private") {
					console.log(network);
					alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here");
				}

				let wallet = accounts[0];
				setWalletAddress(wallet);
				setSignedIn(true);
				getContractData(wallet);
			}
			catch (e) {
				// TODO: Handle error. Likely the user rejected the login
				if (e.code === 4001) {
					// User rejected request
					console.log('User rejected request:', e);
				}
				else {
					console.error(e);
				}
			}
		}
	}

	// Do we need a sign out function?

	const getContractData = async wallet => {
		const networkId = await window.web3.eth.net.getId();

		const abi = TheFacesFund.abi;
		const address = TheFacesFund.networks[networkId].address;
		const facesFundContract = new window.web3.eth.Contract(abi, address);
		setFacesFundContract(facesFundContract);

		const salebool = await facesFundContract.methods.saleIsStarted().call();
		setSaleStarted(salebool);

		const totalSupply = await facesFundContract.methods.totalSupply().call();
		setTotalSupply(totalSupply);

		const facePrice = await facesFundContract.methods.getPrice().call();
		setTokenPrice(facePrice);
	}

	const mint = async (numTokens) => {
		this.state.facesFundContract.methods.mint(numTokens)
			.send({ from: this.state.walletAddress, value: numTokens * this.state.tokenPrice})
	}

	return (
		<button
			type="button"
			className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			onClick={signIn}
		>
			Connect
		</button>
	);
};

export default Mint;