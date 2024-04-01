$(document).ready(function () {

    var liffId = "2004365472-dkzOlPWW";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    // sendMessages(text);
// }

// LINEトーク画面上でメッセージ送信
// function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    },{
        'type': 'sticker',
        'packageId': '11539',
        'stickerId': '52114113'
    },{
        'type': 'text',
        'text': '送信が完了しました！'
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
