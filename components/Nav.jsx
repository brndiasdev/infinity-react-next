"use client";

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

const Nav = () => {
	const {data: session} = useSession();

	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();
	}, []);

	return (
		<nav className='flex-between mb-16 w-full pt-3'>
			<Link
				href='/'
				className='flex-center flex gap-2'>
				<Image
					src='/assets/icons/logo-nobg.gif'
					alt='logo'
					width={75}
					height={75}
					className='object-contain'
					autoPlay
					loop
				/>
			</Link>

			{/* Desktop Navigation */}
			<div className='hidden sm:flex'>
				{session?.user ? (
					<div className='flex gap-3 md:gap-5'>
						<Link
							href='/blog'
							className='black_btn'>
							Blog
						</Link>

						<button
							type='button'
							onClick={signOut}
							className='outline_btn'>
							Sair
						</button>

						<Link href='/profile'>
							<Image
								src={session?.user.image}
								width={37}
								height={37}
								className='rounded-full'
								alt='profile'
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type='button'
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
									className='purple_btn'>
									Sign in
								</button>
							))}
					</>
				)}
			</div>

			{/* Mobile Navigation */}
			<div className='relative flex sm:hidden'>
				{session?.user ? (
					<div className='flex'>
						<Image
							src={session?.user.image}
							width={37}
							height={37}
							className='rounded-full'
							alt='profile'
							onClick={() => setToggleDropdown(!toggleDropdown)}
						/>

						{toggleDropdown && (
							<div className='dropdown'>
								<Link
									href='/profile'
									className='dropdown_link'
									onClick={() => setToggleDropdown(false)}>
									My Profile
								</Link>
								<Link
									href='/blog'
									className='dropdown_link'
									onClick={() => setToggleDropdown(false)}>
									Create Prompt
								</Link>
								<button
									type='button'
									onClick={() => {
										setToggleDropdown(false);
										signOut();
									}}
									className='black_btn mt-5 w-full'>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type='button'
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
									className='purple_btn'>
									Sign in
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
