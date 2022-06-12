import * as Engine from 'short-night';
import { Timeline as Timeline$1, EventBody as EventBody$1, EventMark, EventAxis as EventAxis$1, Event as Event$1 } from 'short-night';
export { Engine };
import { parseBox, parseDate, createDraw } from 'short-night/common/functions';
import { SN, DEBUG } from 'short-night/common/definitions';
import 'short-night/styles.css';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var AxisBody = /** @class */ (function (_super) {
    __extends(AxisBody, _super);
    function AxisBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        return _this;
    }
    AxisBody.prototype.draw = function () {
        var box = this.drawInfo.box;
        var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth = box.width;
        ctx.setLineDash([box.width, box.width * 10 / 3]);
        ctx.moveTo(box.x + box.width / 2, box.y);
        ctx.lineTo(box.x + box.width / 2, box.y + box.height);
        ctx.strokeStyle = '#afafaf';
        ctx.stroke();
        return _super.prototype.draw.call(this);
    };
    return AxisBody;
}(Engine.AxisBody));

var AxisMilestone = /** @class */ (function (_super) {
    __extends(AxisMilestone, _super);
    function AxisMilestone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        return _this;
    }
    AxisMilestone.prototype.createElement = function () {
        var flag = _super.prototype.createElement.call(this);
        var paddingLeft = parseFloat(getComputedStyle(this.element).paddingLeft);
        var bodyWidth = this.drawInfo.bodyDrawInfo.box.width;
        this.element.style.paddingLeft = "".concat(paddingLeft + bodyWidth, "px");
        var box = parseBox(this.element);
        this.element.style.left = "".concat(box.x + box.width / 2 - bodyWidth - 22.5 - 5, "px");
        return flag;
    };
    AxisMilestone.prototype.draw = function () {
        var box = this.drawInfo.box;
        var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.moveTo(box.x, box.y + box.height / 2);
        ctx.lineTo(box.x + 22.5, box.y + box.height / 2);
        ctx.strokeStyle = '#bcbcbc';
        ctx.stroke();
        return _super.prototype.draw.call(this);
    };
    return AxisMilestone;
}(Engine.AxisMilestone));

var AxisScale = /** @class */ (function (_super) {
    __extends(AxisScale, _super);
    function AxisScale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        return _this;
    }
    AxisScale.prototype.createBox = function () {
        var flag = _super.prototype.createBox.call(this);
        var width = 10;
        this.drawInfo.box = {
            width: width,
            x: this.drawInfo.bodyDrawInfo.box.x - width - 5,
            y: this.drawInfo.alignY - this.drawInfo.height / 2,
            height: this.drawInfo.height,
        };
        return flag;
    };
    AxisScale.prototype.draw = function () {
        var box = this.drawInfo.box;
        var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth = this.drawInfo.box.height;
        ctx.setLineDash([]);
        ctx.moveTo(box.x, box.y);
        ctx.lineTo(box.x + box.width, box.y);
        ctx.strokeStyle = '#bcbcbc';
        ctx.stroke();
        return _super.prototype.draw.call(this);
    };
    return AxisScale;
}(Engine.AxisScale));

var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        _this.milestones = [];
        _this.bodyConstructor = AxisBody;
        _this.milestoneConstructor = AxisMilestone;
        _this.scaleConstructor = AxisScale;
        return _this;
    }
    return Axis;
}(Engine.Axis));

var EventBody = /** @class */ (function (_super) {
    __extends(EventBody, _super);
    function EventBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        _this.drawInfo = Object.assign({}, _this.drawInfo, { mainColor: '' });
        return _this;
    }
    EventBody.prototype.createElement = function () {
        var flag = _super.prototype.createElement.call(this);
        // const template = tinytime('{YYYY}.{Mo}', { padMonth: true });
        var elt = this.element.querySelector('.sn-date');
        // elt.innerHTML = template.render(parseDate(this.drawInfo.date));
        var pDate = parseDate(this.drawInfo.date);
        elt.innerHTML = "".concat(pDate.getUTCFullYear(), ".").concat(String(pDate.getMonth() + 1).padStart(2, '0'));
        if (this.drawInfo.endDate) {
            var eDate = parseDate(this.drawInfo.endDate);
            elt.innerHTML += " ~ ".concat(eDate.getUTCFullYear(), ".").concat(String(eDate.getMonth() + 1).padStart(2, '0'));
        }
        return flag;
    };
    EventBody.prototype.draw = function () {
        var ctx = this.canvas.getContext('2d');
        var box = this.drawInfo.box;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.04)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetY = 5;
        ctx.shadowOffsetX = 5;
        var triangle = { x: 6, y: 7.5 };
        var rightX = box.x + box.width - 5 - 5 - triangle.x;
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ffffff';
        ctx.moveTo(box.x, box.y);
        ctx.lineTo(rightX, box.y);
        ctx.lineTo(rightX, Math.max(this.drawInfo.markDrawInfo.target.y - triangle.y / 2, box.y));
        ctx.lineTo(rightX + triangle.x, this.drawInfo.markDrawInfo.target.y);
        ctx.lineTo(rightX, Math.min(this.drawInfo.markDrawInfo.target.y + triangle.y / 2, box.y + box.height));
        ctx.lineTo(rightX, box.y + box.height);
        ctx.lineTo(box.x, box.y + box.height);
        ctx.closePath();
        ctx.fill();
        var radius = 2.5;
        var mark = {
            x: rightX + triangle.x + 5 + radius / 2,
            y: this.drawInfo.markDrawInfo.target.y,
        };
        var markBeforeFloat = {
            x: rightX + triangle.x + 5 + radius / 2
                + (this.drawInfo.offset.x - this.drawInfo.originOffsetX),
            y: this.drawInfo.markDrawInfo.target.y,
        };
        if (this.drawInfo.floated) {
            ctx.beginPath();
            ctx.arc(markBeforeFloat.x, markBeforeFloat.y, radius, 0, 2 * Math.PI);
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
        ctx.arc(mark.x, mark.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.drawInfo.mainColor;
        ctx.fill();
        var width = 4;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = this.drawInfo.mainColor;
        ctx.moveTo(box.x + width / 2, box.y);
        ctx.lineTo(box.x + width / 2, box.y + box.height);
        ctx.stroke();
        return _super.prototype.draw.call(this);
    };
    return EventBody;
}(Engine.EventBody));

var EventAxis = /** @class */ (function (_super) {
    __extends(EventAxis, _super);
    function EventAxis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        _this.drawInfo = Object.assign({}, _this.drawInfo, { mainColor: '' });
        return _this;
    }
    EventAxis.prototype.createElement = function () {
        var flag = _super.prototype.createElement.call(this);
        this.element.style.color = this.drawInfo.mainColor;
        return flag;
    };
    EventAxis.prototype.draw = function () {
        var strokeWidth = 3;
        var radius = this.drawInfo.text ? 3 : 0;
        var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.lineWidth = strokeWidth;
        ctx.setLineDash([]);
        ctx.moveTo(this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX, this.drawInfo.markDrawInfo.target.y);
        ctx.lineTo(this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX, this.drawInfo.markDrawInfo.target.y - this.drawInfo.length + radius / 2);
        ctx.strokeStyle = this.drawInfo.mainColor;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX, this.drawInfo.markDrawInfo.target.y - this.drawInfo.length, radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.drawInfo.mainColor;
        ctx.fill();
        return _super.prototype.draw.call(this);
    };
    return EventAxis;
}(Engine.EventAxis));

var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = 'rules';
        _this.body = null;
        _this.bodyConstructor = EventBody;
        _this.axisConstructor = EventAxis;
        _this.markConstructor = Engine.EventMark;
        return _this;
    }
    Event.prototype.initBody = function () {
        _super.prototype.initBody.call(this);
        this.body.drawInfo.originOffsetX = this.grid.eventOffset.x;
    };
    return Event;
}(Engine.Event));

var ColorPicker = /** @class */ (function () {
    function ColorPicker(etx) {
        this.etx = etx;
        this.colors = [
            '#c283ca',
            '#6280c3',
            '#f6d53b',
            '#959595',
            '#e96060',
            '#adcb6d',
            '#7abbe0',
            '#e89235',
        ];
        this.startIndex = Math.floor(Math.random() * 3);
    }
    ColorPicker.prototype.onApply = function (comp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (Timeline$1.is(comp))
                    this.createColorIntoEvent(comp);
                if (EventBody$1.is(comp)
                    || EventMark.is(comp)
                    || EventAxis$1.is(comp))
                    this.setColorIntoDrawInfo(comp);
                return [2 /*return*/];
            });
        });
    };
    ColorPicker.prototype.onConstruct = function (comp) {
        if (Event$1.is(comp))
            comp.extraData.mainColor = this.getColor();
    };
    ColorPicker.prototype.getColor = function () {
        this.startIndex++;
        this.startIndex %= this.colors.length;
        return this.colors[this.startIndex];
    };
    ColorPicker.prototype.setColorIntoDrawInfo = function (comp) {
        var etx = this.etx;
        Object.defineProperty(comp.drawInfo, 'mainColor', {
            get: function () {
                return etx.getParent(comp).extraData.mainColor; // TODO: set types by declare
            },
        });
    };
    ColorPicker.prototype.createColorIntoEvent = function (timeline) {
        for (var i = 0; i < timeline.events.length; i++) {
            timeline.events[i].extraData.mainColor = this.getColor();
        }
    };
    return ColorPicker;
}());

var AvoidMilestone = /** @class */ (function () {
    function AvoidMilestone(etx) {
        this.etx = etx;
    }
    AvoidMilestone.prototype.onApply = function (comp) {
        return __awaiter(this, void 0, void 0, function () {
            var milestones, milestones;
            return __generator(this, function (_a) {
                if (EventBody$1.is(comp)) {
                    milestones = this.etx.components[SN.AxisMilestone];
                    comp.drawInfo.offset.x = Math.max.apply(Math, __spreadArray([comp.drawInfo.offset.x], __read(milestones.map(function (_a) {
                        var m = _a.drawInfo;
                        return m.bodyDrawInfo.start.x - m.box.x + 12.5;
                    })), false));
                }
                if (EventAxis$1.is(comp)) {
                    milestones = this.etx.components[SN.AxisMilestone];
                    comp.drawInfo.offsetX = Math.max.apply(Math, __spreadArray([comp.drawInfo.offsetX], __read(milestones.map(function (_a) {
                        var m = _a.drawInfo;
                        return (m.box.x + m.box.width) - m.bodyDrawInfo.start.x + 12.5;
                    })), false));
                }
                return [2 /*return*/];
            });
        });
    };
    return AvoidMilestone;
}());

var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline(info) {
        var _this = _super.call(this, __assign({ grid: __assign(__assign({}, Engine.Timeline.defaultGrid), { scaleHeight: 1.5, axisWidth: 1.5 }) }, info)) || this;
        _this.theme = 'rules';
        _this.axisConstructor = Axis;
        _this.eventConstructor = Event;
        _this.ext.extensions.push(new ColorPicker(_this.ext), new AvoidMilestone(_this.ext));
        return _this;
    }
    return Timeline;
}(Engine.Timeline));

var originDraw = createDraw('rules', Timeline);
if (DEBUG) {
    console.log("\"Answer me sir. Are you guarding the righteousness, or just the rule?\"\n\"Let me do answer you! I choose the rule, because only the rule can brought the true righteousness!\"\n");
}
function draw(el, data) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, container, canvas, timeline;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (Array.isArray(data))
                        return [2 /*return*/, originDraw(el, data)];
                    _a = Timeline.mount(el, 'rules'), container = _a.container, canvas = _a.canvas;
                    timeline = new Timeline({
                        canvas: canvas,
                        container: container,
                        ext: new Engine.ExtensionManager({
                            breakpointAnimation: {
                                autoScroll: false,
                                playAnimation: true,
                                timeoutCounter: function (point, _a) {
                                    var protagonist = _a.protagonist;
                                    if (protagonist && Engine.AxisBody.is(protagonist))
                                        return 0;
                                    if (protagonist && Engine.AxisScale.is(protagonist))
                                        return 30;
                                    if (protagonist && Engine.AxisMilestone.is(protagonist))
                                        return 30;
                                    return 50;
                                },
                            },
                        }),
                    });
                    return [4 /*yield*/, timeline.import(data)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, timeline];
            }
        });
    });
}
function drawWithAnimation(el, events) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, container, canvas, timeline;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = Timeline.mount(el, 'rules'), container = _a.container, canvas = _a.canvas;
                    timeline = new Timeline({
                        canvas: canvas,
                        container: container,
                        ext: new Engine.ExtensionManager({
                            breakpointAnimation: {
                                autoScroll: true,
                                scrollDuration: 150,
                                playAnimation: true,
                                timeoutCounter: function (point, config) {
                                    return config.forward ? 300 : 500;
                                },
                            },
                        }),
                    });
                    timeline.drawInfo.events = events;
                    return [4 /*yield*/, timeline.apply()];
                case 1:
                    _b.sent();
                    timeline.draw();
                    return [2 /*return*/, timeline];
            }
        });
    });
}

export { Timeline, draw, drawWithAnimation };
