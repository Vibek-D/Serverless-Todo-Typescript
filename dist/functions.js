"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
async function ping(event, context) {
    console.log(event.headers);
    console.log(context);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify('Hello from Typed-Lambda'),
    };
}
exports.ping = ping;
;
//# sourceMappingURL=functions.js.map