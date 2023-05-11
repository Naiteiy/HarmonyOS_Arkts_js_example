import Prompt from '@system.prompt';
import router from '@ohos.router'
export default {
    data: {
        title: "",
        searchvaule:"",
        isPressed: true,
        isPressed1:false,
        direction: 'column',
        list: [],
        imgsrc:''
    },

    click1() {

        if (this.isPressed = true) {

            this.isPressed = true;
            this.isPressed1 = false;
            this.$element('body').setStyle('display','flex');
            this.$element('body2').setStyle('display','none');
        }
    },
    click2() {

        if (this.isPressed1 = true) {

            this.isPressed = false;
            this.isPressed1 = true;
            this.$element('body').setStyle('display','none');
            this.$element('body2').setStyle('display','flex');

        }
    },
    save(){
        Prompt.showToast({
            message: "保存成功",
            duration: 500,
        });
        setTimeout(() => {
            router.push({url:"pages/start/start"});
        }, 500);

    }

}
