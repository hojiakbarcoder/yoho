'use server'

import { currentUser } from '@clerk/nextjs/server'
import { StreamClient } from '@stream-io/node-sdk'

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY
const apiSecretKey = process.env.STREAM_SECRET_KEY

export const tokenProvider = async () => {
	const user = await currentUser()

	if (!user) throw new Error('User not found')
	if (!apiKey) throw new Error('No API key')
	if (!apiSecretKey) throw new Error('No API secret')

	const client = new StreamClient(apiKey, apiSecretKey)

	const validity = 60 * 60

	const issued = Math.floor(Date.now() / 1000) - 60

	const token = client.generateUserToken({
		user_id: user.id,
		validity_in_seconds: validity,
		issued,
	})

	return token
}
