import Timeline from './Timeline';
import { AxisBody, AxisScale, AxisMilestone, ExtensionManager } from 'short-night';
import { DEBUG } from 'short-night/common/definitions';
import { createDraw } from 'short-night/common/functions';
import { TimelineData } from 'short-night/types';
import * as Engine from 'short-night';

import 'short-night/styles.css';
import './styles.scss';

const originDraw = createDraw<Timeline, typeof Timeline>('rules', Timeline);

if (DEBUG) {
    console.log(`\
"Answer me sir. Are you guarding the righteousness, or just the rule?"
"Let me do answer you! \
I choose the rule, because only the rule can brought the true righteousness!"
`);
}

export { Timeline, Engine };

export async function draw(
    el :string | HTMLElement,
    data :Timeline['drawInfo']['events'] | TimelineData,
) :Promise<Timeline> {
    if (Array.isArray(data)) return originDraw(el, data);

    const { container, canvas } = Timeline.mount(el, 'rules');
    const timeline = new Timeline({
        canvas,
        container,
        ext: new ExtensionManager({
            breakpointAnimation: {
                autoScroll: false,
                playAnimation: true,
                timeoutCounter(point, config) {
                    if (config.protagonist && AxisBody.is(config.protagonist)) return 0;
                    if (config.protagonist && AxisScale.is(config.protagonist)) return 30;
                    if (config.protagonist && AxisMilestone.is(config.protagonist)) return 30;
                    return 50;
                },
            },
        }),
    });

    await timeline.import(data);
    return timeline;
}

export async function drawWithAnimation(
    el: string | HTMLElement,
    events:Timeline['drawInfo']['events'],
):Promise<Timeline> {
    const { container, canvas } = Timeline.mount(el, 'rules');
    const timeline = new Timeline({
        canvas,
        container,
        ext: new ExtensionManager({
            breakpointAnimation: {
                autoScroll: true,
                scrollDuration: 150,
                playAnimation: true,
                timeoutCounter(point, config) {
                    return config.forward ? 300 : 500;
                },
            },
        }),
    });

    timeline.drawInfo.events = events;
    await timeline.apply();
    timeline.draw();
    return timeline;
}
