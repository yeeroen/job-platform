// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxt/eslint',
      '@nuxt/ui',
      '@nuxt/a11y',
      '@nuxt/hints',
      '@nuxt/image',
      '@nuxthub/core',
    ],

    devtools: {
        enabled: true
    },

    css: ['~/assets/css/main.css'],

    routeRules: {
        '/': {prerender: true}
    },

    compatibilityDate: '2025-01-15',

    hub: {
        db: {
            dialect: 'sqlite',
            driver: 'd1',
            connection: {
                databaseId: 'ad349ac2-1742-483c-8008-7f5d030d25fc'
            },
        },
        cache: {
            driver: 'cloudflare-kv-binding',
            namespaceId: '816fc73af76948a7935fee8a52db7290'
        },
        blob: {
            driver: 'cloudflare-r2',
            bucketName: 'job-platform-blob'
        }
    },

    eslint: {
        config: {
            standalone: false,
        },
    },
})