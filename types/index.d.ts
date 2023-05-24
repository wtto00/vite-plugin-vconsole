interface Window {
  VConsole: typeof import('vconsole').default;
}

export interface viteVConsoleOptions {
  /**
   * 入口文件
   * @requires
   * @example path.resolve('src/main.tsx')
   * @example [path.resolve('src/main.ts')]
   */
  entry: string[] | string; // entry file
  /**
   * 开发环境下是否启用
   * @default false
   */
  localEnabled?: boolean;
  /**
   * 打包环境下是否启用
   * @default true
   */
  enabled?: boolean;
  /**
   * 是否加载 resize-observer-polyfill 以适配低版本浏览器
   * @default false
   */
  resizeObserverPolyfill?: boolean;
  /**
   * 传递给 vconsole 的配置参数
   * @link https://github.com/Tencent/vConsole/blob/dev/doc/public_properties_methods_CN.md#vconsoleoption
   */
  config?: import('core/options.interface').VConsoleOptions;
}

export declare function viteVConsole(opt: viteVConsoleOptions): import('vite').Plugin;
