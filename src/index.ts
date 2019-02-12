import Timeline from './Timeline';
import { ExtensionManager } from 'short-night';

import 'short-night/styles.scss';
import './styles.scss';

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
                playAnimation: true,
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
                playAnimation: true,
            },
        }),
    });

    await timeline.drawFrom(data);
    return timeline;
}
