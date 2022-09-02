import { Extension, ExtensionManager } from 'short-night/extensions';
import { EventBody, EventAxis, Component } from 'short-night';
import { SN } from 'short-night/common/definitions';

export default class AvoidMilestone implements Partial<Extension> {
    constructor(public etx :ExtensionManager) {}

    async onApply(comp :Component) {
        if (EventBody.is(comp)) {
            const milestones = this.etx.components[SN.AxisMilestone];

            comp.drawInfo.offset.x = Math.max(
                comp.drawInfo.offset.x,
                ...milestones.map(({ drawInfo: m }) => m.bodyDrawInfo.start.x - m.box.x + 12.5),
            );
        }
        if (EventAxis.is(comp)) {
            const milestones = this.etx.components[SN.AxisMilestone];

            comp.drawInfo.offsetX = Math.max(
                comp.drawInfo.offsetX,
                ...milestones.map(
                    ({ drawInfo: m }) => (m.box.x + m.box.width) - m.bodyDrawInfo.start.x + 12.5,
                ),
            );
        }
    }
}
