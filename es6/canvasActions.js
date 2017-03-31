import { DIRECTION, HEIGHT, WIDTH, TARGET, ROUNDS_PER_LEVEL, COLLISION_PADDING } from './constants';
let _ctx;
let _images;
let rotation = [0, 0, 0, 1, 1, 1, 2, 2, 2];
export const setCanvasData = (ctx, images) => {
    _ctx = ctx;
    _images = images;
}

export const drawImageBackground = () =>
    _ctx.drawImage(_images.background, 0, 0, WIDTH, HEIGHT);

export const drawImageForeground = () =>
    _ctx.drawImage(_images.foreground, -10, 290, WIDTH, 130);

export const drawShotgunShells = (count) =>
        _ctx.drawImage(_images.shells, WIDTH - (count * 25), HEIGHT - 75, 75, 75);

export const drawTarget = ({x, y}, axis) => {
    const dir = axis.x ? axis.x : axis.y;
    if(dir == DIRECTION.DOWN) {
        _ctx.drawImage(_images.target[dir][0], x-25, y-25, TARGET, TARGET);
    } else {
        const val = rotation.pop();
        _ctx.drawImage(_images.target[dir][val], x-25, y-25, TARGET, TARGET);
        rotation.unshift(val);
    }
};

export const drawFlash = ({x, y}) =>
        _ctx.drawImage(_images.aim, x, y, 40, 40);

export const drawScoreBoard = (rounds, score, highScore) => {
    //Scoreboard
    _ctx.beginPath();
    _ctx.fillStyle='black';
    _ctx.fillRect(0, HEIGHT - 60, 155, 70);
    //Round status
    for (let i = 0; i < ROUNDS_PER_LEVEL; i++) {
        _ctx.beginPath();
        _ctx.arc(((i + 1) * 12)+10,HEIGHT-17,5,0,2*Math.PI);
        switch (rounds[i]) {
            case 1:
                _ctx.fillStyle='green';
                break;
            case 0:
                _ctx.fillStyle='red';
                break;
            case undefined:
            default:
                _ctx.fillStyle='grey';
                break;
        }
        _ctx.fill()
    }
    //Score
    _ctx.fillStyle = "white";
    _ctx.font = "16px Helvetica";
    _ctx.textAlign = "left";
    _ctx.textBaseline = "top";
    _ctx.fillText("Score: " + score, 15, HEIGHT - 40);
    //High Score
    if(highScore > 0) {
        _ctx.fillStyle = "white";
        _ctx.font = "16px Helvetica";
        _ctx.textAlign = "left";
        _ctx.textBaseline = "top";
        _ctx.fillText("Record: " + highScore, 15, HEIGHT - 60);
    }
}

export const drawClickToStart = (level) => {
    _ctx.fillStyle = "rgb(0, 0, 0)";
    _ctx.font = "24px Helvetica";
    _ctx.textAlign = "left";
    _ctx.textBaseline = "top";
    _ctx.fillText("Click to start Level " + level, 250, 175)
}
