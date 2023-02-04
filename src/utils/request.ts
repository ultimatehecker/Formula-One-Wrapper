import rest from 'restler';

function getRequest(url: any, offset: any, limit: any, callback: any) {
    rest.get(url + "?offset=" + offset + "&limit=" + limit).on('complete', function(response: any) {
        if (response instanceof Error) {
            callback(response, null);
        }
        else {
            callback(null, response);
        }
    });
}

module.exports = getRequest;