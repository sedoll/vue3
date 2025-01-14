const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            num1: Math.floor(Math.random() * 9) + 1,
            num2: Math.floor(Math.random() * 9) + 1,
            res: 0,
            cnt: 0,
            guguList: [],
        };
    },
    methods: {
        fn() {
            if (this.res == '' || this.res == undefined) {
                alert('값을 입력 하세요')
                return false
            }

            const value = this.num1 * this.num2;
            if (value == this.res) {
                this.cnt++;
            }
            this.addGuguList(value)
            this.resetNumber()
            this.$refs.answer.focus() // 포커스
        },
        resetNumber() {
            this.num1 = Math.floor(Math.random() * 9) + 1
            this.num2 = Math.floor(Math.random() * 9) + 1
            this.res = ''
        },
        addGuguList(value) {
            this.guguList.push(`${this.num1} x ${this.num2} = ${this.res}` + (value == this.res ? ', O' : ', X'))
        },
    },
});

app.mount('#root');