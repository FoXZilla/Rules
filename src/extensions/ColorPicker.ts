import { Extension, ExtensionManager } from 'short-night/extensions';
import { Timeline, Event, EventBody, EventMark, EventAxis, Component } from 'short-night';
import { ExtraData } from 'short-night/common/Component';

declare module 'short-night/common/Component' {
    export interface ExtraData {
        mainColor ?:string;
    }
}

export default class ColorPicker implements Partial<Extension> {
    colors = [
        '#c283ca',
        '#6280c3',
        '#f6d53b',
        '#959595',
        '#e96060',
        '#adcb6d',
        '#7abbe0',
        '#e89235',
    ];
    startIndex = Math.floor(Math.random() * 3);
    constructor(public etx :ExtensionManager) {}
    async onApply(comp :Component) {
        if (Timeline.is(comp)) this.createColorIntoEvent(comp);
        if (
            EventBody.is(comp)
            || EventMark.is(comp)
            || EventAxis.is(comp)
        ) this.setColorIntoDrawInfo(comp);
    }
    onConstruct(comp :Component) {
        if (Event.is(comp)) comp.extraData.mainColor = this.getColor();
    }

    getColor() :string {
        this.startIndex++;
        this.startIndex %= this.colors.length;
        return this.colors[this.startIndex];
    }

    setColorIntoDrawInfo(comp :EventBody | EventMark | EventAxis) {
        const { etx } = this;

        Object.defineProperty(comp.drawInfo, 'mainColor', {
            get() {
                return etx.getParent(comp).extraData.mainColor; // TODO: set types by declare
            },
        });
    }

    createColorIntoEvent(timeline :Timeline) {
        for (let i = 0; i < timeline.events.length; i++) {
            timeline.events[i].extraData.mainColor = this.getColor();
        }
    }
}
