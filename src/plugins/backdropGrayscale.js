import { baseRules } from './backdropFilter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    matchUtilities(
      {
        'backdrop-grayscale': (value, { includeBase }) => {
          if (config('mode') === 'jit') {
            includeBase(baseRules)
          }

          return {
            '--tw-backdrop-grayscale': `grayscale(${value})`,
            ...(config('mode') === 'jit' ? { 'backdrop-filter': 'var(--tw-backdrop-filter)' } : {}),
          }
        },
      },
      {
        values: theme('backdropGrayscale'),
        variants: variants('backdropGrayscale'),
        type: 'any',
      }
    )
  }
}
