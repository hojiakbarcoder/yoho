import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'
import '@stream-io/video-react-sdk/dist/css/styles.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { FC } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'

export const metadata: Metadata = {
	title: 'Yoho zoom clone',
	description: 'Video calling app',
	icons: { icon: '/icons/logo.svg' },
}

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<html lang='en'>
			<ClerkProvider
				appearance={{
					variables: {
						colorText: '#fff',
						colorPrimary: '#0E78F9',
						colorBackground: '#1c1f2e',
						colorInputBackground: '#252a41',
						colorInputText: '#fff',
					},
				}}
			>
				<body className={`${montserrat.className} bg-dark-2 antialiased`}>
					{children}
					<Toaster />
				</body>
			</ClerkProvider>
		</html>
	)
}

export default RootLayout
