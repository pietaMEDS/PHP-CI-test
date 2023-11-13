const logins = ['maksim', 'vladik'];
const passwords = [4444, 4321];

document.getElementById('submitId').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('dfgdfgfd');
    for(let i = 0; i < logins.count; i++){
        if(document.getElementById('login').value == logins[i] && document.getElementById('password').value == passwords[i]){
            console.log('rabotaet');
        }
    }
});