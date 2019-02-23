import { Extension, ExtensionManager } from 'short-night/extensions';
import { AxisMilestone, Component } from 'short-night';
import { SN } from 'short-night/common/definitions';

export default class AvoidMilestone implements Partial<Extension> {
    constructor(public etx:ExtensionManager) {}

    async onApply(comp:Component) {
        if (!AxisMilestone.is(comp)) return;

        const grid = this.etx.components[SN.Timeline][0].grid;

        grid.eventOffset.x = Math.max(
            grid.eventOffset.x,
            comp.drawInfo.bodyDrawInfo.start.x - comp.drawInfo.box.x + 12.5,
        );
    }
}
