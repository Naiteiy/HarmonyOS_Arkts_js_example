import window from '@ohos.window';
import router from '@ohos.router';
export default {
    data: {
        clickImage: "/common/img/index_fill.png",
        clickImage1: "/common/img/my.png",
        isPressed: true,
        isPressed1: false
    },
    ifclick() {

        if (this.isPressed = true) {
            this.clickImage = "/common/img/index_fill.png";
            this.clickImage1 = '/common//img/my.png';
            this.isPressed = true;
            this.isPressed1 = false;
            router.push({url:"pages/start/start"});
        } else {

            this.clickImage = '/common//img/index.png';
            this.clickImage1 = '/common//img/my_fill.png';
            this.isPressed1 = true;
            this.isPressed = false;
        }

    },
    ifclick1() {

        if (this.isPressed = true) {

            this.clickImage1 = "/common/img/my_fill.png";
            this.clickImage = '/common//img/index.png';
            this.isPressed1 = true;
            this.isPressed = false;
            router.push({url:"pages/my/my"});
        } else {

            this.clickImage1 = '/common//img/my.png';
            this.clickImage = '/common//img/index_fill.png';
            this.isPressed = true;
            this.isPressed1 = false;
        }

    }
}