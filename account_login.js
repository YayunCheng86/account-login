function userLogin (userInfo) {
    let name 
    const users = [
        {
            firstName: 'Tony',
            email: 'tony@stark.com',
            password: 'iamironman'
        },
        {
            firstName: 'Steve',
            email: 'captain@hotmail.com',
            password: 'icandothisallday'
        },
        {
            firstName: 'Peter',
            email: 'peter@parker.com',
            password: 'enajyram'
        },
        {
            firstName: 'Natasha',
            email: 'natasha@gamil.com',
            password: '*parol#@$!'
        },
        {
            firstName: 'Nick',
            email: 'nick@shield.com',
            password: 'password'
        }
    ]

    // 比對userpost的資料與users的資料
    name = users.find(item => item.email === userInfo.email && item.password === userInfo.password)

    // 如果配對成功，name會變成user的名字，否則回傳undefined
    if(name) name = name.firstName

    return name
}

module.exports = userLogin