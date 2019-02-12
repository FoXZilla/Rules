import * as Engine from 'short-night';
import Axis from './Axis';
import Event from './Event';
import ColorPicker from './extensions/ColorPicker';
import AvoidMilestone from './extensions/AvoidMilestone';

export default class Timeline extends Engine.Timeline {
    constructor(info :Engine.TimelineConstructInfo) {
        super({
            grid: {
                ...Engine.Timeline.defaultGrid,
                scaleHeight: 1.5,
                axisWidth: 1.5,
            },
            ...info,
        });

        this.ext.extensions.push(
            new ColorPicker(this.ext),
            new AvoidMilestone(this.ext),
        );
    }

    theme = 'rules';

    axisConstructor = Axis;
    eventConstructor = Event;
}
