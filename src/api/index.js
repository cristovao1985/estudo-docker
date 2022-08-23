import axios from "axios";
const baseUrl = `http://${location.hostname}:8081`;

export default {

    getPosts: async () => {
        console.log(baseUrl)
        var data = await axios({
            method: "GET",
            url: `${baseUrl}/posts`,
            headers: {
                'Authorization': 'Basic MTEyMzQ1Njc4OTA6MDk4NzY1NDMyMTE='
            }
        }).then(result => {
            return result
        }).catch(error => {
            console.log("Error while getting posts", error)
            return [];
        });

        return data;
    }
}