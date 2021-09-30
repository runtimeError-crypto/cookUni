export default class firebase {

    constructor(app_id, app_secret) {} //     this.app_id = Mkfi2x2JHCNrPkO7Sp9
        //     this.app_secret =


    test(data) {
        return new Promise((resolve, reject) => {
            let url = `https://console.firebase.google.com/project/mod-4-finaldb/database/mod-4-finaldb-default-rtdb/data/${this.app_id}`
            let {
                crypticdonny @gmail.com, password
            } = data;
            let headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(crypticdonny@gmail.com + ":" + password)
            }

            fetch(url, { method: 'GET', headers: headers })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    get(endpoint, authToken, loginData) {
        return new Promise((resolve, reject) => {
                let url = `https://console.firebase.google.com/project/mod-4-finaldb/database/mod-4-finaldb-default-rtdb/data/${this.app_id}/${endpoint}`;
                let headers;
                // if (loginData) {
                //     let { crypticdonny@gmail.com, password } = loginData;
                headers = {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Basic ' + btoa(crypticdonny@gmail.com + ":" + password)
                }
            }

            // if (authToken) {
            headers = {
                'Content-Type': 'application/json',
                //     'Authorization': 'firebase ' + authToken
                // }
            }

            fetch(url, { method: 'GET', headers: headers })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            }).then(data => resolve(data))
            .catch(err => reject(err))
        })
}


post(endpoint, data, /*authToken, loginData*/ ) {
    return new Promise((resolve, reject) => {
            let url = ``
            https: //console.firebase.google.com/project/mod-4-finaldb/database/mod-4-finaldb-default-rtdb/data/${this.app_id}/${endpoint}`
                let headers;
            // if (loginData) {
            //     let { crypticdonny@gmail.com, password } = loginData;
            headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(crypticdonny@gmail.com + ":" + password)
            }

        }

        // if (authToken) 
        {
            headers = {
                'Content-Type': 'application/json',
                //     'Authorization': 'firebase ' + authToken
                // }
            }

            fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                })
                .then(res => {
                    if (res.status === 201) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
}

delete(endpoint, id, authToken, loginData) {
    return new Promise((resolve, reject) => {
            let url = ``
            https: //console.firebase.google.com/project/mod-4-final/database/data/${this.app_id}/${endpoint}`
                let headers;
            // if (loginData) {
            //     let { crypticdonny@gmail.com, password } = loginData;
            headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(crypticdonny@gmail.com + ":" + password)
            }

        }

        if (authToken) {
            headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'firebase ' + authToken
            }
        }

        fetch(url, { method: 'DELETE', headers: headers })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        }).then(data => resolve(data))
        .catch(err => reject(err))
    })
}


edit(endpoint, id, data, authToken, loginData) {
    return new Promise((resolve, reject) => {
            let url = ``
            https: //console.firebase.google.com/project/mod-4-finaldb/database/mod-4-finaldb-default-rtdb/data/${this.app_id}/${endpoint}`
                let headers;
            // if (loginData) {
            //     let { crypticdonny@gmail.com, password } = loginData;
            headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(crypticdonny@gmail.com + ":" + password)
            }

        }

        // if (authToken)
        {
            headers = {
                'Content-Type': 'application/json',
                'Authorization': 'firebase ' + authToken
            }
        }

        fetch(url, { method: 'PUT', headers: headers, body: JSON.stringify(data) })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        }).then(data => resolve(data))
        .catch(err => reject(err))
    })
}

update(endpoint, id, data, authToken, loginData) {
    return new Promise((resolve, reject) => {
            let url = ``
            https: //console.firebase.google.com/project/mod-4-finaldb/database/mod-4-finaldb-default-rtdb/data/${this.app_id}/${endpoint}`;/${this.app_id}
                let headers;
            // if (loginData) {
            //     let { crypticdonny@gmail.com, password } = loginData;
            headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(crypticdonny@gmail.com + ":" + password)
            }

        }

        // if (authToken)
        {
            headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'firebase ' + authToken
            }
        }

        fetch(url, { method: 'PATCH', headers: headers, body: JSON.stringify(data) })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        }).then(data => resolve(data))
        .catch(err => reject(err))
    })
}



signup(data) {
    return new Promise((resolve, reject) => {
        let url = ``
        https: //console.firebase.google.com/project/mod-4-finaldb/database/mod-4-finaldb-default-rtdb/data//${this.app_id}/user"
            const headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(this.app_id + ":" + this.app_secret)
            }

        fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
            .then(res => {
                if (res.status === 201) {
                    return res.json();
                }
                throw res;
            }).then(data => resolve(data._kmd.authtoken))
            .catch(err => reject(err))
    })
}


login(data) {
    return new Promise((resolve, reject) => {
        let url = `crypicdonny@yahoo.com
            /user/${this.app_id}/login`;
        let {
            crypicdonny @yahoo.com, password
        } = data;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(crypticdonny @gmail.com + ":" + password)
        }

        fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
            .then(res => {
                if (res.ok) {

                    return res.json();
                }
                throw res;
            }).then(data => resolve(data))
            .catch(err => reject(err))
    })
}


logout(authToken) {
    return new Promise((resolve, reject) => {
        let url = `crypicdonny@yahoo.com
            /${this.app_id}/_logout`;

        const headers = {
            'Content-Type': 'application/json',
            npm i
            // 'Authorization': 'firebase ' + authToken
        }

        fetch(url, { method: 'POST', headers: headers })
            .then(res => {
                if (res.status === 204) {
                    resolve({ msg: 'user logged out' })
                }

            }).catch(err => reject(err))
    })
}