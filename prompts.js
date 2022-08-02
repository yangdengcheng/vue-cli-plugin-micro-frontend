module.exports = [
    {
        name: 'type',
        type: 'list',
        message: 'Pick a project type:',
        choices: [
            {
                name: 'master',
                value: 'master'
            },
            {
                name: 'child',
                value: 'child'
            }
        ]
    },
    {
        name: 'port',
        type: 'input',
        default: 8080,
        message: 'Input a child project port:',
        when: answers => answers.type === 'child'
    }
]