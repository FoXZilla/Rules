import * as Engine from 'short-night';
import tinytime = require('tinytime');
import { Coordinate } from 'short-night/types';
import { parseDate } from 'short-night/common/functions';

export default class EventBody extends Engine.EventBody {
    theme = 'rules';
    drawInfo :(
        Engine.EventBody['drawInfo']
        & {
            mainColor :string;
            originOffsetX :number;
        }
    ) = { ...this.drawInfo, mainColor: '' };

    createElement() {
        const flag = super.createElement();
        const template = tinytime('{YYYY}.{Mo}', { padMonth: true });
        const elt = this.element.querySelector('.sn-date')!;

        elt.innerHTML = template.render(parseDate(this.drawInfo.date));
        if (this.drawInfo.endDate) {
            elt.innerHTML += ` ~ ${template.render(parseDate(this.drawInfo.endDate))}`;
        }

        return flag;
    }

    draw() {
        const ctx = this.canvas.getContext('2d')!;
        const { box } = this.drawInfo;

        ctx.shadowColor = 'rgba(0, 0, 0, 0.04)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetY = 5;
        ctx.shadowOffsetX = 5;

        const triangle :Coordinate = { x: 6, y: 7.5 };
        const rightX = box.x + box.width - 5 - 5 - triangle.x;
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ffffff';
        ctx.moveTo(box.x, box.y);
        ctx.lineTo(rightX, box.y);
        ctx.lineTo(
            rightX,
            Math.max(
                this.drawInfo.markDrawInfo.target.y - triangle.y / 2,
                box.y,
            ),
        );
        ctx.lineTo(rightX + triangle.x, this.drawInfo.markDrawInfo.target.y);
        ctx.lineTo(
            rightX,
            Math.min(
                this.drawInfo.markDrawInfo.target.y + triangle.y / 2,
                box.y + box.height,
            ),
        );
        ctx.lineTo(rightX, box.y + box.height);
        ctx.lineTo(box.x, box.y + box.height);
        ctx.closePath();
        ctx.fill();

        const radius = 2.5;
        const mark :Coordinate = {
            x: rightX + triangle.x + 5 + radius / 2,
            y: this.drawInfo.markDrawInfo.target.y,
        };
        const markBeforeFloat :Coordinate = {
            x: rightX + triangle.x + 5 + radius / 2
                + (this.drawInfo.offset.x - this.drawInfo.originOffsetX),
            y: this.drawInfo.markDrawInfo.target.y,
        };
        if (this.drawInfo.floated) {
            ctx.beginPath();
            ctx.arc(
                markBeforeFloat.x,
                markBeforeFloat.y,
                radius,
                0,
                2 * Math.PI,
            );
            ctx.fillStyle = this.drawInfo.mainColor;
            ctx.fill();

            ctx.beginPath();
            ctx.lineWidth = 1.5;
            ctx.moveTo(mark.x, mark.y);
            ctx.lineTo(markBeforeFloat.x, markBeforeFloat.y);
            ctx.strokeStyle = this.drawInfo.mainColor;
            ctx.stroke();
        }
        ctx.shadowColor = '';
        ctx.beginPath();
        ctx.arc(
            mark.x,
            mark.y,
            radius,
            0,
            2 * Math.PI,
        );
        ctx.fillStyle = this.drawInfo.mainColor;
        ctx.fill();

        const width = 4;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = this.drawInfo.mainColor;
        ctx.moveTo(box.x + width / 2, box.y);
        ctx.lineTo(box.x + width / 2, box.y + box.height);
        ctx.stroke();

        return super.draw();
    }
}
