// package: io.axoniq.axonserver.grpc.control
// file: control.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as control_pb from "./control_pb";
import * as common_pb from "./common_pb";

interface IPlatformServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPlatformServer: IPlatformServiceService_IGetPlatformServer;
    openStream: IPlatformServiceService_IOpenStream;
}

interface IPlatformServiceService_IGetPlatformServer extends grpc.MethodDefinition<control_pb.ClientIdentification, control_pb.PlatformInfo> {
    path: "/io.axoniq.axonserver.grpc.control.PlatformService/GetPlatformServer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<control_pb.ClientIdentification>;
    requestDeserialize: grpc.deserialize<control_pb.ClientIdentification>;
    responseSerialize: grpc.serialize<control_pb.PlatformInfo>;
    responseDeserialize: grpc.deserialize<control_pb.PlatformInfo>;
}
interface IPlatformServiceService_IOpenStream extends grpc.MethodDefinition<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction> {
    path: "/io.axoniq.axonserver.grpc.control.PlatformService/OpenStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<control_pb.PlatformInboundInstruction>;
    requestDeserialize: grpc.deserialize<control_pb.PlatformInboundInstruction>;
    responseSerialize: grpc.serialize<control_pb.PlatformOutboundInstruction>;
    responseDeserialize: grpc.deserialize<control_pb.PlatformOutboundInstruction>;
}

export const PlatformServiceService: IPlatformServiceService;

export interface IPlatformServiceServer {
    getPlatformServer: grpc.handleUnaryCall<control_pb.ClientIdentification, control_pb.PlatformInfo>;
    openStream: grpc.handleBidiStreamingCall<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction>;
}

export interface IPlatformServiceClient {
    getPlatformServer(request: control_pb.ClientIdentification, callback: (error: grpc.ServiceError | null, response: control_pb.PlatformInfo) => void): grpc.ClientUnaryCall;
    getPlatformServer(request: control_pb.ClientIdentification, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: control_pb.PlatformInfo) => void): grpc.ClientUnaryCall;
    getPlatformServer(request: control_pb.ClientIdentification, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: control_pb.PlatformInfo) => void): grpc.ClientUnaryCall;
    openStream(): grpc.ClientDuplexStream<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction>;
    openStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction>;
    openStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction>;
}

export class PlatformServiceClient extends grpc.Client implements IPlatformServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPlatformServer(request: control_pb.ClientIdentification, callback: (error: grpc.ServiceError | null, response: control_pb.PlatformInfo) => void): grpc.ClientUnaryCall;
    public getPlatformServer(request: control_pb.ClientIdentification, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: control_pb.PlatformInfo) => void): grpc.ClientUnaryCall;
    public getPlatformServer(request: control_pb.ClientIdentification, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: control_pb.PlatformInfo) => void): grpc.ClientUnaryCall;
    public openStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction>;
    public openStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<control_pb.PlatformInboundInstruction, control_pb.PlatformOutboundInstruction>;
}
