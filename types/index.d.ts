interface Window {
  VConsole: typeof import('vconsole').default;
}

export interface viteVConsoleOptions {
  entry: string[] | string; // entry file
  localEnabled?: boolean; // serve dev enabled
  enabled?: boolean; // enabled
  config?: import('core/options.interface').VConsoleOptions; // vconsole option
}

export declare function viteVConsole(opt: viteVConsoleOptions): import('vite').Plugin;
