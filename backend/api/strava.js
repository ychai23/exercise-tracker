//the original inspiration and masterpiece
const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
        .then(function(data){
            let userData = data.results;
            console.log(userData);
        })
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            client_id: '51546',
            client_secret: '8b783975113aadbf78c5662eed67ba8362eefdd7',
            refresh_token: "8e54c6f057250c2d89be5fc93d735bbe64810d74",
            grant_type: 'refresh_token'
        })
    })
    .then(res => getActivites(res))
      
}

reAuthorize()