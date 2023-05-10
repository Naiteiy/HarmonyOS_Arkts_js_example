import window from '@ohos.window';
import router from '@ohos.router';
import http from '@ohos.net.http';
import Prompt from '@system.prompt';

export default {
    data: {
        title: "",

            username: "",
            password: ""

    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    change(e) {
        this.username=e.value;
    },
    change1(e){
        this.password=e.value;
    },
    sucesslogin() {
        if (this.username == "admin" && this.password == "admin") {
            router.push({
                url: "pages/start/start"
            });
        }
        else {
            Prompt.showToast({
                message: "用户名或密码错误",
                duration: 2000,
            });
        }
    }
}
