# vite-plugin-vconsole

[![](https://img.shields.io/npm/v/@wtto00/vite-plugin-vconsole.svg?style=flat-square)](https://www.npmjs.com/package/@wtto00/vite-plugin-vconsole)
[![](https://img.shields.io/npm/l/@wtto00/vite-plugin-vconsole.svg?style=flat-square)](https://www.npmjs.com/package/@wtto00/vite-plugin-vconsole)
[![](https://img.shields.io/npm/dt/@wtto00/vite-plugin-vconsole.svg?style=flat-square)](https://www.npmjs.com/package/@wtto00/vite-plugin-vconsole)

> vite plugin for vconsole
>
> 一个适用于 Vite2+的插件，帮助开发者在各个环境下方便使用 VConsole 的功能。可以方便配置区分环境，根据环境动态加载 VConsole，支持多页面配置。

## 亮点

参考 [vadxq/vite-plugin-vconsole](https://github.com/vadxq/vite-plugin-vconsole)

- 🌟 内置 `vconsole`，无需额外安装
- 🌟 内置 `resize-observer-polyfill`，兼容 `iOS12` 等旧浏览器。

## 安装

**node version:** >=12.0.0

**vite version:** >=2.0.0

```bash
pnpm add @wtto00/vite-plugin-vconsole -D
# or
# npm i @wtto00/vite-plugin-vconsole -D
# yarn add @wtto00/vite-plugin-vconsole -D
```

## 使用

### vite.config.ts 配置

- **Vue** 简单配置

```ts
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {viteVConsole} from '@wtto00/vite-plugin-vconsole';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVConsole({
      entry: path.resolve('src/main.ts'), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
      localEnabled: true,
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark',
      },
    }),
  ],
});
```

- **Vue** 多页面简单配置

```ts
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {viteVConsole} from '@wtto00/vite-plugin-vconsole';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVConsole({
      entry: [path.resolve('src/main.ts')], // 每个页面的入口文件，和上面不一样的地方，这里是一个数组
      localEnabled: true,
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark',
      },
    }),
  ],
});
```

- **React** 简单配置

```ts
import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import {viteVConsole} from '@wtto00/vite-plugin-vconsole';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteVConsole({
      entry: path.resolve('src/main.tsx'),
      localEnabled: true,
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark',
      },
    }),
  ],
});
```

- 区分开发环境和生产打包环境

```ts
// 你可以使用 command / mode 来区分是否使用
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteVConsole } from '@wtto00/vite-plugin-vconsole';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteVConsole({
        entry: [path.resolve('src/main.ts')], // 入口文件
        localEnabled: command === 'serve', // serve开发环境下
        enabled: command !== 'serve' || mode === 'test', // 打包环境下/发布测试包
        config: { // vconsole 配置项
          maxLogNumber: 1000，
          theme: 'light'
        }
      })
    ],
  };
};
```

## 配置

| 配置项       | 类型                                                                                                                 | 是否必须 | 默认值 | 说明                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------------------------- |
| entry        | `string \| string[]`                                                                                                 | 是       | -      | 必须提供，支持多入口                                          |
| localEnabled | `boolean`                                                                                                            | 否       | false  |                                                               |
| enabled      | `boolean`                                                                                                            | 否       | true   |                                                               |
| config       | [`VConsoleOptions`](https://github.com/Tencent/vConsole/blob/dev/doc/public_properties_methods_CN.md#vconsoleoption) | 否       | {}     | 传递给 [vconsole](https://github.com/Tencent/vConsole) 的属性 |

## License

[MIT](LICENSE)
