//Images
export const getImages = (render) => {

    const images = {
        background: new Image(),
        foreground: new Image(),
        aim: new Image(),
        shells: new Image(),
        target:{ //https://raw.githubusercontent.com/vaielab/DuckHuntCss/master/sprite.png
            up: {
                0: new Image(),
                1: new Image(),
                2: new Image(),
            },
            right: {
                0: new Image(),
                1: new Image(),
                2: new Image(),
            },
            down: {
                0: new Image(),
            },
            left: {
                0: new Image(),
                1: new Image(),
                2: new Image(),
            },
        },
    };

    images.background.onload = render;
    images.background.src = 'assets/background.png';
    images.foreground.onload = render;
    images.foreground.src = 'assets/foreground.png';
    images.shells.src = 'assets/shells.png';
    images.aim.src = 'assets/muzzelFlash.png';
    images.target.up[0].src = 'assets/upa.png';
    images.target.up[1].src = 'assets/upb.png';
    images.target.up[2].src = 'assets/upc.png';
    images.target.right[0].src = 'assets/righta.png';
    images.target.right[1].src = 'assets/rightb.png';
    images.target.right[2].src = 'assets/rightc.png';
    images.target.down[0].src = 'assets/dead.png';
    images.target.left[0].src = 'assets/lefta.png';
    images.target.left[1].src = 'assets/leftb.png';
    images.target.left[2].src = 'assets/leftc.png';

    return images;
}
