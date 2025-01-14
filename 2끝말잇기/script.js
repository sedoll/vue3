const { createApp } = Vue;

// 글로벌 컴포넌트 등록
// 중복하지 않고 같은 코드를 여러번 사용하고 싶을 때 사용
const wordRelay = {
    template: `
        <p>{{ word }}</p>
        <form @submit.prevent="onSubmitForm">
          <input type="text" ref="answer" v-model="res">
          <button type="submit">입력</button>
        </form>
        <p>{{ check }}</p>
        <br>
    `,
    data() {
        return {
            word: '깃허브',
            res: '',
            check: '',
        };
    },
    methods: {
        onSubmitForm() {
            if (!this.res) {
                alert('값을 입력 하세요');
                return false;
            }

            if (this.word[this.word.length - 1] !== this.res[0]) {
                this.check = 'X';
                this.res = '';
                return false;
            }

            this.check = 'O';
            this.word = this.res; // 수정: this.res로 변경
            this.res = '';
            this.$refs.answer.focus();
        },
    },
};

// Vue 앱 생성 및 컴포넌트 등록
const app = createApp({});
app.component('word-relay', wordRelay);

// 마운트
app.mount('#root');