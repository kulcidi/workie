'use client'
import Logo from '/public/Logo.svg'
import InstagramIcon from '/public/inst.svg'
import InbookIcon from '/public/inbook.svg'
import FacebookIcon from '/public/facebook.svg'
import TwitterIcon from '/public/twitter.svg'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
	// State to manage the visibility of the sidebar
	const [isAsideOpen, setIsAsideOpen] = useState(false)

	// Function to toggle sidebar visibility
	const toggleAside = () => {
		setIsAsideOpen(!isAsideOpen)
	}

	return (
		<div>
			<header className='flex justify-center px-6'>
				<div className='py-6 visible flex justify-between w-full md:hidden md:border-none border-solid border-b border-gray-500'>
					<button className='flex items-center'>
						<Image src='/Logo.svg' alt='Logo' width={50} height={50} />
						<b className='popa-font ml-1 text-3xl'>DiveSea</b>
					</button>
					<button onClick={toggleAside} className='z-50'>
						<Image src='/burger.svg' alt='Menu' width={30} height={30} />
					</button>
				</div>
			</header>

			<header className='flex justify-center px-0 xl:px-28 lg:px-12'>
				<div className='py-6 hidden justify-between w-full md:flex gap-9'>
					<div className='flex gap-7 justify-start'>
						<button className='flex items-center'>
							<Image src='/Logo.svg' alt='Logo' width={50} height={50} />
						</button>
						<div className='inter-font uppercase flex items-center gap-2 xl:gap-9'>
							<h4 className='text-gray-500 hover:text-black cursor-pointer'>
								Discover
							</h4>
							<h4 className='text-gray-500 hover:text-black cursor-pointer'>
								Creators
							</h4>
							<h4 className='text-gray-500 hover:text-black cursor-pointer'>
								Sell
							</h4>
							<h4 className='text-gray-500 hover:text-black cursor-pointer'>
								Stats
							</h4>
						</div>
					</div>
					<div className='flex gap-3 justify-between'>
						<div className='flex text-[#9D9D9D] bg-[#EDEDED] py-4 px-7 h-auto rounded-2xl gap-2 pr-8 lg:pr-16 items-center'>
							<Image
								className='h-[20px]'
								src='/search.svg'
								alt='Search'
								width={20}
								height={20}
							/>
							<input
								className='inter-font bg-[#EDEDED] focus:outline-none'
								type='text'
								placeholder='Search Art Work / Creator'
							/>
						</div>
						<button className='bg-black text-white py-4 px-7 h-auto rounded-2xl'>
							<h4 className='inter-font uppercase'>Connect Wallet</h4>
						</button>
					</div>
				</div>
			</header>

			<aside
				className={`w-9/12 h-screen bg-white shadow-custom fixed top-98px left-0 z-40 transform transition-transform duration-300 ${
					isAsideOpen ? 'translate-x-0' : '-translate-x-full'
				}`}>
				<div className='ml-5 flex flex-col gap-5 pt-8'>
					<b className='popa-font ml-1 text-3xl uppercase'>Discover</b>
					<b className='popa-font ml-1 text-3xl uppercase'>Creators</b>
					<b className='popa-font ml-1 text-3xl uppercase'>Sell</b>
					<b className='popa-font ml-1 text-3xl uppercase'>Stats</b>
				</div>
				<div className='flex flex-col gap-5 p-5 pt-80'>
					<div className='flex text-[#9D9D9D] bg-[#EDEDED] py-4 px-7 h-auto rounded-2xl gap-2 pr-8 lg:pr-16 items-center'>
						<Image
							className='h-[20px]'
							src='/search.svg'
							alt='Search'
							width={20}
							height={20}
						/>
						<input
							className='inter-font bg-[#ffffff0f] focus:outline-none'
							type='text'
							placeholder='Search'
						/>
					</div>
					<button className='bg-black text-white py-4 px-7 h-auto rounded-2xl'>
						<h4 className='popa-font ml-1 text-1xl uppercase'>
							Connect Wallet
						</h4>
					</button>
				</div>
			</aside>

			<footer className='py-6 visible w-full bg-black text-white flex justify-center flex-col xl:px-28 lg:px-12'>
				<div className='flex md:px-3 px-6 flex-col md:flex-row justify-between md:mb-9 mb-0'>
					<div className='flex w-full justify-between items-center'>
						<button className='flex flex-col items-start gap-4 mt-4'>
							<div className='flex items-center'>
								<Logo className='logo text-white' width={50} height={50} />
								<b className='popa-font ml-1 text-3xl'>DiveSea</b>
							</div>
						</button>

						<div className='flex gap-4 items-end mt-5 md:hidden'>
							<div>
								<InstagramIcon
									className='opacity-50 hover:opacity-100 hover:cursor-pointer'
									width={24}
									height={24}
								/>
							</div>
							<div>
								<InbookIcon
									className='opacity-50 hover:opacity-100 hover:cursor-pointer'
									width={24}
									height={24}
								/>
							</div>
							<div>
								<FacebookIcon
									className='opacity-50 hover:opacity-100 hover:cursor-pointer'
									width={24}
									height={24}
								/>
							</div>
							<div>
								<TwitterIcon
									className='opacity-50 hover:opacity-100 hover:cursor-pointer'
									width={24}
									height={24}
								/>
							</div>
						</div>
					</div>
					<div className='ml-5 flex flex-col md:flex-row md:w-auto gap-5 pt-8'>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase'>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block'>
								Privacy Policy
							</span>
						</b>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase'>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block'>
								Terms & Conditions
							</span>
						</b>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase'>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block'>
								About Us
							</span>
						</b>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase'>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block'>
								Contact
							</span>
						</b>
					</div>
				</div>

				<div className='mt-3  border-solid border-b border-white ml-4 mr-4 opacity-80'></div>
				<div className='md:mt-10 mt-4 md:mb-10 mx-3 flex flex-col md:flex-row justify-between items-center md:items-start'>
					<b className='text-gray-200 text-center md:text-left popa-font font-light opacity-40'>
						© 2023 DiveSea All Rights Reserved.
					</b>
					<div className='hidden gap-8 items-end md:flex'>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer'>
							<InstagramIcon width={24} height={24} />
						</div>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer'>
							<InbookIcon width={24} height={24} />
						</div>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer'>
							<FacebookIcon width={24} height={24} />
						</div>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer'>
							<TwitterIcon width={24} height={24} />
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
