"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAxonClient = void 0;
__exportStar(require("./lib/common_pb"), exports);
__exportStar(require("./lib/control_pb"), exports);
__exportStar(require("./lib/command_pb"), exports);
__exportStar(require("./lib/query_pb"), exports);
__exportStar(require("./lib/event_pb"), exports);
var control_grpc_pb = require("./lib/control_grpc_pb");
var command_grpc_pb = require("./lib/command_grpc_pb");
var query_grpc_pb = require("./lib/query_grpc_pb");
var event_grpc_pb = require("./lib/event_grpc_pb");
var client;
function loadAxonClient(loadProto) {
    if (client)
        return client;
    var control = loadProto(control_grpc_pb);
    var command = loadProto(command_grpc_pb);
    var query = loadProto(query_grpc_pb);
    var event = loadProto(event_grpc_pb);
    client = {
        PlatformService: control.io.axoniq.axonserver.grpc.control.PlatformService,
        CommandService: command.io.axoniq.axonserver.grpc.command.CommandService,
        QueryService: query.io.axoniq.axonserver.grpc.query.QueryService,
        EventStore: event.io.axoniq.axonserver.grpc.event.EventStore,
        EventScheduler: event.io.axoniq.axonserver.grpc.event.EventScheduler,
    };
    return client;
}
exports.loadAxonClient = loadAxonClient;
