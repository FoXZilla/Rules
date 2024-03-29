import * as Engine from 'short-night';

export default class EventAxis extends Engine.EventAxis {
    theme = 'rules';
    drawInfo :Engine.EventAxis['drawInfo'] & { mainColor :string } = { ...this.drawInfo, mainColor: '' };

    createElement() {
        const flag = super.createElement();

        this.element!.style.color = this.drawInfo.mainColor;

        return flag;
    }

    draw() {
        const strokeWidth = 3;
        const radius = this.drawInfo.text ? 3 : 0;
        const ctx = this.canvas.getContext('2d')!;

        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.lineWidth = strokeWidth;
        ctx.setLineDash([]);
        ctx.moveTo(
            this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
            this.drawInfo.markDrawInfo.target.y,
        );
        ctx.lineTo(
            this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
            this.drawInfo.markDrawInfo.target.y - this.drawInfo.length + radius / 2,
        );
        ctx.strokeStyle = this.drawInfo.mainColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
            this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
            this.drawInfo.markDrawInfo.target.y - this.drawInfo.length,
            radius,
            0,
            2 * Math.PI,
        );
        ctx.fillStyle = this.drawInfo.mainColor;
        ctx.fill();

        return super.draw();
    }
}
