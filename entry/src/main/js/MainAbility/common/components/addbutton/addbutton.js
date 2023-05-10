import window from '@ohos.window';
import router from '@ohos.router';
export default {
    props:{
        imgsrc:"",
        page:"",
        buttontext:"",
    },
    onInit() {

    },
    buttononclick(page){
        router.push({url:"pages/"+page+"/"+page});

    }
}
