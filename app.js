import { App } from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

// console.log("A");

// const app = new App({
//     token: process.env.SLACK_BOT_TOKEN,
//     signingSecret: process.env.SLACK_SIGNING_SECRET,
//     socketMode: true,
//     appToken: process.env.SLACK_APP_TOKEN,
// });

// console.log("B");

// (async () => {
//     console.log("C");
//     try {
//         console.log("D");
//         await app.start();
//         console.log("E");
//     } catch (err) {
//         console.error(err);
//     }
// })();

// Slack 앱 초기화 (소켓모드 사용)
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN, // 소켓모드 토큰(app level tokens)
    logLevel: "DEBUG",
});

app.command("/망고", async ({ ack, say }) => {
    // 커맨드 입력
    await ack();
    await say(
        // 답변
        "망고는 망고속 식물의 열매이다. 옻나무과 식물이라서 망고에 관한 알레르기가 있는 사람은 입 안에 알레르기 ..."
    );
});

// 서버
(async () => {
    try {
        await app.start();
        console.log("Started!");
    }
    catch (err) {
        console.log(err);
    }
})();