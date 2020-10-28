// GENERATED CODE -- DO NOT EDIT!

'use strict';
var control_pb = require('./control_pb.js');
var common_pb = require('./common_pb.js');

function serialize_io_axoniq_axonserver_grpc_control_ClientIdentification(arg) {
  if (!(arg instanceof control_pb.ClientIdentification)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.control.ClientIdentification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_control_ClientIdentification(buffer_arg) {
  return control_pb.ClientIdentification.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_control_PlatformInboundInstruction(arg) {
  if (!(arg instanceof control_pb.PlatformInboundInstruction)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.control.PlatformInboundInstruction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_control_PlatformInboundInstruction(buffer_arg) {
  return control_pb.PlatformInboundInstruction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_control_PlatformInfo(arg) {
  if (!(arg instanceof control_pb.PlatformInfo)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.control.PlatformInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_control_PlatformInfo(buffer_arg) {
  return control_pb.PlatformInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_control_PlatformOutboundInstruction(arg) {
  if (!(arg instanceof control_pb.PlatformOutboundInstruction)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.control.PlatformOutboundInstruction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_control_PlatformOutboundInstruction(buffer_arg) {
  return control_pb.PlatformOutboundInstruction.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service describing operations for connecting to the AxonServer platform.
//
// Clients are expected to use this service on any of the Platform's Admin nodes to obtain connection information of the
// node that it should set up the actual connection with. On that second node, the clients should open an instruction
// stream (see OpenStream), so that AxonServer and the client application can exchange information and instructions.
var PlatformServiceService = exports['io.axoniq.axonserver.grpc.control.PlatformService'] = {
  // Obtains connection information for the Server that a Client should use for its connections. 
getPlatformServer: {
    path: '/io.axoniq.axonserver.grpc.control.PlatformService/GetPlatformServer',
    requestStream: false,
    responseStream: false,
    requestType: control_pb.ClientIdentification,
    responseType: control_pb.PlatformInfo,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_control_ClientIdentification,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_control_ClientIdentification,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_control_PlatformInfo,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_control_PlatformInfo,
  },
  // Opens an instruction stream to the Platform, allowing AxonServer to provide management instructions to the application 
openStream: {
    path: '/io.axoniq.axonserver.grpc.control.PlatformService/OpenStream',
    requestStream: true,
    responseStream: true,
    requestType: control_pb.PlatformInboundInstruction,
    responseType: control_pb.PlatformOutboundInstruction,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_control_PlatformInboundInstruction,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_control_PlatformInboundInstruction,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_control_PlatformOutboundInstruction,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_control_PlatformOutboundInstruction,
  },
};

