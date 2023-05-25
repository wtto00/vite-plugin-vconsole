import {name} from '../package.json';

const parseVConsoleOptions = (config) =>
  Object.keys(config).reduce((code, key) => {
    const value = config[key];
    if (typeof value === 'function') {
      if (/^[(f]/.test(value.toString())) {
        code += `${key}: ${value},`;
        return code;
      } else {
        code += `${value},`;
        return code;
      }
    }
    code += `${key}: ${JSON.stringify(config[key])},`;
    return code;
  }, '');

/**
 * vite-plugin-vconsole
 * @param {import('../types').viteVConsoleOptions} opt options
 * @return {import('vite').Plugin} vite plugin
 */
export function viteVConsole(opt) {
  let viteConfig;
  let isDev = false;
  const {entry, enabled = true, localEnabled = false, resizeObserverPolyfill = false, config = {}} = opt;

  // Compatible to solve the windows path problem
  let entryPath = Array.isArray(entry) ? entry : [entry];
  if (process.platform === 'win32') {
    entryPath = entryPath.map((item) => item.replace(/\\/g, '/'));
  }

  return {
    name: 'vite:vconsole',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
      isDev = viteConfig.command === 'serve';
    },
    transform(_source, id) {
      const enabledTruly = (localEnabled && isDev) || (enabled && !isDev);
      if (entryPath.includes(id) && enabledTruly) {
        const code =
          '/* eslint-disable */;' +
          (resizeObserverPolyfill ? `import '${name}/dist/resizeObserverPolyfill';` : '') +
          `import VConsole from 'vconsole';` +
          `new VConsole({${parseVConsoleOptions(config)}});` +
          '/* eslint-enable */' +
          _source;
        return {
          code,
          map: null, // support source map
        };
      }
      return {
        code: _source,
        map: null, // support source map
      };
    },
  };
}
