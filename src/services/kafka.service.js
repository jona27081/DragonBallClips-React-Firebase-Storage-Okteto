class KafkaService {
    url = 'https://node-producer-reactions-service-kafka-jona27081.cloud.okteto.net/';

    reactionPush = async (data) => {
        await fetch(this.url + 'reaction?userId=' + data.userId + '&objectId=' + data.objectId + '&reactionId=' + data.reactionId  , {
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
