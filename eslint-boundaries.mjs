// Reglas de dependencia de la arquitectura por features.
// Importar en eslint.config.mjs: `import boundaries from './eslint-boundaries.mjs'` y hacer spread.
import boundaries from 'eslint-plugin-boundaries';

const boundariesConfig = [
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { boundaries },
    settings: {
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        // feature-index va antes que feature: patrones más específicos primero,
        // eslint-plugin-boundaries resuelve el tipo de un archivo por el primer match.
        { type: 'feature-index', pattern: 'src/features/*/index.ts', capture: ['name'], mode: 'file' },
        { type: 'feature', pattern: 'src/features/*/**', capture: ['name'] },
        { type: 'shared-services', pattern: 'src/services/**' },
        { type: 'shared', pattern: 'src/(components|hooks|utils|context|types|lib|styles)/**' },
      ],
    },
    rules: {
      // Regla 2 y 3: features no se importan entre sí; shared no importa features.
      'boundaries/element-types': ['error', {
        default: 'disallow',
        rules: [
          // app solo importa la API pública de features y lo compartido
          { from: 'app', allow: ['feature-index', 'shared', 'shared-services'] },
          // una feature solo se importa a sí misma y lo compartido
          { from: 'feature', allow: [['feature', { name: '${from.name}' }], 'shared', 'shared-services'] },
          { from: 'feature-index', allow: [['feature', { name: '${from.name}' }]] },
          { from: 'shared', allow: ['shared', 'shared-services'] },
          { from: 'shared-services', allow: ['shared', 'shared-services'] },
        ],
      }],
      // Regla 6: desde fuera de una feature solo se entra por index.ts.
      'boundaries/entry-point': ['error', {
        default: 'disallow',
        rules: [
          { target: ['feature'], allow: 'index.ts' },
          { target: ['app', 'shared', 'shared-services', 'feature-index'], allow: '**' },
        ],
      }],
    },
  },
  // Regla 5: solo services/ puede usar fetch directamente; el resto usa el service.
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/services/**', 'src/features/*/services/**'],
    rules: {
      'no-restricted-globals': ['error', {
        name: 'fetch',
        message: 'No llames fetch fuera de services/. Usa el service correspondiente o agrega un método a http.ts.',
      }],
    },
  },
  // Regla 1 y 4: nada de estado en app/, nada de React en utils/services.
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': ['error', {
        paths: [
          { name: 'react', importNames: ['useState', 'useEffect', 'useReducer', 'useContext'], message: 'app/ solo enruta. Mueve el estado a una feature.' },
        ],
      }],
    },
  },
  {
    files: ['src/**/utils/**/*.ts', 'src/**/services/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        paths: [{ name: 'react', message: 'utils/ y services/ son puros: sin React.' }],
      }],
    },
  },
];

export default boundariesConfig;
