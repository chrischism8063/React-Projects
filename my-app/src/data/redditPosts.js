import moment from 'moment'

export default 
[
    {
        title:"My buddy's dog saw a moose",
        comments: 100,
        submitted:moment()
    },
    {
        title:"A monkey running",
        comments: 6,
        submitted:moment().subtract(4, 'day')
    },
    {
        title:"Programming a Reddit Post",
        comments: 17,
        submitted:moment().subtract(1, 'minute')
    },
    {
        title:"Other things",
        comments: 45,
        submitted: moment().subtract(7, 'month')
    },
    {
        title:"The last night of his life!",
        comments: 3,
        submitted: moment().subtract(1, 'minute')
    }
]