// package: io.axoniq.axonserver.grpc.command
// file: command.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as command_pb from "./command_pb";
import * as common_pb from "./common_pb";

interface ICommandServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    openStream: ICommandServiceService_IOpenStream;
    dispatch: ICommandServiceService_IDispatch;
}

interface ICommandServiceService_IOpenStream extends grpc.MethodDefinition<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound> {
    path: "/io.axoniq.axonserver.grpc.command.CommandService/OpenStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<command_pb.CommandProviderOutbound>;
    requestDeserialize: grpc.deserialize<command_pb.CommandProviderOutbound>;
    responseSerialize: grpc.serialize<command_pb.CommandProviderInbound>;
    responseDeserialize: grpc.deserialize<command_pb.CommandProviderInbound>;
}
interface ICommandServiceService_IDispatch extends grpc.MethodDefinition<command_pb.Command, command_pb.CommandResponse> {
    path: "/io.axoniq.axonserver.grpc.command.CommandService/Dispatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<command_pb.Command>;
    requestDeserialize: grpc.deserialize<command_pb.Command>;
    responseSerialize: grpc.serialize<command_pb.CommandResponse>;
    responseDeserialize: grpc.deserialize<command_pb.CommandResponse>;
}

export const CommandServiceService: ICommandServiceService;

export interface ICommandServiceServer {
    openStream: grpc.handleBidiStreamingCall<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound>;
    dispatch: grpc.handleUnaryCall<command_pb.Command, command_pb.CommandResponse>;
}

export interface ICommandServiceClient {
    openStream(): grpc.ClientDuplexStream<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound>;
    openStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound>;
    openStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound>;
    dispatch(request: command_pb.Command, callback: (error: grpc.ServiceError | null, response: command_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    dispatch(request: command_pb.Command, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: command_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    dispatch(request: command_pb.Command, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: command_pb.CommandResponse) => void): grpc.ClientUnaryCall;
}

export class CommandServiceClient extends grpc.Client implements ICommandServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public openStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound>;
    public openStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<command_pb.CommandProviderOutbound, command_pb.CommandProviderInbound>;
    public dispatch(request: command_pb.Command, callback: (error: grpc.ServiceError | null, response: command_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    public dispatch(request: command_pb.Command, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: command_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    public dispatch(request: command_pb.Command, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: command_pb.CommandResponse) => void): grpc.ClientUnaryCall;
}
