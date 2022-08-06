
# Events for resizestart & resizestop

[![NPM version](https://img.shields.io/npm/v/resize-start-stop-events)](https://www.npmjs.com/package/resize-start-stop-events)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/resize-start-stop-events?label=size)](https://bundlephobia.com/result?p=resize-start-stop-events)
[![GitHub license](https://img.shields.io/github/license/formfcw/resize-start-stop-events)](./LICENSE)

Simple and lightweight package to apply `resizestart` and `resizestop` events, which are triggered at the beginning and the end of a `resize` event.



## Installation

```bash
npm i resize-start-stop-events
```
or

```bash
yarn add resize-start-stop-events
```

## Usage

Import `resize-start-stop-events` to apply `resizestart` and `resizestop` events to the `window` object.

```js
import 'resize-start-stop-events'
```

Add event listeners:

```js
window.addEventListener('resizestart', resizestartHandler);
window.addEventListener('resizestop', resizestopHandler);
```

Remove event listeners:

```js
window.removeEventListener('resizestart', resizestartHandler);
window.removeEventListener('resizestop', resizestopHandler);
```

## API

For more control import the default function from `resize-start-stop-events/api`.

```js
import applyResizeStartStopEvents from 'resize-start-stop-events/api'

applyResizeStartStopEvents(window, 200, 'isResizing')
```

Parameters:
- `element` … the element to apply the resize events (default: `window`)
- `stopDelay` … the delay in `ms` after the `resizestop` event should fire, when resizing stops (default: `200`)
- `isResizing` … the name of the property that is attached to the `element` – will be `true` while resizing (default: `'isResizing'`)

To check if the `element` is currently resizing, simply use its property `element.isResizing`
