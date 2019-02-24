import * as Engine from 'short-night';
import EventBody from './EventBody';
import EventAxis from './EventAxis';
import { SN } from 'short-night/common/definitions';

export default class Event extends Engine.Event {
    theme = 'rules';

    body :EventBody = null as any;

    bodyConstructor = EventBody;
    axisConstructor = EventAxis;
    markConstructor = Engine.EventMark;

    initBody() {
        super.initBody();
        this.body.drawInfo.originOffsetX = this.grid.eventOffset.x;
    }

}
