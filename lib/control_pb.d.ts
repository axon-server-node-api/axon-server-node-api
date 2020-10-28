// package: io.axoniq.axonserver.grpc.control
// file: control.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class PlatformInboundInstruction extends jspb.Message { 

    hasRegister(): boolean;
    clearRegister(): void;
    getRegister(): ClientIdentification | undefined;
    setRegister(value?: ClientIdentification): PlatformInboundInstruction;


    hasEventProcessorInfo(): boolean;
    clearEventProcessorInfo(): void;
    getEventProcessorInfo(): EventProcessorInfo | undefined;
    setEventProcessorInfo(value?: EventProcessorInfo): PlatformInboundInstruction;


    hasHeartbeat(): boolean;
    clearHeartbeat(): void;
    getHeartbeat(): Heartbeat | undefined;
    setHeartbeat(value?: Heartbeat): PlatformInboundInstruction;


    hasAck(): boolean;
    clearAck(): void;
    getAck(): common_pb.InstructionAck | undefined;
    setAck(value?: common_pb.InstructionAck): PlatformInboundInstruction;


    hasResult(): boolean;
    clearResult(): void;
    getResult(): common_pb.InstructionResult | undefined;
    setResult(value?: common_pb.InstructionResult): PlatformInboundInstruction;

    getInstructionId(): string;
    setInstructionId(value: string): PlatformInboundInstruction;


    getRequestCase(): PlatformInboundInstruction.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlatformInboundInstruction.AsObject;
    static toObject(includeInstance: boolean, msg: PlatformInboundInstruction): PlatformInboundInstruction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlatformInboundInstruction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlatformInboundInstruction;
    static deserializeBinaryFromReader(message: PlatformInboundInstruction, reader: jspb.BinaryReader): PlatformInboundInstruction;
}

export namespace PlatformInboundInstruction {
    export type AsObject = {
        register?: ClientIdentification.AsObject,
        eventProcessorInfo?: EventProcessorInfo.AsObject,
        heartbeat?: Heartbeat.AsObject,
        ack?: common_pb.InstructionAck.AsObject,
        result?: common_pb.InstructionResult.AsObject,
        instructionId: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    REGISTER = 1,

    EVENT_PROCESSOR_INFO = 2,

    HEARTBEAT = 3,

    ACK = 4,

    RESULT = 6,

    }

}

export class PlatformOutboundInstruction extends jspb.Message { 

    hasNodeNotification(): boolean;
    clearNodeNotification(): void;
    getNodeNotification(): NodeInfo | undefined;
    setNodeNotification(value?: NodeInfo): PlatformOutboundInstruction;


    hasRequestReconnect(): boolean;
    clearRequestReconnect(): void;
    getRequestReconnect(): RequestReconnect | undefined;
    setRequestReconnect(value?: RequestReconnect): PlatformOutboundInstruction;


    hasPauseEventProcessor(): boolean;
    clearPauseEventProcessor(): void;
    getPauseEventProcessor(): EventProcessorReference | undefined;
    setPauseEventProcessor(value?: EventProcessorReference): PlatformOutboundInstruction;


    hasStartEventProcessor(): boolean;
    clearStartEventProcessor(): void;
    getStartEventProcessor(): EventProcessorReference | undefined;
    setStartEventProcessor(value?: EventProcessorReference): PlatformOutboundInstruction;


    hasReleaseSegment(): boolean;
    clearReleaseSegment(): void;
    getReleaseSegment(): EventProcessorSegmentReference | undefined;
    setReleaseSegment(value?: EventProcessorSegmentReference): PlatformOutboundInstruction;


    hasRequestEventProcessorInfo(): boolean;
    clearRequestEventProcessorInfo(): void;
    getRequestEventProcessorInfo(): EventProcessorReference | undefined;
    setRequestEventProcessorInfo(value?: EventProcessorReference): PlatformOutboundInstruction;


    hasSplitEventProcessorSegment(): boolean;
    clearSplitEventProcessorSegment(): void;
    getSplitEventProcessorSegment(): EventProcessorSegmentReference | undefined;
    setSplitEventProcessorSegment(value?: EventProcessorSegmentReference): PlatformOutboundInstruction;


    hasMergeEventProcessorSegment(): boolean;
    clearMergeEventProcessorSegment(): void;
    getMergeEventProcessorSegment(): EventProcessorSegmentReference | undefined;
    setMergeEventProcessorSegment(value?: EventProcessorSegmentReference): PlatformOutboundInstruction;


    hasHeartbeat(): boolean;
    clearHeartbeat(): void;
    getHeartbeat(): Heartbeat | undefined;
    setHeartbeat(value?: Heartbeat): PlatformOutboundInstruction;


    hasAck(): boolean;
    clearAck(): void;
    getAck(): common_pb.InstructionAck | undefined;
    setAck(value?: common_pb.InstructionAck): PlatformOutboundInstruction;

    getInstructionId(): string;
    setInstructionId(value: string): PlatformOutboundInstruction;


    getRequestCase(): PlatformOutboundInstruction.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlatformOutboundInstruction.AsObject;
    static toObject(includeInstance: boolean, msg: PlatformOutboundInstruction): PlatformOutboundInstruction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlatformOutboundInstruction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlatformOutboundInstruction;
    static deserializeBinaryFromReader(message: PlatformOutboundInstruction, reader: jspb.BinaryReader): PlatformOutboundInstruction;
}

export namespace PlatformOutboundInstruction {
    export type AsObject = {
        nodeNotification?: NodeInfo.AsObject,
        requestReconnect?: RequestReconnect.AsObject,
        pauseEventProcessor?: EventProcessorReference.AsObject,
        startEventProcessor?: EventProcessorReference.AsObject,
        releaseSegment?: EventProcessorSegmentReference.AsObject,
        requestEventProcessorInfo?: EventProcessorReference.AsObject,
        splitEventProcessorSegment?: EventProcessorSegmentReference.AsObject,
        mergeEventProcessorSegment?: EventProcessorSegmentReference.AsObject,
        heartbeat?: Heartbeat.AsObject,
        ack?: common_pb.InstructionAck.AsObject,
        instructionId: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    NODE_NOTIFICATION = 1,

    REQUEST_RECONNECT = 3,

    PAUSE_EVENT_PROCESSOR = 4,

    START_EVENT_PROCESSOR = 5,

    RELEASE_SEGMENT = 6,

    REQUEST_EVENT_PROCESSOR_INFO = 7,

    SPLIT_EVENT_PROCESSOR_SEGMENT = 8,

    MERGE_EVENT_PROCESSOR_SEGMENT = 9,

    HEARTBEAT = 10,

    ACK = 11,

    }

}

export class RequestReconnect extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestReconnect.AsObject;
    static toObject(includeInstance: boolean, msg: RequestReconnect): RequestReconnect.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestReconnect, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestReconnect;
    static deserializeBinaryFromReader(message: RequestReconnect, reader: jspb.BinaryReader): RequestReconnect;
}

export namespace RequestReconnect {
    export type AsObject = {
    }
}

export class PlatformInfo extends jspb.Message { 

    hasPrimary(): boolean;
    clearPrimary(): void;
    getPrimary(): NodeInfo | undefined;
    setPrimary(value?: NodeInfo): PlatformInfo;

    getSameConnection(): boolean;
    setSameConnection(value: boolean): PlatformInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlatformInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PlatformInfo): PlatformInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlatformInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlatformInfo;
    static deserializeBinaryFromReader(message: PlatformInfo, reader: jspb.BinaryReader): PlatformInfo;
}

export namespace PlatformInfo {
    export type AsObject = {
        primary?: NodeInfo.AsObject,
        sameConnection: boolean,
    }
}

export class NodeInfo extends jspb.Message { 
    getHostName(): string;
    setHostName(value: string): NodeInfo;

    getGrpcPort(): number;
    setGrpcPort(value: number): NodeInfo;

    getHttpPort(): number;
    setHttpPort(value: number): NodeInfo;

    getVersion(): number;
    setVersion(value: number): NodeInfo;

    getNodeName(): string;
    setNodeName(value: string): NodeInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfo;
    static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
    export type AsObject = {
        hostName: string,
        grpcPort: number,
        httpPort: number,
        version: number,
        nodeName: string,
    }
}

export class ClientIdentification extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): ClientIdentification;

    getComponentName(): string;
    setComponentName(value: string): ClientIdentification;


    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    getVersion(): string;
    setVersion(value: string): ClientIdentification;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientIdentification.AsObject;
    static toObject(includeInstance: boolean, msg: ClientIdentification): ClientIdentification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientIdentification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientIdentification;
    static deserializeBinaryFromReader(message: ClientIdentification, reader: jspb.BinaryReader): ClientIdentification;
}

export namespace ClientIdentification {
    export type AsObject = {
        clientId: string,
        componentName: string,

        tagsMap: Array<[string, string]>,
        version: string,
    }
}

export class EventProcessorInfo extends jspb.Message { 
    getProcessorName(): string;
    setProcessorName(value: string): EventProcessorInfo;

    getMode(): string;
    setMode(value: string): EventProcessorInfo;

    getActiveThreads(): number;
    setActiveThreads(value: number): EventProcessorInfo;

    getRunning(): boolean;
    setRunning(value: boolean): EventProcessorInfo;

    getError(): boolean;
    setError(value: boolean): EventProcessorInfo;

    clearSegmentStatusList(): void;
    getSegmentStatusList(): Array<EventProcessorInfo.SegmentStatus>;
    setSegmentStatusList(value: Array<EventProcessorInfo.SegmentStatus>): EventProcessorInfo;
    addSegmentStatus(value?: EventProcessorInfo.SegmentStatus, index?: number): EventProcessorInfo.SegmentStatus;

    getAvailableThreads(): number;
    setAvailableThreads(value: number): EventProcessorInfo;

    getTokenStoreIdentifier(): string;
    setTokenStoreIdentifier(value: string): EventProcessorInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventProcessorInfo.AsObject;
    static toObject(includeInstance: boolean, msg: EventProcessorInfo): EventProcessorInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventProcessorInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventProcessorInfo;
    static deserializeBinaryFromReader(message: EventProcessorInfo, reader: jspb.BinaryReader): EventProcessorInfo;
}

export namespace EventProcessorInfo {
    export type AsObject = {
        processorName: string,
        mode: string,
        activeThreads: number,
        running: boolean,
        error: boolean,
        segmentStatusList: Array<EventProcessorInfo.SegmentStatus.AsObject>,
        availableThreads: number,
        tokenStoreIdentifier: string,
    }


    export class SegmentStatus extends jspb.Message { 
        getSegmentId(): number;
        setSegmentId(value: number): SegmentStatus;

        getCaughtUp(): boolean;
        setCaughtUp(value: boolean): SegmentStatus;

        getReplaying(): boolean;
        setReplaying(value: boolean): SegmentStatus;

        getOnePartOf(): number;
        setOnePartOf(value: number): SegmentStatus;

        getTokenPosition(): number;
        setTokenPosition(value: number): SegmentStatus;

        getErrorState(): string;
        setErrorState(value: string): SegmentStatus;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SegmentStatus.AsObject;
        static toObject(includeInstance: boolean, msg: SegmentStatus): SegmentStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SegmentStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SegmentStatus;
        static deserializeBinaryFromReader(message: SegmentStatus, reader: jspb.BinaryReader): SegmentStatus;
    }

    export namespace SegmentStatus {
        export type AsObject = {
            segmentId: number,
            caughtUp: boolean,
            replaying: boolean,
            onePartOf: number,
            tokenPosition: number,
            errorState: string,
        }
    }

}

export class EventProcessorReference extends jspb.Message { 
    getProcessorName(): string;
    setProcessorName(value: string): EventProcessorReference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventProcessorReference.AsObject;
    static toObject(includeInstance: boolean, msg: EventProcessorReference): EventProcessorReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventProcessorReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventProcessorReference;
    static deserializeBinaryFromReader(message: EventProcessorReference, reader: jspb.BinaryReader): EventProcessorReference;
}

export namespace EventProcessorReference {
    export type AsObject = {
        processorName: string,
    }
}

export class EventProcessorSegmentReference extends jspb.Message { 
    getProcessorName(): string;
    setProcessorName(value: string): EventProcessorSegmentReference;

    getSegmentIdentifier(): number;
    setSegmentIdentifier(value: number): EventProcessorSegmentReference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventProcessorSegmentReference.AsObject;
    static toObject(includeInstance: boolean, msg: EventProcessorSegmentReference): EventProcessorSegmentReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventProcessorSegmentReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventProcessorSegmentReference;
    static deserializeBinaryFromReader(message: EventProcessorSegmentReference, reader: jspb.BinaryReader): EventProcessorSegmentReference;
}

export namespace EventProcessorSegmentReference {
    export type AsObject = {
        processorName: string,
        segmentIdentifier: number,
    }
}

export class Heartbeat extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Heartbeat.AsObject;
    static toObject(includeInstance: boolean, msg: Heartbeat): Heartbeat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Heartbeat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Heartbeat;
    static deserializeBinaryFromReader(message: Heartbeat, reader: jspb.BinaryReader): Heartbeat;
}

export namespace Heartbeat {
    export type AsObject = {
    }
}
