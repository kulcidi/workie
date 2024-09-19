import Image from 'next/image'

export default function Home() {
	return (
		<div>
			{' '}
			<header className='flex justify-center px-6'>
				<div className='py-6 visible flex justify-between w-full md:hidden md:border-none border-solid border-b border-gray-500'>
					<button className='flex items-center'>
						<img src='/Logo.svg' alt='' />
						<b className='popa-font ml-1 text-3xl text'>DiveSea</b>
					</button>
					<button>
						<img src='/burger.svg' alt='' />
					</button>
				</div>
			</header>
			<header className='flex justify-center px-0 xl:px-28 lg:px-12'>
				<div className='py-6 hidden  justify-between w-full md:flex gap-9'>
					<div className='flex gap-7 justify-start'>
						<button className='flex items-center'>
							<img src='/Logo.svg' alt='' />
						</button>
						<div className='inter-font uppercase flex items-center gap-2 xl:gap-9'>
							<h4 className='text-gray-500 hover:text-black hover:cursor-pointer'>
								Discover
							</h4>
							<h4 className='text-gray-500 hover:text-black hover:cursor-pointer'>
								creators
							</h4>
							<h4 className='text-gray-500 hover:text-black hover:cursor-pointer'>
								Sell
							</h4>
							<h4 className='text-gray-500 hover:text-black hover:cursor-pointer'>
								stats
							</h4>
						</div>
					</div>
					<div className='flex gap-3 justify-between'>
						<div className='flex text-[#9D9D9D] bg-[#EDEDED] py-4 px-7 h-auto rounded-2xl gap-2 pr-8 lg:pr-16 items-center'>
							<img className='h-[20px]' src='/search.svg' alt='' />
							<input
								className='inter-font bg-[#EDEDED] focus:outline-none'
								type='text'
								placeholder='Search Art Work / Creator'
							/>
						</div>
						<button className=' bg-black text-white py-4 px-7 h-auto rounded-2xl'>
							<h4 className='inter-font uppercase'>Connect Wallet</h4>
						</button>
					</div>
				</div>
			</header>
		</div>
	)
}
