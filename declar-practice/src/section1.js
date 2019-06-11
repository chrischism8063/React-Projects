toLowerCase(['FOO', 'BAR'])

//imparative
const toLowerCase = input => {
    const output = []
    for(let i = 0; i < input.length; i++){
        output.push(input[i].toLowerCase())
    }
    return output
}

//declarative
//No need to use variables, keep the value updated, or create/mutate a state
const toLowercase = input => input.map(
    value => value.toLowerCase()
)
