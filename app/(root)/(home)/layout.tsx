import Navbar from '@/components/navbar/page'
import SideBar from '@/components/sidebar/page'
import { ChildProps } from '@/types'
import { FC } from 'react'

const HomeLayout: FC<ChildProps> = ({ children }) => {
	return (
		<main className='relative'>
			<Navbar />
			<div className='flex'>
				<SideBar />
				<section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
					<div className='w-full'>{children}</div>
				</section>
			</div>
		</main>
	)
}

export default HomeLayout
