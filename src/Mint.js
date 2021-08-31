import { Fragment, useState } from 'react';
import Web3 from "web3";
import { ExclamationCircleIcon, XIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';

import gif from './assets/148-167_40_04.gif';
import TheFacesFund from './abi/TheFacesFund.json';

const defaultErrorTitle = 'Whoops!';
const defaultErrorMessage = 'Looks like something went wrong! If this issue persists please reach out to the team on Discord and we will get back to you ASAP.';

const Mint = () => {
	// Wallet state
	const [signedIn, setSignedIn] = useState(false);
	const [walletAddress, setWalletAddress] = useState(null);

	// Minting state
	const [facesFundContract, setFacesFundContract] = useState(null);
	const [numTokensToPurchase, setNumTokensToPurchase] = useState(1);
	const [validNumTokens, setValidNumTokens] = useState(true);
	const [showNote, setShowNote] = useState(false);
	const [errorTitle, setErrorTitle] = useState(defaultErrorTitle);
	const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

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
	
				try {
					const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
					const network = await window.web3.eth.net.getNetworkType();

					// Set to desired network i.e. "rinkeby" for testing
					if (network !== "rinkeby") {
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
					// TODO: Handle error.
					if (e.code === 4001) {
						// User rejected request
						setErrorMessage('It looks like your wallet connection request failed! If you would like to mint a token please try again.');
						console.log('User rejected request:', e);
					}
					else if (e.code === -32002) {
						setErrorMessage('It looks like there was an issue connecting your wallet (you may have accidentally exited out of your connection window). Please refresh the page and try again. If this issue persists please reach out to our team on Discord and we will get back to you ASAP!');
					}
					else {
						console.error(e);
					}
					setShowNote(true);
				}
			} else {
				setErrorMessage("No Ethereum interface injected into browser. Make sure you have the Metamask extension installed!");
				setShowNote(true);
			}
		}
		else {
			setErrorMessage('It looks like you may not have Metamask installed. Please see the instructions below to connect your wallet.');
			setShowNote(true);
		}
	}

	// Do we need a sign out function?

	const getContractData = async wallet => {
		const networkId = await window.web3.eth.net.getId();

		const abi = TheFacesFund.abi;
		const contractAddress = TheFacesFund.networks[networkId].address;
		const facesFundContract = new window.web3.eth.Contract(abi, contractAddress);

		setFacesFundContract(facesFundContract);

		const salebool = await facesFundContract.methods.saleIsStarted().call();
		setSaleStarted(salebool);

		const totalSupply = await facesFundContract.methods.totalSupply().call();
		setTotalSupply(totalSupply);

		const facePrice = await facesFundContract.methods.getPrice().call();
		setTokenPrice(facePrice);
	}

	const mint = async (numTokens) => {
		try {
			if (facesFundContract) {
				const price = Number(tokenPrice)  * numTokens;
				const gasAmount = await facesFundContract.methods.mint(numTokens).estimateGas({ from: walletAddress, value: price });

				console.log("Estimated gas:", gasAmount);
			
				facesFundContract.methods
					.mint(numTokens)
					.send({ from: walletAddress, value: price, gas: String(gasAmount) })
					.on('transactionHash', (hash => {
						console.log("Transaction Hash:", hash);
						// TODO: Remove console.logs
					}));
			} else {
				// TODO: Handle wallet not connected
				// This should never happen. The button should be disabled if the wallet is not connected
				setErrorMessage('It looks like there was a connection issue. Please refresh the page and try again. If this issue persists please reach out to the team on Discord and we will get back to you ASAP!');
				setShowNote(true);
				console.log("Wallet not connected");
			}
		}
		catch (e) {
			setErrorMessage('It looks like there was an error minting! Please make sure you have sufficient funds in your wallet. If this issue persists please reach out to the team on Discord and we will get back to you ASAP!');
			setShowNote(true);
			console.error(e);
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
			className="opacity-50 block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium"
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
									<div className="mt-10 sm:mt-12 h-36">
										{walletAddress ? (
										<button
											className="block w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 mb-3"
										>
											Connected
										</button>
										) : (
										<button
											className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 mb-3"
											onClick={signIn}
										>
											Connect Wallet
										</button>
										)}
										<div className="sm:flex">
											{saleStarted && <div className="min-w-0 flex-1">
												<label htmlFor="text" className="sr-only">
													Number of tokens to mint
												</label>
												<div className="relative rounded-md">
													<input
														id="num-tokens"
														type="text"
														placeholder="Number of tokens to mint"
														className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
														min="0"
														max="20"
														value={numTokensToPurchase}
														onChange={ e => {
															setNumTokensToPurchase(e.target.value || '');
															setValidNumTokens(e.target.value > 0 && e.target.value < 21);
														}}
													/>
													{!validNumTokens && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
														<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
													</div>}
												</div>
												{!validNumTokens && <p className="mt-2 text-sm text-red-600" id="email-error">
													You can only mint between 1 - 20 tokens.
												</p>}
											</div>}
											<div className={`mt-3 sm:mt-0 ${saleStarted ? 'sm:ml-3' : 'w-full'}`}>
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
										The Faces Fund is a set of 3000 NFTs (Non-Fungible Tokens) focused on community driven charity.
										An NFT is a token that is a part of the Ethereum blockchain that proves ownership of some asset.
										There is a lot of good material that explains Ethereum and NFTs a lot better than we do and so we encourage you to go dive in!
									</p>
								</div>
								<div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
									<p>
										How do I get a Face Token?
									</p>
									<ol>
										<li>Download and install the <a href="https://metamask.io/" target="_blank" rel="noreferrer">Metamask</a> chrome extension.</li>
										<li>If you are creating a new account with Metamask, then buy some Ethereum using the extension.</li>
										<li>Once you have the plugin installed click "Connect Wallet" above.</li>
										<li>Once your wallet has been connected you can Mint a new token or purchase an existing one on <a href="https://opensea.io/" target="_blank" rel="noreferrer">OpenSea.</a></li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<>
				{/* Global notification live region, render this permanently at the end of the document */}
				<div
					aria-live="assertive"
					className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
				>
					<div className="w-full flex flex-col items-center space-y-4 sm:items-end">
					{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
					<Transition
						show={showNote}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div className="p-4">
							<div className="flex items-start">
							<div className="flex-shrink-0">
								<ExclamationCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
							</div>
							<div className="ml-3 w-0 flex-1 pt-0.5">
								<p className="text-sm font-medium text-gray-900">{errorTitle}</p>
								<p className="mt-1 text-sm text-gray-500">{errorMessage}</p>
							</div>
							<div className="ml-4 flex-shrink-0 flex">
								<button
								className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								onClick={() => {
									setErrorMessage(defaultErrorMessage);
									setErrorTitle(defaultErrorTitle);
									setShowNote(false);
								}}
								>
								<span className="sr-only">Close</span>
								<XIcon className="h-5 w-5" aria-hidden="true" />
								</button>
							</div>
							</div>
						</div>
						</div>
					</Transition>
					</div>
				</div>
			</>
		</div>
	);
};

export default Mint;