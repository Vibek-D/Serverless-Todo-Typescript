"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const AWS = __importStar(require("aws-sdk"));
const uuid = __importStar(require("uuid"));
async function ping(event, context) {
    console.log(context);
    const { name } = JSON.parse(event.body || '{}');
    const id = uuid.v4();
    const todo = { id, done: false, createdAt: new Date().toISOString(), name };
    const docClient = new AWS.DynamoDB.DocumentClient();
    return {
        statusCode: 201,
        body: JSON.stringify({
            item: todo
        })
    };
}
exports.ping = ping;
;
//# sourceMappingURL=functions.js.map