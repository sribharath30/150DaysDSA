function query () {
    return new Promise((resolve, reject) => {
        for (let i = 0; true; i++) {
            console.log(i)
        }
    })
}

async function test1 () {
    const data = query()
    console.log(data)
    const a = 'hello world'
    console.log(a)
}

async function test2() {
    
}


// []
// [query]
// [assign a]
// EXPRESS SERVER infinite (CPU, memory)

const route1 = async (req, res) => {
    for(let i = 0; true; i++) {
        console.log(i)
    }
    res.send('Hello')
}

const route2 = async (req, res) => {
    res.send('World')
}

// > user1 hits route1
// > user2 hits route2 >

for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1)
}
// >0,1,2

for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1)
}
//> 3 3 3