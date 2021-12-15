export default [
    {
        name: 'Input',
        id: '1',
        propsValue: {
            value: '',
            placeholder: '占位',
            disabled: false,
            resize: 'none',
            label: '名称',
            type: 'text',
            clearable: false,
            size: 'medium',
            'show-word-limit': true
        },
        styles: {
            color: 'red',
            width: '200px'
        },
        position: {
            left: '10px',
            right: '',
            top: '10px',
            bottom: ''
        },
        events: {
            input: (value) => {console.log(`input:正在输入${value}`);},
            change: (value) => {console.log(`change:正在输入${value}`);},

        }
    },
    {
        name: 'Table',
        id: '2',
        propsValue: {
            data: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            columnData: [
                {
                    prop: 'date',
                    label: '日期',
                    width: 180
                },
                {
                    prop: 'name',
                    label: '姓名',
                    width: 180
                },
                {
                    prop: 'address',
                    label: '地址',
                }
            ],

        },
        styles: {
            width: '100%'
        },
        position: {
            left: '',
            right: '',
            top: '150px',
            bottom: ''
        }

    }
];
