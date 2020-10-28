// package: io.axoniq.axonserver.grpc.query
// file: query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as query_pb from "./query_pb";
import * as common_pb from "./common_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    openStream: IQueryServiceService_IOpenStream;
    query: IQueryServiceService_IQuery;
    subscription: IQueryServiceService_ISubscription;
}

interface IQueryServiceService_IOpenStream extends grpc.MethodDefinition<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound> {
    path: "/io.axoniq.axonserver.grpc.query.QueryService/OpenStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<query_pb.QueryProviderOutbound>;
    requestDeserialize: grpc.deserialize<query_pb.QueryProviderOutbound>;
    responseSerialize: grpc.serialize<query_pb.QueryProviderInbound>;
    responseDeserialize: grpc.deserialize<query_pb.QueryProviderInbound>;
}
interface IQueryServiceService_IQuery extends grpc.MethodDefinition<query_pb.QueryRequest, query_pb.QueryResponse> {
    path: "/io.axoniq.axonserver.grpc.query.QueryService/Query";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<query_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<query_pb.QueryRequest>;
    responseSerialize: grpc.serialize<query_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<query_pb.QueryResponse>;
}
interface IQueryServiceService_ISubscription extends grpc.MethodDefinition<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse> {
    path: "/io.axoniq.axonserver.grpc.query.QueryService/Subscription";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<query_pb.SubscriptionQueryRequest>;
    requestDeserialize: grpc.deserialize<query_pb.SubscriptionQueryRequest>;
    responseSerialize: grpc.serialize<query_pb.SubscriptionQueryResponse>;
    responseDeserialize: grpc.deserialize<query_pb.SubscriptionQueryResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    openStream: grpc.handleBidiStreamingCall<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound>;
    query: grpc.handleServerStreamingCall<query_pb.QueryRequest, query_pb.QueryResponse>;
    subscription: grpc.handleBidiStreamingCall<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse>;
}

export interface IQueryServiceClient {
    openStream(): grpc.ClientDuplexStream<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound>;
    openStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound>;
    openStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound>;
    query(request: query_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<query_pb.QueryResponse>;
    query(request: query_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<query_pb.QueryResponse>;
    subscription(): grpc.ClientDuplexStream<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse>;
    subscription(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse>;
    subscription(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse>;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public openStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound>;
    public openStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.QueryProviderOutbound, query_pb.QueryProviderInbound>;
    public query(request: query_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<query_pb.QueryResponse>;
    public query(request: query_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<query_pb.QueryResponse>;
    public subscription(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse>;
    public subscription(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<query_pb.SubscriptionQueryRequest, query_pb.SubscriptionQueryResponse>;
}
