import ResizeObserver from 'resize-observer-polyfill';
import VConsole from 'vconsole';

if (!window.ResizeObserver) window.ResizeObserver = ResizeObserver;
window.VConsole = VConsole;
