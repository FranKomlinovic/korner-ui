import OneSignal from 'react-onesignal';

export default async function runOneSignal(user) {
    await OneSignal.init({ appId: 'aa22a423-da35-4c15-b8d7-981b6662af46', allowLocalhostAsSecureOrigin: true}).then(a => {
        OneSignal.Slidedown.promptPush();
        OneSignal.login(user.cognitoID)
    });
}
