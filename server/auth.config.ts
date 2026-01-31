import {defineServerAuth} from '@onmax/nuxt-better-auth/config'
import { admin, organization} from 'better-auth/plugins'

export default defineServerAuth({
    plugins: [
        admin(),
        organization(),
    ],
    user: {
        additionalFields: {
            accountType: {
                type: 'string',
                required: true,
                defaultValue: 'job_seeker',
                input: true,
            },
        }
    },
    trustedOrigins: [
        'http://localhost:3000',
    ],
    emailAndPassword: {
        enabled: true
    },
})
