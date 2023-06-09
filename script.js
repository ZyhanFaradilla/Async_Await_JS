function makeRequest(location) {
    return new Promise((resiolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location == `Google`) {
            resiolve(`Google says hi`) 
        } else {
            reject(`We can only talk to Google`)
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=> {
        console.log(`Processing response`)
        resolve(`Extra information + ${response}`)
    })
}

makeRequest(`Google`).then(response => {
    console.log(`Response Received`)
    return processRequest(response)
    }).then(processedResponse => {
        console.log(processedResponse)
    }).catch(err => {
        console.log(err)
})