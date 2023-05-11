import Prompt from '@system.prompt';
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
    searchchange(e){
        this.searchvaule = e.vaule;
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
    onInit() {
        this.list = []

        for (var i = 1; i <= 5; i++) {
            var dataItem = {
                value: '供应商' + i,
            };
            this.list.push(dataItem);
        }
    }

}
