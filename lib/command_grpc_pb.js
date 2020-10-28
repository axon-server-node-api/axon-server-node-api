// GENERATED CODE -- DO NOT EDIT!

'use strict';
var command_pb = require('./command_pb.js');
var common_pb = require('./common_pb.js');

function serialize_io_axoniq_axonserver_grpc_command_Command(arg) {
  if (!(arg instanceof command_pb.Command)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.command.Command');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_command_Command(buffer_arg) {
  return command_pb.Command.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_command_CommandProviderInbound(arg) {
  if (!(arg instanceof command_pb.CommandProviderInbound)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.command.CommandProviderInbound');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_command_CommandProviderInbound(buffer_arg) {
  return command_pb.CommandProviderInbound.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_command_CommandProviderOutbound(arg) {
  if (!(arg instanceof command_pb.CommandProviderOutbound)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.command.CommandProviderOutbound');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_command_CommandProviderOutbound(buffer_arg) {
  return command_pb.CommandProviderOutbound.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_command_CommandResponse(arg) {
  if (!(arg instanceof command_pb.CommandResponse)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.command.CommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_command_CommandResponse(buffer_arg) {
  return command_pb.CommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The CommandService defines the gRPC requests necessary for subscribing command handlers, and dispatching commands. 
var CommandServiceService = exports['io.axoniq.axonserver.grpc.command.CommandService'] = {
  // Opens a stream allowing clients to register command handlers and receive commands. 
openStream: {
    path: '/io.axoniq.axonserver.grpc.command.CommandService/OpenStream',
    requestStream: true,
    responseStream: true,
    requestType: command_pb.CommandProviderOutbound,
    responseType: command_pb.CommandProviderInbound,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_command_CommandProviderOutbound,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_command_CommandProviderOutbound,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_command_CommandProviderInbound,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_command_CommandProviderInbound,
  },
  // Dispatches the given command, returning the result of command execution 
dispatch: {
    path: '/io.axoniq.axonserver.grpc.command.CommandService/Dispatch',
    requestStream: false,
    responseStream: false,
    requestType: command_pb.Command,
    responseType: command_pb.CommandResponse,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_command_Command,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_command_Command,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_command_CommandResponse,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_command_CommandResponse,
  },
};

