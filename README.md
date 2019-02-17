# Rules

Given a event data, drawn a beautiful timeline on canvas. Powered by short-night engine.

Example: [demo1](https://foxzilla.github.io/Rules/demo1.html)

![demo1](docs/demo1.png)

```ts
const events = [{
    date: '2017-5',
    title: 'Axis example 1',
    endDate: '2017-8',
    endText: 'The axis can avoid for each others',
}, {
    date: '2017-6',
    title: 'Axis example 2',
    endDate: '2017-9-1',
    endText: 'End point is 2017.9',
}, {
    date: '2017-9-1',
    title: 'Start of 2017.9',
}, {
    date: '2017-1-2',
    title: 'Near the milestone',
}, {
    date: '2016-12-15',
    endDate: '2017-2',
    title: 'Near the milestone',
    description: 'The date of end is 2017.2.',
}, {
    date: '2018-8-15',
    title: 'Close together 1',
}, {
    date: '2018-8-1',
    title: 'Close together 2',
}, {
    date: '2018-7-15',
    title: 'Close together 3',
    description: 'The event description.',
}, {
    date: '2018-7-1',
    title: 'Close together 4',
    description: 'The event description.',
}, {
    date: '2016-8-12',
    title: 'Close together 5',
    description: 'The event description. The event description. The event description.' +
        ' The event description. The event description.',
}, {
    date: '2016-8-15',
    title: 'Close together 6',
    description: 'The event description. The event description. The event description. ' +
        'The event description. The event description.',
}, {
    date: '2018-4-2',
    title: 'A event which title is very very very very very very very very very very long',
}, {
    date: '2018-3-9',
    title: '39s Day two years!',
}, {
    date: '2017-3-9',
    title: '39s Day one years!',
}, {
    date: '2016-3-9',
    title: '39s Day!',
    description: 'In japan and chinese, the pronunciation  of 39 is very like "Thank You". ' +
        'So some people call as Giving Day.',
}];
```

## Usage

### In Webpack

First, install it by npm
```sh
npm install --save rules-timeline
```

Then using it by ES6 modules:

```js
import { draw } from 'rules-timeline';
draw('#app', [
    {
        date: '2017-5',
        title: 'Axis docs 1',
        endDate: '2017-8',
        endText: 'The axis can avoid for each others',
    },
    // ...
]);
```

### In Browser:

Download and reference `dist/rules.js` in you project.

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <div id="app"></div>
    <script src="rules.js"></script>
    <script>
        Rules.draw('#app', [
            {
                date: '2017-5',
                title: 'Axis docs 1',
                endDate: '2017-8',
                endText: 'The axis can avoid for each others',
            },
            // ...
        ]);
    </script>
</body>
</html>
```

## APIs

There are 3 methods imported by entry file.

|     | draw() | drawWithAnimation() | drawFrom() |
| --- | ------ | ------------------- | ---------- |
| description | Draw a timeline by event info. | Like draw() but with animation. | Draw a timeline by data exported. |
| returned | Promise\<[Timeline](https://foxzilla.github.io/short-night/classes/_timeline_.timeline.html)\> | Promise\<[Timeline](https://foxzilla.github.io/short-night/classes/_timeline_.timeline.html)\> | Promise\<[Timeline](https://foxzilla.github.io/short-night/classes/_timeline_.timeline.html)\> |
| params | 1.el: string or HTMLElement; 2. events: Array<[EventInfo](#EventInfo)> | same as draw() | 1.el: string or HTMLElement; 2. data: a data exported by `timeline.export()`

### EventInfo

```ts
interface EventInfo {
    date :string,
    title :string,

    description? :string,
    endDate? :string | 'now',
    endText? :string,
}
```
