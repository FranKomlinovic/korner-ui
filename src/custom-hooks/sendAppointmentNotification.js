export default function sendAppointmentNotification(message, userIDs) {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: 'Basic MmUwOTU4NjItMzk1OS00MzMzLThhMzUtMzYzMmYzMGRhZTI2',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            app_id: "aa22a423-da35-4c15-b8d7-981b6662af46",
            include_aliases: {
                external_id: userIDs
            },
            target_channel: "push",
            contents: {en: message},
            name: 'Potvrđen dolazak'
        })
    };

    fetch('https://onesignal.com/api/v1/notifications', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
