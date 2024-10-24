'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '/public/Logo.svg';
import InstagramIcon from '/public/inst.svg';
import InbookIcon from '/public/inbook.svg';
import FacebookIcon from '/public/facebook.svg';
import TwitterIcon from '/public/twitter.svg';
import TrustIcon from '/public/trust.svg';
import ReviewsIcon from '/public/revies.svg';

export default function Home() {
  // State to manage sidebar visibility
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  // Parallax effect
  useEffect(() => {
    const elem = document.querySelector('#parallax');

    if (!elem) {
      console.error('Element with id #parallax not found.');
      return;
    }

    const handleMouseMove = e => {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;

      const _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      const _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      const _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;

      const backgroundPosition = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = backgroundPosition;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const DragScrollComponent = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
      const container = e.currentTarget;
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const container = e.currentTarget;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scrolling speed
      container.scrollLeft = scrollLeft - walk;
    };

    return (
      <div
        className="dragscroll w-full h-[500px] overflow-auto flex flex-row gap-8"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
         <div className="min-w-[300px] h-[340px] bg-white p-4 shadow-lg rounded-3xl">
    <h3 className="text-lg font-bold mb-2">Card 1</h3>
    <p>Some content inside card 1</p>
  </div>
  <div className="min-w-[300px] h-[340px] bg-white p-4 shadow-lg rounded-3xl">
    <h3 className="text-lg font-bold mb-2">Card 2</h3>
    <p>Some content inside card 2</p>
  </div>
  <div className="min-w-[300px] h-[340px] bg-white p-4 shadow-lg rounded-3xl">
    <h3 className="text-lg font-bold mb-2">Card 3</h3>
    <p>Some content inside card 3</p>
  </div>
  <div className="min-w-[300px] h-[340px] bg-white p-4 shadow-lg rounded-3xl">
    <h3 className="text-lg font-bold mb-2">Card 4</h3>
    <p>Some content inside card 4</p>
  </div>
  <div className="min-w-[300px] h-[340px] bg-white p-4 shadow-lg rounded-3xl">
    <h3 className="text-lg font-bold mb-2">Card 5</h3>
    <p>Some content inside card 5</p>
  </div>
      </div>
    );
  };

	return (
		<div className=''>
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

			<header className='flex justify-center px-3 xl:px-28 lg:px-12'>
				<div className='py-6 hidden justify-between w-full md:flex gap-9'>
					<div className='flex gap-7 justify-start'>
						<button className='flex items-center'>
							<Image src='/Logo.svg' alt='Logo' width={50} height={50} />
						</button>
						<div className='inter-font uppercase flex items-center gap-2 xl:gap-9'>
							<h4 className='text-black opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-300'>
								Discover
							</h4>
							<h4 className='text-black opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-300'>
								Creators
							</h4>
							<h4 className='text-black opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-300'>
								Sell
							</h4>
							<h4 className='text-black opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-300'>
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
								className='inter-font bg-[#EDEDED] focus:outline-none transition-opacity duration-300'
								type='text'
								placeholder='Search Art Work / Creator'
							/>
						</div>
						<button className='bg-black text-white py-4 px-7 h-auto rounded-2xl hover:cursor-pointer hover:text-black hover:bg-white border-2 hover:border-2 hover:border-black transition duration-300'>
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
			<div className='flex justify-center px-3 xl:px-28 lg:px-12'>
				<div className='mt-8 visible md:hidden flex flex-col items-center w-full'>
					<div className='pt-6 visible flex items-center justify-center w-full'>
						<p className="uppercasecase relative text-gray-500 popa-font flex items-center before:content-[''] before:block before:w-16 before:h-[1px] before:bg-gray-500 before:mr-4">
							OVER 1M CREATORS
						</p>
					</div>
					<h1 className='text-center popa-font text-4xl flex-wrap w-80%'>
						Discover And Create NFTs
					</h1>
					<div className='flex text-base popa-font w-70% text-center'>
						<p>
							Discover, Create and Sell NFTs On Our NFT Marketplace With Over
							Thousands Of NFTs And Get a <b>$20 bonus.</b>
						</p>
					</div>
					<section className='flex justify-center mt-4 gap-4'>
						<button className='w-50% py-4 px-5 rounded-xl bg-black text-white border-2 border-black uppercase popa-font hover:cursor-pointer hover:text-black hover:bg-white hover:border-2 hover:border-black transition duration-300'>
							explore more
						</button>
						<button className='w-40% py-4 px-5 rounded-xl bg-white text-black border-2 border-black uppercase popa-font hover:cursor-pointer hover:text-white hover:bg-black transition duration-300'>
							create NFT
						</button>
					</section>
					<section className='flex justify-center items-center gap-5 w-full'>
						<TrustIcon width={200} height={100} alt='Trust' />
						<ReviewsIcon width={200} height={100} alt='Reviews' />
					</section>
				</div>

				{/* Этот блок скрыт на маленьких устройствах и показывается на средних и больших */}
				<div className='mt-14 hidden md:grid grid-cols-2 gap-10 w-full h-auto'>
					{/* First column with a large gap */}
					<div className='text-left h-auto '>
						<h1 className='popa-font text-5xl flex-wrap w-3/4'>
							Discover And Create NFTs
						</h1>
						<div className='flex text-base popa-font w-3/4 mt-7'>
							<p>
								Discover, Create and Sell NFTs On Our NFT Marketplace With Over
								Thousands Of NFTs And Get a <b>$20 bonus.</b>
							</p>
						</div>

						{/* Button section */}
						<section className='flex mt-7 gap-5'>
							<button className='w-2/6 py-4 px-5 rounded-xl bg-black text-white border-2 border-black uppercase popa-font hover:cursor-pointer hover:text-black hover:bg-white hover:border-black transition duration-300'>
								explore more
							</button>
							<button className='w-2/6 py-4 px-5 rounded-xl bg-black text-white border-2 border-black uppercase popa-font hover:cursor-pointer hover:text-black hover:bg-white hover:border-2 hover:border-black transition duration-300'>
								create NFT
							</button>
						</section>
						<section className='flex flex-row gap-8 mt-7 pl-1'>
							<div className='flex flex-col'>
								<h2 className='popa-font text-black text-3xl uppercase'>
									430K+
								</h2>
								<p className='popa-font text-gray-600 '>Art Works</p>
							</div>
							<div className='flex flex-col'>
								<h2 className='popa-font text-black text-3xl uppercase'>
									159K+
								</h2>
								<p className='popa-font text-gray-600 '>Creators</p>
							</div>
							<div className='flex flex-col'>
								<h2 className='popa-font text-black text-3xl uppercase'>87K</h2>
								<p className='popa-font text-gray-600 '>Collections</p>
							</div>
						</section>
					</div>

					{/* Second column */}
					<div id='parallax' class='parallax'></div>
				</div>
			</div>
			<div className='bg-slate-200 w-full'>
				 <DragScrollComponent />

      <div className='flex justify-center mt-8'>
        <h2 className='inter-font text-2xl'>Join us</h2>
      </div>


			</div>

			<footer className='py-6 visible w-full bg-black text-white  flex-col xl:px-28 lg:px-12'>
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
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block transition-opacity duration-300'>
								Privacy Policy
							</span>
						</b>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase'>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block transition-opacity duration-300'>
								Terms & Conditions
							</span>
						</b>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase '>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block transition-opacity duration-300'>
								About Us
							</span>
						</b>
						<b className='inter-font font-thin ml-1 text-2xl md:text-xl text-nowrap  md:capitalize uppercase'>
							<span className='hover:opacity-100 hover:cursor-pointer opacity-50 inline-block transition-opacity duration-300'>
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
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300'>
							<InstagramIcon width={24} height={24} />
						</div>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300'>
							<InbookIcon width={24} height={24} />
						</div>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300'>
							<FacebookIcon width={24} height={24} />
						</div>
						<div className='opacity-50 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300'>
							<TwitterIcon width={24} height={24} />
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
