import StreamVideoProvider from '@/providers/StreamClientProvider'
import { ChildProps } from '@/types'
import { FC } from 'react'

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	)
}

export default RootLayout
