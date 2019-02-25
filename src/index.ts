import Timeline from './Timeline';
import { AxisBody, AxisScale, AxisMilestone, ExtensionManager } from 'short-night';
import { DEBUG } from 'short-night/common/definitions';

import 'short-night/styles.scss';
import './styles.scss';

if (DEBUG) {
    console.log(`\
"Answer me sir. Are you guarding the righteousness, or just the rule?"
"Let me do answer you! \
I choose the rule, because only the rule can brought the true righteousness!"
`);
}

export async function draw(
    el: string | HTMLElement,
    events:Timeline['drawInfo']['events'],
):Promise<Timeline> {
    const { container, canvas } = Timeline.mount(el, 'rules');
    const timeline = new Timeline({
        canvas,
        container,
    });

    timeline.drawInfo.events = events;
    await timeline.apply();
    timeline.draw();
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

export async function drawFrom(
    el: string | HTMLElement,
    data: any,
):Promise<Timeline> {
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
                    if (config.protagonist && AxisScale.is(config.protagonist)) return 0;
                    if (config.protagonist && AxisMilestone.is(config.protagonist)) return 0;
                    return 70;
                },
            },
        }),
    });

    await timeline.drawFrom(data);
    return timeline;
}

(<any>window).Rules = {
    drawFrom,
    draw,
    drawWithAnimation,
};
