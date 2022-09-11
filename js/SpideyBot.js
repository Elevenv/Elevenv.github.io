function SendMsg(){
    var Name = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var Subject = document.getElementById('subject').value
    var Message = document.getElementById('message').value
    const req = new XMLHttpRequest()
    req.open('POST','https://discord.com/api/webhooks/898214046669627422/Uov1DyNbewKV8PSQEYyxpbHQqDmZs0ArlIK2bbna5xt5HHlgN5xMUt3jefJ8V1ALRoIW')
    req.setRequestHeader('Content-type','application/json')
    const params={
        username :'Spidey Bot',
        content : 
            'Name : '+Name+
            '\nEmail : '+Email+
            '\nSubject : '+Subject+
            '\nMessage : '+Message
    }
    req.send(JSON.stringify(params))
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('message').value = ''
    }