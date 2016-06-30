export class ApiService {
    url = 'http://localhost:1338';

    constructor($http){
        this.http = $http;
    }

    getBands(){
        return this.http.get(`${this.url}/bands`)
            .then(response => response.data);
    }

    getBand(bandId){
        return this.http.get(`${this.url}/bands/${bandId}`)
            .then(response => response.data);
    }

    getAlbum(albumId){
        return this.http.get(`${this.url}/albums/${albumId}`)
            .then(response => response.data);
    }

    getTrack(trackId){
        return this.http.get(`${this.url}/tracks/${trackId}`)
            .then(response => response.data);
    }

    getCommentsForTrack(trackId) {
        return this.http.get(`${this.url}/tracks/${trackId}/comments`)
            .then(response => response.data);
    }

    postCommentForTrack(trackId, postData) {
        postData.parentId = trackId;
        return this.http.post(`${this.url}/comments`, postData)
            .then(response => response.data);
    }

}
