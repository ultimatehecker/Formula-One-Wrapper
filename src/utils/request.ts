import axios from 'axios';

function getRequest(url: any, offset: any, limit: any, callback: any) {
    axios.get(url + "?offset=" + offset + "&limit=" + limit).then(function(response: any) {
        if (response instanceof Error) {
            callback(response, null);
        }
        else {
            callback(null, response);
        }
    });
}

export default getRequest;