import GroupNode from './group-node';
import Traversable from '../mixins/traversable';
import { animationFrame, throttle } from '../common';

const FRAME_DELAY = 1000 / 60;

class RootNode extends GroupNode {
    constructor(canvas) {
        super();

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        const invalidateHandler = this._invalidate.bind(this);
        this.invalidate = throttle(() => {
            animationFrame(invalidateHandler);
        }, FRAME_DELAY);
    }

    destroy() {
        super.destroy();
        this.canvas = null;
        this.ctx = null;
    }

    load(elements, pos, cors) {
        this.loadElements(elements, pos, cors);
        this._invalidate();
    }

    _invalidate() {
        if (!this.ctx) {
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderTo(this.ctx);
    }
}

Traversable.extend(RootNode.prototype, "childNodes");

export default RootNode;