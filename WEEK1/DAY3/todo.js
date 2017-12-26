let vm = new Vue({
    el: '#app',
    data: {
        title: '',
        todos: [{isSelected: false, content: '吃饭'}, {isSelected: false, content: '睡觉'}],
        cur: '',
        hash:''
    },
    created() {//获取数据
        //    若本地存储里面有，取localStorage，如果没有则取初始化的data里面的todos
        this.todos = JSON.parse(localStorage.getItem('todos')) || this.todos;
        this.hash = window.location.hash || '#/all';
        // hashchange 捕获hash值的变化
        window.addEventListener('hashchange', () => {
            this.hash = window.location.hash;
        }, false)
    },

    methods: {
        add() {
            this.todos.push({isSelected: false, content: this.title});
            this.title = '';
        },

        remove(todo) {
            //把匹配条件的内容返回，不匹配的内容过滤掉
            this.todos = this.todos.filter(item => {
                return item != todo;
            });
        },

        remember(todo) {
            this.cur = todo;
        },

        cancel() {//输入框消失，
            this.cur = '';
        },
    },

    computed: {
        count() {//默认只掉用get方法
            //    等于没有选中的多选框的个数
            return this.todos.filter(item => {
                return !item.isSelected;
            }).length
        },
        filterTodos(){
            if(this.hash=='#/all'){
                return this.todos;
            }
            if(this.hash=='#/finish'){
                return this.todos.filter(item=>{
                    return item.isSelected;
                });
            }
            if(this.hash=='#/unfinish'){
                return this.todos.filter(item=>{
                    return !item.isSelected;
                });
            }
        }

    },
    watch: {
        todos: {
            handler(newV) {
                localStorage.setItem('todos', JSON.stringify(newV))
            },
            deep: true//深度监控
        }
    }
});

/*
* 1.动态绑定
* 2、
* 3、计算count的值
* 4双击列表内容时，出现可以编辑的文本框，
* 5、根据hash值确定列表里显示的是什么内容
*  - 重新计算一个属性(filterTodo)，根据hash值从todos刷选出符合的事项
*
 */