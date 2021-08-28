import { useState } from 'react';
import Web3 from "web3";

import gif from './assets/148-167_40_04.gif';
import TheFacesFund from './abi/TheFacesFund.json'

const Mint = () => {
	// Wallet state
	const [signedIn, setSignedIn] = useState(false);
	const [walletAddress, setWalletAddress] = useState(null);

	// Minting state
	const [facesFundContract, setFacesFundContract] = useState(null);
	const [numTokensToPurchase, setNumTokensToPurchase] = useState(0); // Should this default to 0?

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

				// Set to desired network i.e. "rinkeby" for testing
				if (network !== "mainnet") {
					console.log(network);
					alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here");
				}
				else {
					let wallet = accounts[0];
					setWalletAddress(wallet);
					setSignedIn(true);
					getContractData(wallet);
				}
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
		if (facesFundContract) {
			const price = Number(tokenPrice)  * numTokens;
			const gasAmount = await facesFundContract.methods.mint(numTokens).estimateGas({ from: walletAddress, value: price });

			console.log("Estimated gas:", gasAmount);
		
			facesFundContract.methods
				.mint(numTokens)
				.send({ from: walletAddress, value: price, gas: String(gasAmount) })
				.on('transactionHash', (hash => {
					console.log("Transaction Hash:", hash);
				}));
		} else {
			// TODO: Handle wallet not connected
			// This should never happen. The button should be disabled if the wallet is not connected
			console.log("Wallet not connected");
		}
	}

	const mintButton = saleStarted ? (
		<>
			<button
				className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
				onClick={() => mint(numTokensToPurchase)}
			>
				Mint
			</button>
			<p>
				Mint {numTokensToPurchase} Faces for {(tokenPrice * numTokensToPurchase) / (10 ** 18)} ETH + GAS
			</p>
		</>
	) : (
		<button
			className="disabled:opacity-50 block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
			disabled
		>
			Sale has not started	
		</button>
	)

	return (
		<div className="min-h-screen">
			<div className="relative overflow-hidden">
			<main>
				<div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
					<div className="mx-auto max-w-7xl lg:px-8">
						<div className="lg:grid lg:grid-cols-2 lg:gap-8">
							<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
								<div className="lg:py-24">
									<h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
										<span className="block">Mint a Face Token</span>
									</h1>
									<div className="mt-10 sm:mt-12">
										{walletAddress ? (
										<button
											className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 mb-3"
											onClick={signIn}
										>
											Connect Wallet	
										</button>
										) : (
										<button
											className="block w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 mb-3"
										>
											Connected	
										</button>
										)}
										<div className="sm:flex">
											<div className="min-w-0 flex-1">
											<label htmlFor="text" className="sr-only">
												Number of tokens to mint	
											</label>
											<input
												id="num-tokens"
												type="text"
												placeholder="Number of tokens to mint (max 20)"
												className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
												min="0"
												max="20"
												value={numTokensToPurchase}
												onChange={ e => setNumTokensToPurchase(e.target.value) }
											/>
											<p className="mt-3">Number of tokens to mint (max 20)</p>
											</div>
											<div className="mt-3 sm:mt-0 sm:ml-3">
												{mintButton}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative flex justify-items-center items-center">
								<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
									<img id="token-gif" src={gif} alt="Token GIF"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				</main>
			</div>
			<div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
			<div className="max-w-max lg:max-w-7xl mx-auto">
				<div className="relative z-10 mb-8 md:mb-2 md:px-6">
					<div className="text-base max-w-prose lg:max-w-none">
						<h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							How does this work?
						</p>
					</div>
				</div>
				<div className="relative">
					<svg
						className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
						<pattern
							id="95e8f2de-6d30-4b7e-8159-f791729db21b"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
						</pattern>
						</defs>
						<rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
					</svg>
					<svg
						className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
						<pattern
							id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
						</pattern>
						</defs>
						<rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
					</svg>
					<div className="relative md:bg-white md:p-6">
						<div className="lg:grid lg:grid-cols-2 lg:gap-6">
							<div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
								<p>
								Ultrices ultricies a in odio consequat egestas rutrum. Ut vitae aliquam in ipsum. Duis nullam placerat
								cursus risus ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut rerum. Perspiciatis iusto
								mollitia iste minima soluta id.
								</p>
								<ol>
								<li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
								<li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
								</ol>
								<p>
								Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque scelerisque interdum
								blandit lectus. Nec viverra amet ac facilisis vestibulum. Vestibulum purus nibh ac ultricies congue.
								</p>
							</div>
							<div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
								<p>
								Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
								eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
								</p>
								<p>
								Eu leo risus porta integer suspendisse sed sit ligula elit. Elit egestas lacinia sagittis pellentesque
								neque dignissim vulputate sodales. Diam sed mauris felis risus, ultricies mauris netus tincidunt.
								Mauris sit eu ac tellus nibh non eget sed accumsan. Viverra ac sed venenatis pulvinar elit. Cras diam
								quis tincidunt lectus. Non mi vitae, scelerisque felis nisi, netus amet nisl.
								</p>
								<p>
								Eu eu mauris bibendum scelerisque adipiscing et. Justo, elementum consectetur morbi eros, posuere
								ipsum tortor. Eget cursus massa sed velit feugiat sed ut. Faucibus eros mauris morbi aliquam nullam.
								Scelerisque elementum sit magna ullamcorper dignissim pretium.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Mint;