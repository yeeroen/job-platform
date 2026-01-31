import antfu from '@antfu/eslint-config'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
    type: 'app',
    vue: true,
    imports: true,
    typescript: true,
    formatters: true,
    stylistic: {
        indent: 4,
    },
    ignores: ['.github/workflows/*.yml', 'app/assets/*.json'],
}, {
    rules: {
        'vue/block-order': ['error', {
            order: [
                'template',
                'script',
                'style',
            ],
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        }],
        'style/brace-style': ['error', '1tbs'],
    },
}))
