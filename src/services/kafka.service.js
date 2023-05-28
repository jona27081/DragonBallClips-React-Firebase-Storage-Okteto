class KafkaService {
    url = 'https://nodeproducer-service-jona27081.cloud.okteto.net/';

    reactionPush = async (reaction) => {
        await fetch(this.url + 'like?reactionName=' + reaction, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => console.log(response.json()))
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

}

export default new KafkaService();
