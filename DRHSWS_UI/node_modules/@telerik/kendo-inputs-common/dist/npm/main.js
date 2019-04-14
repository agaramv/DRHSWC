'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var calculateFixedTrackSize = function (ref) {
        var max = ref.max;
        var min = ref.min;
        var smallStep = ref.smallStep;
        var fixedTickWidth = ref.fixedTickWidth;

        return ((max - min) / smallStep) * fixedTickWidth;
};

var calculateTrackSize = function (wrapperWidth, offset, showButtons) {
    if ( showButtons === void 0 ) showButtons = true;

    var BUTTONS_COUNT = 2;
    var trackOffset = showButtons ? parseFloat(offset, 10) * BUTTONS_COUNT : 0;
    var trackWidth = wrapperWidth - trackOffset;

    return trackWidth;
};

var calculateTicksCount = function (max, min, smallStep) {
        if ( max === void 0 ) max = 0;
        if ( min === void 0 ) min = 0;
        if ( smallStep === void 0 ) smallStep = 1;

        return calculateAreasCount(max, min, smallStep) + 1;
};

var calculateAreasCount = function (max, min, smallStep) {
    if ( max === void 0 ) max = 0;
    if ( min === void 0 ) min = 0;
    if ( smallStep === void 0 ) smallStep = 1;

    if (smallStep <= 0 ) {
        throw new Error("Invalid argument: smallStep must be a positive number");
    }

    return Math.floor(Math.abs(min - max) / smallStep);
};

var calculateValueFromTick = function (index, ref) {
    var max = ref.max;
    var min = ref.min;
    var smallStep = ref.smallStep;
    var reverse = ref.reverse;
    var vertical = ref.vertical;

    var value = min + (index * smallStep);

    return vertical || reverse ? Math.abs(value - max) : value;
};

var calculateValueFromTrack = function (clientRect, pageOffset, props) {
    var length, wrapperOffset;

    if (props.vertical) {
        var top = clientRect.top;
        var bottom = clientRect.bottom;
        length = top - bottom;
        wrapperOffset = pageOffset.pageY - bottom;
    } else {
        var left = clientRect.left;
        var right = clientRect.right;
        length = right - left;
        wrapperOffset = pageOffset.pageX - left;
    }

    return valueFromTrack(props, wrapperOffset, length);
};

var valueFromTrack = function (props, wrapperOffset, length) {
    var max = props.max;
    var min = props.min;
    var reverse = props.reverse;
    var smallStep = props.smallStep;
    var distance = max - min;
    var clickOffset = wrapperOffset / length;
    var maxTickValue = distance - (distance % smallStep);
    var maxOffset = (100 / distance) * maxTickValue / 100;
    var absValue = (wrapperOffset / length) * distance;
    var value = max;

    if (clickOffset < maxOffset) {
        value = reverse ? max - absValue : absValue + min;
    }

    return snapValue(extendProps(props, { value: value }));
};

var calculateTickSizes = function (trackSize, min, max, step) {
    var elementCount = Math.floor((max - min) / step) + 1;
    var distStep = trackSize / (max - min);
    var result = [];
    var usedSpace = 0;
    var endPoint = 0;

    for (var i = 0; i < elementCount; i++) {
        if (i === 0 || i === elementCount - 1) {
            endPoint += (step / 2) * distStep;
        } else {
            endPoint += step * distStep;
        }

        var size = Math.round(endPoint - usedSpace);

        result.push(size);

        usedSpace += size;
    }

    return result;
};

var calculateHandlePosition = function (ref) {
    var handleWidth = ref.handleWidth;
    var trackWidth = ref.trackWidth;
    var min = ref.min;
    var max = ref.max;
    var reverse = ref.reverse;
    var value = ref.value;

    var halfHandleWidth = Math.floor(handleWidth / 2);
    var step = trackWidth / Math.abs(max - min);
    var pos = step * (value - min);
    if (reverse) {
        pos = trackWidth - pos;
    }

    return Math.floor(pos - halfHandleWidth);
};

var decreaseValueToStep = function (ref) {
    var max = ref.max;
    var min = ref.min;
    var smallStep = ref.smallStep;
    var value = ref.value;

    var result;
    if (value % smallStep === 0) {
        result = value - smallStep;
    } else {
        result = value - (value % smallStep);
    }
    return trimValue(max, min, result);
};

var increaseValueToStep = function (ref) {
    var max = ref.max;
    var min = ref.min;
    var smallStep = ref.smallStep;
    var value = ref.value;

    var result = value - (value % smallStep) + smallStep;

    return trimValue(max, min, result);
};

var snapValue = function (props) {
    var smallStep = props.smallStep;
    var value = props.value;
    var left = decreaseValueToStep(props);
    var right = increaseValueToStep(props);

    if (value % smallStep === 0) {
        return value;
    }

    if (right - value <= smallStep / 2) {
        return right;
    }

    return left;
};

var trimValue = function (max, min, value) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
};

var identity = function (value) { return value; };

var extendProps = function (target) {
    var sources = [], len = arguments.length - 1;
    while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

    return Object.assign.apply(Object, [ {}, target ].concat( sources ));
};

var SliderUtil = {
    calculateFixedTrackSize: calculateFixedTrackSize,
    calculateValueFromTick: calculateValueFromTick,
    calculateValueFromTrack: calculateValueFromTrack,
    calculateTrackSize: calculateTrackSize,
    calculateTicksCount: calculateTicksCount,
    calculateTickSizes: calculateTickSizes,
    calculateHandlePosition: calculateHandlePosition,
    decreaseValueToStep: decreaseValueToStep,
    identity: identity,
    increaseValueToStep: increaseValueToStep,
    trimValue: trimValue,
    snapValue: snapValue,
    valueFromTrack: valueFromTrack
};

var SliderModel = function SliderModel(props, wrapper, track) {
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.tickSizes = this.getTickSizes();
};

SliderModel.prototype.getTickSizes = function getTickSizes () {
    var ref = this.props;
        var max = ref.max;
        var min = ref.min;
        var smallStep = ref.smallStep;
    var trackWidth = this.trackWidth();

    return SliderUtil.calculateTickSizes(trackWidth, min, max, smallStep);
};

SliderModel.prototype.trackWidth = function trackWidth () {
    if (this.props.fixedTickWidth) {
        return SliderUtil.calculateFixedTrackSize(this.props);
    }

    return SliderUtil.calculateTrackSize(
        this.elementSize(this.wrapper),
        this.elementOffset(this.track),
        this.props.buttons
    );
};

SliderModel.prototype.resizeTrack = function resizeTrack () {
    var orientation = this.props.vertical ? 'height' : 'width';
    var trackWidth = this.trackWidth();

    this.track.style[orientation] = trackWidth + "px";
};

SliderModel.prototype.resizeTicks = function resizeTicks (ticksContainer, ticks) {
        var this$1 = this;

    var dimension = this.props.vertical ? "height" : "width";

    Array.prototype.slice.call(ticks).map(function (tick, index) { return tick.style[dimension] = (this$1.tickSizes[index]) + "px"; });

    if (this.props.vertical) {
        this.adjustPadding(ticksContainer);
    }
};

SliderModel.prototype.resizeWrapper = function resizeWrapper () {
    var dimension = this.props.vertical ? "height" : "width";
    var wrapperSize = this.elementSize(this.wrapper);
    var trackWidth = SliderUtil.calculateTrackSize(wrapperSize, this.elementOffset(this.track));
    var fixedTrackWidth = SliderUtil.calculateFixedTrackSize(this.props);

    if (trackWidth > fixedTrackWidth) {
        this.wrapper.parentElement.style[dimension] = (wrapperSize - (trackWidth - fixedTrackWidth)) + "px";
    } else {
        this.wrapper.parentElement.style[dimension] = (wrapperSize + (fixedTrackWidth - trackWidth)) + "px";
    }
};

SliderModel.prototype.positionHandle = function positionHandle (dragHandle) {
    var ref = this.props;
        var max = ref.max;
        var min = ref.min;
        var reverse = ref.reverse;
        var vertical = ref.vertical;
    var position = vertical ? 'bottom' : 'left';
    var trackWidth = this.trackWidth();
    var value = SliderUtil.trimValue(max, min, this.props.value);

    this.handlePosition = SliderUtil.calculateHandlePosition({
        min: min,
        max: max,
        reverse: reverse,
        value: value,
        trackWidth: trackWidth,
        handleWidth: dragHandle.offsetWidth
    });

    dragHandle.style[position] = (this.handlePosition) + "px";
};

SliderModel.prototype.positionSelection = function positionSelection (dragHandle, selection) {
    var ref = this.props;
        var reverse = ref.reverse;
        var vertical = ref.vertical;
    var dimension = vertical ? 'height' : 'width';
    var handleWidth = Math.floor(dragHandle.offsetWidth / 2);
    var size = this.handlePosition + handleWidth;

    if (reverse) {
        size = this.trackWidth() - size;
    }

    selection.style[dimension] = size + "px";
};

SliderModel.prototype.adjustPadding = function adjustPadding (ticksContainer) {
    var totalTickSize = this.tickSizes.reduce(function (prev, curr) { return prev + curr; }, 0);
    var trackWidth = this.trackWidth();
    var reminder = trackWidth - totalTickSize;

    if (reminder !== 0) {
        var padding = reminder + this.elementOffset(this.track);
        ticksContainer.style.paddingTop = padding + "px";
    }
};

SliderModel.prototype.elementOffset = function elementOffset (element) {
    var ref = this.props;
        var vertical = ref.vertical;
    var style = getComputedStyle(element);

    return parseInt(vertical ? style.bottom : style.left, 10);
};

SliderModel.prototype.elementSize = function elementSize (element) {
    var ref = this.props;
        var vertical = ref.vertical;

    return vertical ? element.clientHeight : element.clientWidth;
};

var Model = function Model(value, animate) {
    if ( value === void 0 ) value = 0;

    this.handle = {
        transform: 'translateX(' + value + 'px)',
        transition: animate
    };
};

var DEFAULT_THRESHOLD = 5;

var noop = function () { /*noop*/ };

var SwitchController = function SwitchController(updateView, onChange) {
    var this$1 = this;
    if ( updateView === void 0 ) updateView = noop;
    if ( onChange === void 0 ) onChange = noop;

    this.handlePosition = 0;
    this.wrapperOffset = 0;
    this.handleOffset = 0;
    this.handleMargin = 4;

    this.updateView = updateView;
    this.onChange = onChange;

    this.change = function (checked) {
        this$1.checked = checked;

        this$1.updateView(this$1.updateModel(checked ? this$1.constrain : 0));

        this$1.onChange(checked);
    };

    this.limit = function (value) {
        if (value > this$1.constrain) {
            return this$1.constrain;
        }

        if (value < 0) {
            return 0;
        }

        return value;
    };

    this.addAnimation = function (model) {
        if (model.transition === true) {
            model.transition = 'all 200ms ease-out';
        } else {
            model.transition = 'none';
        }
        return model;
    };

    this.onPress = function (ref) {
        var pageX = ref.pageX;

        this$1.lastPressX = this$1.originalPressX = pageX;
    };

    this.onRelease = function (ref) {
        var pageX = ref.pageX;

        var delta = Math.abs(this$1.originalPressX - pageX);
        var snapPoint = this$1.constrain / 2;
        var checked = delta < DEFAULT_THRESHOLD ? !this$1.checked : this$1.handlePosition > snapPoint;

        this$1.change(checked);
    };

    this.onDrag = function (ref) {
        var pageX = ref.pageX;

        var ref$1 = this$1.coords;
        var left = ref$1.left;
        var right = ref$1.right;
        var overElement = pageX > left && pageX < right;

        if (overElement) {
            var delta = this$1.reverse ? this$1.lastPressX - pageX : pageX - this$1.lastPressX;
            var position = this$1.limit(this$1.handlePosition + delta);

            this$1.lastPressX = pageX;
            this$1.handlePosition = position;
            this$1.updateView(this$1.updateModel(this$1.handlePosition));
        }

        if (pageX > right) {
            this$1.updateView(this$1.updateModel(this$1.reverse ? 0 : this$1.constrain));
        }

        if (pageX < left) {
            this$1.updateView(this$1.updateModel(this$1.reverse ? this$1.constrain : 0));
        }
    };
};

var prototypeAccessors = { constrain: {} };

prototypeAccessors.constrain.get = function () {
    return this.wrapperOffset - this.handleOffset - this.handleMargin;
};

SwitchController.prototype.updateState = function updateState (ref) {
        var wrapperOffset = ref.wrapperOffset;
        var handleOffset = ref.handleOffset;
        var checked = ref.checked;
        var animate = ref.animate; if ( animate === void 0 ) animate = true;
        var coords = ref.coords;
        var handleMargin = ref.handleMargin;
        var reverse = ref.reverse;

    this.wrapperOffset = wrapperOffset;
    this.handleOffset = handleOffset;
    this.coords = coords;
    this.handleMargin = handleMargin;

    this.checked = checked;
    this.reverse = reverse;

    this.updateView(this.updateModel(checked ? this.constrain : 0, animate));
};

SwitchController.prototype.updateModel = function updateModel (position, animate) {
        if ( animate === void 0 ) animate = true;

    var pos = this.reverse ? this.wrapperOffset / 2 - position : position;
    return new Model(pos, animate);
};

Object.defineProperties( SwitchController.prototype, prototypeAccessors );

exports.SliderModel = SliderModel;
exports.SliderUtil = SliderUtil;
exports.SwitchController = SwitchController;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWlucHV0cy1jb21tb24vc3JjL1NsaWRlclV0aWwuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdGVsZXJpay9rZW5kby1pbnB1dHMtY29tbW9uL3NyYy9TbGlkZXJNb2RlbC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC90ZWxlcmlrL2tlbmRvLWlucHV0cy1jb21tb24vc3JjL1N3aXRjaE1vZGVsLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3RlbGVyaWsva2VuZG8taW5wdXRzLWNvbW1vbi9zcmMvU3dpdGNoQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxjdWxhdGVGaXhlZFRyYWNrU2l6ZSA9ICh7IG1heCwgbWluLCBzbWFsbFN0ZXAsIGZpeGVkVGlja1dpZHRoIH0pID0+XG4gICAgKChtYXggLSBtaW4pIC8gc21hbGxTdGVwKSAqIGZpeGVkVGlja1dpZHRoO1xuXG5jb25zdCBjYWxjdWxhdGVUcmFja1NpemUgPSAod3JhcHBlcldpZHRoLCBvZmZzZXQsIHNob3dCdXR0b25zID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IEJVVFRPTlNfQ09VTlQgPSAyO1xuICAgIGNvbnN0IHRyYWNrT2Zmc2V0ID0gc2hvd0J1dHRvbnMgPyBwYXJzZUZsb2F0KG9mZnNldCwgMTApICogQlVUVE9OU19DT1VOVCA6IDA7XG4gICAgY29uc3QgdHJhY2tXaWR0aCA9IHdyYXBwZXJXaWR0aCAtIHRyYWNrT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHRyYWNrV2lkdGg7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUaWNrc0NvdW50ID0gKG1heCA9IDAsIG1pbiA9IDAsIHNtYWxsU3RlcCA9IDEpID0+XG4gICAgY2FsY3VsYXRlQXJlYXNDb3VudChtYXgsIG1pbiwgc21hbGxTdGVwKSArIDE7XG5cbmNvbnN0IGNhbGN1bGF0ZUFyZWFzQ291bnQgPSAobWF4ID0gMCwgbWluID0gMCwgc21hbGxTdGVwID0gMSkgPT4ge1xuICAgIGlmIChzbWFsbFN0ZXAgPD0gMCApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudDogc21hbGxTdGVwIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5hYnMobWluIC0gbWF4KSAvIHNtYWxsU3RlcCk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVWYWx1ZUZyb21UaWNrID0gKGluZGV4LCB7IG1heCwgbWluLCBzbWFsbFN0ZXAsIHJldmVyc2UsIHZlcnRpY2FsIH0pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG1pbiArIChpbmRleCAqIHNtYWxsU3RlcCk7XG5cbiAgICByZXR1cm4gdmVydGljYWwgfHwgcmV2ZXJzZSA/IE1hdGguYWJzKHZhbHVlIC0gbWF4KSA6IHZhbHVlO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVmFsdWVGcm9tVHJhY2sgPSAoY2xpZW50UmVjdCwgcGFnZU9mZnNldCwgcHJvcHMpID0+IHtcbiAgICBsZXQgbGVuZ3RoLCB3cmFwcGVyT2Zmc2V0O1xuXG4gICAgaWYgKHByb3BzLnZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGNsaWVudFJlY3Q7XG4gICAgICAgIGxlbmd0aCA9IHRvcCAtIGJvdHRvbTtcbiAgICAgICAgd3JhcHBlck9mZnNldCA9IHBhZ2VPZmZzZXQucGFnZVkgLSBib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBsZWZ0LCByaWdodCB9ID0gY2xpZW50UmVjdDtcbiAgICAgICAgbGVuZ3RoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICB3cmFwcGVyT2Zmc2V0ID0gcGFnZU9mZnNldC5wYWdlWCAtIGxlZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlRnJvbVRyYWNrKHByb3BzLCB3cmFwcGVyT2Zmc2V0LCBsZW5ndGgpO1xufTtcblxuY29uc3QgdmFsdWVGcm9tVHJhY2sgPSAocHJvcHMsIHdyYXBwZXJPZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4LCBtaW4sIHJldmVyc2UsIHNtYWxsU3RlcCB9ID0gcHJvcHM7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBtYXggLSBtaW47XG4gICAgY29uc3QgY2xpY2tPZmZzZXQgPSB3cmFwcGVyT2Zmc2V0IC8gbGVuZ3RoO1xuICAgIGNvbnN0IG1heFRpY2tWYWx1ZSA9IGRpc3RhbmNlIC0gKGRpc3RhbmNlICUgc21hbGxTdGVwKTtcbiAgICBjb25zdCBtYXhPZmZzZXQgPSAoMTAwIC8gZGlzdGFuY2UpICogbWF4VGlja1ZhbHVlIC8gMTAwO1xuICAgIGNvbnN0IGFic1ZhbHVlID0gKHdyYXBwZXJPZmZzZXQgLyBsZW5ndGgpICogZGlzdGFuY2U7XG4gICAgbGV0IHZhbHVlID0gbWF4O1xuXG4gICAgaWYgKGNsaWNrT2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICAgIHZhbHVlID0gcmV2ZXJzZSA/IG1heCAtIGFic1ZhbHVlIDogYWJzVmFsdWUgKyBtaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHNuYXBWYWx1ZShleHRlbmRQcm9wcyhwcm9wcywgeyB2YWx1ZSB9KSk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUaWNrU2l6ZXMgPSAodHJhY2tTaXplLCBtaW4sIG1heCwgc3RlcCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRDb3VudCA9IE1hdGguZmxvb3IoKG1heCAtIG1pbikgLyBzdGVwKSArIDE7XG4gICAgY29uc3QgZGlzdFN0ZXAgPSB0cmFja1NpemUgLyAobWF4IC0gbWluKTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IHVzZWRTcGFjZSA9IDA7XG4gICAgbGV0IGVuZFBvaW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gZWxlbWVudENvdW50IC0gMSkge1xuICAgICAgICAgICAgZW5kUG9pbnQgKz0gKHN0ZXAgLyAyKSAqIGRpc3RTdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kUG9pbnQgKz0gc3RlcCAqIGRpc3RTdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgucm91bmQoZW5kUG9pbnQgLSB1c2VkU3BhY2UpO1xuXG4gICAgICAgIHJlc3VsdC5wdXNoKHNpemUpO1xuXG4gICAgICAgIHVzZWRTcGFjZSArPSBzaXplO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVIYW5kbGVQb3NpdGlvbiA9ICh7IGhhbmRsZVdpZHRoLCB0cmFja1dpZHRoLCBtaW4sIG1heCwgcmV2ZXJzZSwgdmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGhhbGZIYW5kbGVXaWR0aCA9IE1hdGguZmxvb3IoaGFuZGxlV2lkdGggLyAyKTtcbiAgICBjb25zdCBzdGVwID0gdHJhY2tXaWR0aCAvIE1hdGguYWJzKG1heCAtIG1pbik7XG4gICAgbGV0IHBvcyA9IHN0ZXAgKiAodmFsdWUgLSBtaW4pO1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHBvcyA9IHRyYWNrV2lkdGggLSBwb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocG9zIC0gaGFsZkhhbmRsZVdpZHRoKTtcbn07XG5cbmNvbnN0IGRlY3JlYXNlVmFsdWVUb1N0ZXAgPSAoeyBtYXgsIG1pbiwgc21hbGxTdGVwLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodmFsdWUgJSBzbWFsbFN0ZXAgPT09IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWUgLSBzbWFsbFN0ZXA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWUgLSAodmFsdWUgJSBzbWFsbFN0ZXApO1xuICAgIH1cbiAgICByZXR1cm4gdHJpbVZhbHVlKG1heCwgbWluLCByZXN1bHQpO1xufTtcblxuY29uc3QgaW5jcmVhc2VWYWx1ZVRvU3RlcCA9ICh7IG1heCwgbWluLCBzbWFsbFN0ZXAsIHZhbHVlIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB2YWx1ZSAtICh2YWx1ZSAlIHNtYWxsU3RlcCkgKyBzbWFsbFN0ZXA7XG5cbiAgICByZXR1cm4gdHJpbVZhbHVlKG1heCwgbWluLCByZXN1bHQpO1xufTtcblxuY29uc3Qgc25hcFZhbHVlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzbWFsbFN0ZXAsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBjb25zdCBsZWZ0ID0gZGVjcmVhc2VWYWx1ZVRvU3RlcChwcm9wcyk7XG4gICAgY29uc3QgcmlnaHQgPSBpbmNyZWFzZVZhbHVlVG9TdGVwKHByb3BzKTtcblxuICAgIGlmICh2YWx1ZSAlIHNtYWxsU3RlcCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IC0gdmFsdWUgPD0gc21hbGxTdGVwIC8gMikge1xuICAgICAgICByZXR1cm4gcmlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQ7XG59O1xuXG5jb25zdCB0cmltVmFsdWUgPSAobWF4LCBtaW4sIHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgaWRlbnRpdHkgPSAodmFsdWUpID0+IHZhbHVlO1xuXG5jb25zdCBleHRlbmRQcm9wcyA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCwgLi4uc291cmNlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjYWxjdWxhdGVGaXhlZFRyYWNrU2l6ZSxcbiAgICBjYWxjdWxhdGVWYWx1ZUZyb21UaWNrLFxuICAgIGNhbGN1bGF0ZVZhbHVlRnJvbVRyYWNrLFxuICAgIGNhbGN1bGF0ZVRyYWNrU2l6ZSxcbiAgICBjYWxjdWxhdGVUaWNrc0NvdW50LFxuICAgIGNhbGN1bGF0ZVRpY2tTaXplcyxcbiAgICBjYWxjdWxhdGVIYW5kbGVQb3NpdGlvbixcbiAgICBkZWNyZWFzZVZhbHVlVG9TdGVwLFxuICAgIGlkZW50aXR5LFxuICAgIGluY3JlYXNlVmFsdWVUb1N0ZXAsXG4gICAgdHJpbVZhbHVlLFxuICAgIHNuYXBWYWx1ZSxcbiAgICB2YWx1ZUZyb21UcmFja1xufTtcbiIsImltcG9ydCBTbGlkZXJVdGlsIGZyb20gJy4vU2xpZGVyVXRpbCc7XG5cbmNsYXNzIFNsaWRlck1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgd3JhcHBlciwgdHJhY2spIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICAgICAgICB0aGlzLnRyYWNrID0gdHJhY2s7XG4gICAgICAgIHRoaXMudGlja1NpemVzID0gdGhpcy5nZXRUaWNrU2l6ZXMoKTtcbiAgICB9XG5cbiAgICBnZXRUaWNrU2l6ZXMoKSB7XG4gICAgICAgIGNvbnN0IHsgbWF4LCBtaW4sIHNtYWxsU3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdHJhY2tXaWR0aCA9IHRoaXMudHJhY2tXaWR0aCgpO1xuXG4gICAgICAgIHJldHVybiBTbGlkZXJVdGlsLmNhbGN1bGF0ZVRpY2tTaXplcyh0cmFja1dpZHRoLCBtaW4sIG1heCwgc21hbGxTdGVwKTtcbiAgICB9XG5cbiAgICB0cmFja1dpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maXhlZFRpY2tXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFNsaWRlclV0aWwuY2FsY3VsYXRlRml4ZWRUcmFja1NpemUodGhpcy5wcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpZGVyVXRpbC5jYWxjdWxhdGVUcmFja1NpemUoXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRTaXplKHRoaXMud3JhcHBlciksXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRPZmZzZXQodGhpcy50cmFjayksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJ1dHRvbnNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNpemVUcmFjaygpIHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLnByb3BzLnZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgICBjb25zdCB0cmFja1dpZHRoID0gdGhpcy50cmFja1dpZHRoKCk7XG5cbiAgICAgICAgdGhpcy50cmFjay5zdHlsZVtvcmllbnRhdGlvbl0gPSBgJHt0cmFja1dpZHRofXB4YDtcbiAgICB9XG5cbiAgICByZXNpemVUaWNrcyh0aWNrc0NvbnRhaW5lciwgdGlja3MpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IFwiaGVpZ2h0XCIgOiBcIndpZHRoXCI7XG5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGlja3MpLm1hcCgodGljaywgaW5kZXgpID0+IHRpY2suc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMudGlja1NpemVzW2luZGV4XX1weGApO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICB0aGlzLmFkanVzdFBhZGRpbmcodGlja3NDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplV3JhcHBlcigpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IFwiaGVpZ2h0XCIgOiBcIndpZHRoXCI7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJTaXplID0gdGhpcy5lbGVtZW50U2l6ZSh0aGlzLndyYXBwZXIpO1xuICAgICAgICBjb25zdCB0cmFja1dpZHRoID0gU2xpZGVyVXRpbC5jYWxjdWxhdGVUcmFja1NpemUod3JhcHBlclNpemUsIHRoaXMuZWxlbWVudE9mZnNldCh0aGlzLnRyYWNrKSk7XG4gICAgICAgIGNvbnN0IGZpeGVkVHJhY2tXaWR0aCA9IFNsaWRlclV0aWwuY2FsY3VsYXRlRml4ZWRUcmFja1NpemUodGhpcy5wcm9wcyk7XG5cbiAgICAgICAgaWYgKHRyYWNrV2lkdGggPiBmaXhlZFRyYWNrV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5wYXJlbnRFbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHsgd3JhcHBlclNpemUgLSAodHJhY2tXaWR0aCAtIGZpeGVkVHJhY2tXaWR0aCl9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyLnBhcmVudEVsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAkeyB3cmFwcGVyU2l6ZSArIChmaXhlZFRyYWNrV2lkdGggLSB0cmFja1dpZHRoKX1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbkhhbmRsZShkcmFnSGFuZGxlKSB7XG4gICAgICAgIGNvbnN0IHsgbWF4LCBtaW4sIHJldmVyc2UsIHZlcnRpY2FsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XG4gICAgICAgIGNvbnN0IHRyYWNrV2lkdGggPSB0aGlzLnRyYWNrV2lkdGgoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBTbGlkZXJVdGlsLnRyaW1WYWx1ZShtYXgsIG1pbiwgdGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVQb3NpdGlvbiA9IFNsaWRlclV0aWwuY2FsY3VsYXRlSGFuZGxlUG9zaXRpb24oe1xuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgcmV2ZXJzZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdHJhY2tXaWR0aCxcbiAgICAgICAgICAgIGhhbmRsZVdpZHRoOiBkcmFnSGFuZGxlLm9mZnNldFdpZHRoXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWdIYW5kbGUuc3R5bGVbcG9zaXRpb25dID0gYCR7dGhpcy5oYW5kbGVQb3NpdGlvbn1weGA7XG4gICAgfVxuXG4gICAgcG9zaXRpb25TZWxlY3Rpb24oZHJhZ0hhbmRsZSwgc2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgcmV2ZXJzZSwgdmVydGljYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgICBjb25zdCBoYW5kbGVXaWR0aCA9IE1hdGguZmxvb3IoZHJhZ0hhbmRsZS5vZmZzZXRXaWR0aCAvIDIpO1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuaGFuZGxlUG9zaXRpb24gKyBoYW5kbGVXaWR0aDtcblxuICAgICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICAgICAgc2l6ZSA9IHRoaXMudHJhY2tXaWR0aCgpIC0gc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGlvbi5zdHlsZVtkaW1lbnNpb25dID0gYCR7c2l6ZX1weGA7XG4gICAgfVxuXG4gICAgYWRqdXN0UGFkZGluZyh0aWNrc0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0b3RhbFRpY2tTaXplID0gdGhpcy50aWNrU2l6ZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3VyciwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWNrV2lkdGggPSB0aGlzLnRyYWNrV2lkdGgoKTtcbiAgICAgICAgY29uc3QgcmVtaW5kZXIgPSB0cmFja1dpZHRoIC0gdG90YWxUaWNrU2l6ZTtcblxuICAgICAgICBpZiAocmVtaW5kZXIgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSByZW1pbmRlciArIHRoaXMuZWxlbWVudE9mZnNldCh0aGlzLnRyYWNrKTtcbiAgICAgICAgICAgIHRpY2tzQ29udGFpbmVyLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtwYWRkaW5nfXB4YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnRPZmZzZXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IHZlcnRpY2FsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZlcnRpY2FsID8gc3R5bGUuYm90dG9tIDogc3R5bGUubGVmdCwgMTApO1xuICAgIH1cblxuICAgIGVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gdmVydGljYWwgPyBlbGVtZW50LmNsaWVudEhlaWdodCA6IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJNb2RlbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDAsIGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyB2YWx1ZSArICdweCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYW5pbWF0ZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCBNb2RlbCBmcm9tICcuL1N3aXRjaE1vZGVsJztcblxuY29uc3QgREVGQVVMVF9USFJFU0hPTEQgPSA1O1xuXG5jb25zdCBub29wID0gKCkgPT4geyAvKm5vb3AqLyB9O1xuXG5jbGFzcyBTd2l0Y2hDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cGRhdGVWaWV3ID0gbm9vcCwgb25DaGFuZ2UgPSBub29wKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmhhbmRsZU9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuaGFuZGxlTWFyZ2luID0gNDtcblxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcgPSB1cGRhdGVWaWV3O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2UgPSAoY2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMudXBkYXRlTW9kZWwoY2hlY2tlZCA/IHRoaXMuY29uc3RyYWluIDogMCkpO1xuXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGNoZWNrZWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGltaXQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IHRoaXMuY29uc3RyYWluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RyYWluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbiA9IChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGVsLnRyYW5zaXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC50cmFuc2l0aW9uID0gJ2FsbCAyMDBtcyBlYXNlLW91dCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vblByZXNzID0gKHsgcGFnZVggfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYXN0UHJlc3NYID0gdGhpcy5vcmlnaW5hbFByZXNzWCA9IHBhZ2VYO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25SZWxlYXNlID0gKHsgcGFnZVggfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLmFicyh0aGlzLm9yaWdpbmFsUHJlc3NYIC0gcGFnZVgpO1xuICAgICAgICAgICAgY29uc3Qgc25hcFBvaW50ID0gdGhpcy5jb25zdHJhaW4gLyAyO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRlbHRhIDwgREVGQVVMVF9USFJFU0hPTEQgPyAhdGhpcy5jaGVja2VkIDogdGhpcy5oYW5kbGVQb3NpdGlvbiA+IHNuYXBQb2ludDtcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoY2hlY2tlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbkRyYWcgPSAoeyBwYWdlWCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0IH0gPSB0aGlzLmNvb3JkcztcbiAgICAgICAgICAgIGNvbnN0IG92ZXJFbGVtZW50ID0gcGFnZVggPiBsZWZ0ICYmIHBhZ2VYIDwgcmlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChvdmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gdGhpcy5yZXZlcnNlID8gdGhpcy5sYXN0UHJlc3NYIC0gcGFnZVggOiBwYWdlWCAtIHRoaXMubGFzdFByZXNzWDtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMubGltaXQodGhpcy5oYW5kbGVQb3NpdGlvbiArIGRlbHRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFByZXNzWCA9IHBhZ2VYO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy51cGRhdGVNb2RlbCh0aGlzLmhhbmRsZVBvc2l0aW9uKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYWdlWCA+IHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMudXBkYXRlTW9kZWwodGhpcy5yZXZlcnNlID8gMCA6IHRoaXMuY29uc3RyYWluKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYWdlWCA8IGxlZnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy51cGRhdGVNb2RlbCh0aGlzLnJldmVyc2UgPyB0aGlzLmNvbnN0cmFpbiA6IDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgY29uc3RyYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVyT2Zmc2V0IC0gdGhpcy5oYW5kbGVPZmZzZXQgLSB0aGlzLmhhbmRsZU1hcmdpbjtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSh7IHdyYXBwZXJPZmZzZXQsIGhhbmRsZU9mZnNldCwgY2hlY2tlZCwgYW5pbWF0ZSA9IHRydWUsIGNvb3JkcywgaGFuZGxlTWFyZ2luLCByZXZlcnNlIH0pIHtcbiAgICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gd3JhcHBlck9mZnNldDtcbiAgICAgICAgdGhpcy5oYW5kbGVPZmZzZXQgPSBoYW5kbGVPZmZzZXQ7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmhhbmRsZU1hcmdpbiA9IGhhbmRsZU1hcmdpbjtcblxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSByZXZlcnNlO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLnVwZGF0ZU1vZGVsKGNoZWNrZWQgPyB0aGlzLmNvbnN0cmFpbiA6IDAsIGFuaW1hdGUpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RlbChwb3NpdGlvbiwgYW5pbWF0ZSA9IHRydWUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucmV2ZXJzZSA/IHRoaXMud3JhcHBlck9mZnNldCAvIDIgLSBwb3NpdGlvbiA6IHBvc2l0aW9uO1xuICAgICAgICByZXR1cm4gbmV3IE1vZGVsKHBvcywgYW5pbWF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hDb250cm9sbGVyO1xuIl0sIm5hbWVzIjpbImNvbnN0IiwibGV0IiwidGhpcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBQSxJQUFNLHVCQUF1QixHQUFHLFVBQUMsR0FBQSxFQUF5QztZQUF2QyxHQUFHLFdBQUU7WUFBQSxHQUFHLFdBQUU7WUFBQSxTQUFTLGlCQUFFO1lBQUEsY0FBYzs7ZUFDbEUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxjQUFjO0NBQUEsQ0FBQzs7QUFFL0NBLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQWtCLEVBQUU7NkNBQVQsR0FBRyxJQUFJOztJQUNoRUEsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCQSxJQUFNLFdBQVcsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdFQSxJQUFNLFVBQVUsR0FBRyxZQUFZLEdBQUcsV0FBVyxDQUFDOztJQUU5QyxPQUFPLFVBQVUsQ0FBQztDQUNyQixDQUFDOztBQUVGQSxJQUFNLG1CQUFtQixHQUFHLFVBQUMsR0FBTyxFQUFFLEdBQU8sRUFBRSxTQUFhLEVBQUU7aUNBQTlCLEdBQUcsQ0FBQyxDQUFLO2lDQUFBLEdBQUcsQ0FBQyxDQUFXOzZDQUFBLEdBQUcsQ0FBQzs7ZUFDeEQsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQzs7QUFFakRBLElBQU0sbUJBQW1C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