import window from '@ohos.window';
import router from '@ohos.router';
export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    sucesslogin(){
        router.push({url:"pages/start/start"});

    }
}



