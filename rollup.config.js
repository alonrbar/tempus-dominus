import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/tempus-dominus.ts',
  output: [{
      file: 'dist/cjs/tempus-dominus.js',
      format: 'cjs',
      sourcemap: true,
      globals: {
        '@popperjs/core': 'Popper',
      },
    },
    {
      file: 'dist/es/tempus-dominus.js',
      format: 'es',
      sourcemap: true,
      globals: {
        '@popperjs/core': 'Popper',
      },
    }
  ],
  external: ['@popperjs/core'],
  plugins: [typescript()],
};