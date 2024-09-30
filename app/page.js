'use client'

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
							placeholder='Search Art Work / Creator'
						/>
					</div>
					<button className='bg-black text-white py-4 px-7 h-auto rounded-2xl'>
						<h4 className='popa-font ml-1 text-2xl uppercase'>
							Connect Wallet
						</h4>
					</button>
				</div>
			</aside>
		</div>
	)
}
