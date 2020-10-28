// GENERATED CODE -- DO NOT EDIT!

'use strict';
var query_pb = require('./query_pb.js');
var common_pb = require('./common_pb.js');

function serialize_io_axoniq_axonserver_grpc_query_QueryProviderInbound(arg) {
  if (!(arg instanceof query_pb.QueryProviderInbound)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.query.QueryProviderInbound');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_query_QueryProviderInbound(buffer_arg) {
  return query_pb.QueryProviderInbound.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_query_QueryProviderOutbound(arg) {
  if (!(arg instanceof query_pb.QueryProviderOutbound)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.query.QueryProviderOutbound');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_query_QueryProviderOutbound(buffer_arg) {
  return query_pb.QueryProviderOutbound.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_query_QueryRequest(arg) {
  if (!(arg instanceof query_pb.QueryRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.query.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_query_QueryRequest(buffer_arg) {
  return query_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_query_QueryResponse(arg) {
  if (!(arg instanceof query_pb.QueryResponse)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.query.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_query_QueryResponse(buffer_arg) {
  return query_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryRequest(arg) {
  if (!(arg instanceof query_pb.SubscriptionQueryRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.query.SubscriptionQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryRequest(buffer_arg) {
  return query_pb.SubscriptionQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryResponse(arg) {
  if (!(arg instanceof query_pb.SubscriptionQueryResponse)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.query.SubscriptionQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryResponse(buffer_arg) {
  return query_pb.SubscriptionQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service providing operations for the Query Messaging component of AxonServer 
var QueryServiceService = exports['io.axoniq.axonserver.grpc.query.QueryService'] = {
  // Opens a Query- and Instruction stream to AxonServer. 
openStream: {
    path: '/io.axoniq.axonserver.grpc.query.QueryService/OpenStream',
    requestStream: true,
    responseStream: true,
    requestType: query_pb.QueryProviderOutbound,
    responseType: query_pb.QueryProviderInbound,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_query_QueryProviderOutbound,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_query_QueryProviderOutbound,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_query_QueryProviderInbound,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_query_QueryProviderInbound,
  },
  // Sends a point-to-point or scatter-gather Query 
query: {
    path: '/io.axoniq.axonserver.grpc.query.QueryService/Query',
    requestStream: false,
    responseStream: true,
    requestType: query_pb.QueryRequest,
    responseType: query_pb.QueryResponse,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_query_QueryRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_query_QueryRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_query_QueryResponse,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_query_QueryResponse,
  },
  // Opens a Subscription Query 
subscription: {
    path: '/io.axoniq.axonserver.grpc.query.QueryService/Subscription',
    requestStream: true,
    responseStream: true,
    requestType: query_pb.SubscriptionQueryRequest,
    responseType: query_pb.SubscriptionQueryResponse,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryResponse,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_query_SubscriptionQueryResponse,
  },
};

