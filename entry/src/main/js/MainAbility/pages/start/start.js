import router from '@ohos.router';
import document from '@ohos.document';
import { Button } from '@ohos.multimodalInput.mouseEvent';
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
            this.$element('button1').setStyle('display','flex');
            this.$element('button2').setStyle('display','flex');
            this.$element('button3').setStyle('display','flex');
            this.$element('button4').setStyle('display','flex');
            this.$element('my').setStyle('display','none');
        }

    },
    ifclick1() {

        if (this.isPressed1 = true) {

            this.clickImage1 = "/common/img/my_fill.png";
            this.clickImage = '/common//img/index.png';
            this.isPressed1 = true;
            this.isPressed = false;
            this.$element('button1').setStyle('display','none');
            this.$element('button2').setStyle('display','none');
            this.$element('button3').setStyle('display','none');
            this.$element('button4').setStyle('display','none');
            this.$element('my').setStyle('display','flex');
        }


    },
    logout(){
        router.push({url:"pages/index/index"});
    }


}
