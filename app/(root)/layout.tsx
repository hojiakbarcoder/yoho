import { ChildProps } from '@/types'
import { FC } from 'react'

const RootLayout: FC<ChildProps> = ({ children }) => {
	return <main>{children}</main>
}

export default RootLayout
