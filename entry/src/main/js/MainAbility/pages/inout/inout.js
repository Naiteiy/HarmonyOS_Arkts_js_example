import prompt from '@system.prompt';
export default {
    data: {
        direction: 'column',
        list: []
    },
    onInit() {
        this.list = []
        this.listAdd = []
        for (var i = 1; i <= 2; i++) {
            var dataItem = {
                value: 'GROUP' + i,
            };
            this.list.push(dataItem);
        }
    },
    collapse(e) {
        prompt.showToast({
            message: 'Close ' + e.groupid
        })
    },
    expand(e) {
        prompt.showToast({
            message: 'Open ' + e.groupid
        })
    }
}