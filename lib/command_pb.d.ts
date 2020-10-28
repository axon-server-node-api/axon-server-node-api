// package: io.axoniq.axonserver.grpc.command
// file: command.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CommandProviderOutbound extends jspb.Message { 

    hasSubscribe(): boolean;
    clearSubscribe(): void;
    getSubscribe(): CommandSubscription | undefined;
    setSubscribe(value?: CommandSubscription): CommandProviderOutbound;


    hasUnsubscribe(): boolean;
    clearUnsubscribe(): void;
    getUnsubscribe(): CommandSubscription | undefined;
    setUnsubscribe(value?: CommandSubscription): CommandProviderOutbound;


    hasFlowControl(): boolean;
    clearFlowControl(): void;
    getFlowControl(): common_pb.FlowControl | undefined;
    setFlowControl(value?: common_pb.FlowControl): CommandProviderOutbound;


    hasCommandResponse(): boolean;
    clearCommandResponse(): void;
    getCommandResponse(): CommandResponse | undefined;
    setCommandResponse(value?: CommandResponse): CommandProviderOutbound;


    hasAck(): boolean;
    clearAck(): void;
    getAck(): common_pb.InstructionAck | undefined;
    setAck(value?: common_pb.InstructionAck): CommandProviderOutbound;

    getInstructionId(): string;
    setInstructionId(value: string): CommandProviderOutbound;


    getRequestCase(): CommandProviderOutbound.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandProviderOutbound.AsObject;
    static toObject(includeInstance: boolean, msg: CommandProviderOutbound): CommandProviderOutbound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandProviderOutbound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandProviderOutbound;
    static deserializeBinaryFromReader(message: CommandProviderOutbound, reader: jspb.BinaryReader): CommandProviderOutbound;
}

export namespace CommandProviderOutbound {
    export type AsObject = {
        subscribe?: CommandSubscription.AsObject,
        unsubscribe?: CommandSubscription.AsObject,
        flowControl?: common_pb.FlowControl.AsObject,
        commandResponse?: CommandResponse.AsObject,
        ack?: common_pb.InstructionAck.AsObject,
        instructionId: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    SUBSCRIBE = 1,

    UNSUBSCRIBE = 2,

    FLOW_CONTROL = 3,

    COMMAND_RESPONSE = 4,

    ACK = 5,

    }

}

export class CommandProviderInbound extends jspb.Message { 

    hasAck(): boolean;
    clearAck(): void;
    getAck(): common_pb.InstructionAck | undefined;
    setAck(value?: common_pb.InstructionAck): CommandProviderInbound;


    hasCommand(): boolean;
    clearCommand(): void;
    getCommand(): Command | undefined;
    setCommand(value?: Command): CommandProviderInbound;

    getInstructionId(): string;
    setInstructionId(value: string): CommandProviderInbound;


    getRequestCase(): CommandProviderInbound.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandProviderInbound.AsObject;
    static toObject(includeInstance: boolean, msg: CommandProviderInbound): CommandProviderInbound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandProviderInbound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandProviderInbound;
    static deserializeBinaryFromReader(message: CommandProviderInbound, reader: jspb.BinaryReader): CommandProviderInbound;
}

export namespace CommandProviderInbound {
    export type AsObject = {
        ack?: common_pb.InstructionAck.AsObject,
        command?: Command.AsObject,
        instructionId: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    ACK = 1,

    COMMAND = 2,

    }

}

export class Command extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): Command;

    getName(): string;
    setName(value: string): Command;

    getTimestamp(): number;
    setTimestamp(value: number): Command;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): common_pb.SerializedObject | undefined;
    setPayload(value?: common_pb.SerializedObject): Command;


    getMetaDataMap(): jspb.Map<string, common_pb.MetaDataValue>;
    clearMetaDataMap(): void;

    clearProcessingInstructionsList(): void;
    getProcessingInstructionsList(): Array<common_pb.ProcessingInstruction>;
    setProcessingInstructionsList(value: Array<common_pb.ProcessingInstruction>): Command;
    addProcessingInstructions(value?: common_pb.ProcessingInstruction, index?: number): common_pb.ProcessingInstruction;

    getClientId(): string;
    setClientId(value: string): Command;

    getComponentName(): string;
    setComponentName(value: string): Command;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Command.AsObject;
    static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Command;
    static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
    export type AsObject = {
        messageIdentifier: string,
        name: string,
        timestamp: number,
        payload?: common_pb.SerializedObject.AsObject,

        metaDataMap: Array<[string, common_pb.MetaDataValue.AsObject]>,
        processingInstructionsList: Array<common_pb.ProcessingInstruction.AsObject>,
        clientId: string,
        componentName: string,
    }
}

export class CommandResponse extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): CommandResponse;

    getErrorCode(): string;
    setErrorCode(value: string): CommandResponse;


    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): common_pb.ErrorMessage | undefined;
    setErrorMessage(value?: common_pb.ErrorMessage): CommandResponse;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): common_pb.SerializedObject | undefined;
    setPayload(value?: common_pb.SerializedObject): CommandResponse;


    getMetaDataMap(): jspb.Map<string, common_pb.MetaDataValue>;
    clearMetaDataMap(): void;

    clearProcessingInstructionsList(): void;
    getProcessingInstructionsList(): Array<common_pb.ProcessingInstruction>;
    setProcessingInstructionsList(value: Array<common_pb.ProcessingInstruction>): CommandResponse;
    addProcessingInstructions(value?: common_pb.ProcessingInstruction, index?: number): common_pb.ProcessingInstruction;

    getRequestIdentifier(): string;
    setRequestIdentifier(value: string): CommandResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommandResponse): CommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandResponse;
    static deserializeBinaryFromReader(message: CommandResponse, reader: jspb.BinaryReader): CommandResponse;
}

export namespace CommandResponse {
    export type AsObject = {
        messageIdentifier: string,
        errorCode: string,
        errorMessage?: common_pb.ErrorMessage.AsObject,
        payload?: common_pb.SerializedObject.AsObject,

        metaDataMap: Array<[string, common_pb.MetaDataValue.AsObject]>,
        processingInstructionsList: Array<common_pb.ProcessingInstruction.AsObject>,
        requestIdentifier: string,
    }
}

export class CommandSubscription extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): CommandSubscription;

    getCommand(): string;
    setCommand(value: string): CommandSubscription;

    getComponentName(): string;
    setComponentName(value: string): CommandSubscription;

    getClientId(): string;
    setClientId(value: string): CommandSubscription;

    getLoadFactor(): number;
    setLoadFactor(value: number): CommandSubscription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: CommandSubscription): CommandSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandSubscription;
    static deserializeBinaryFromReader(message: CommandSubscription, reader: jspb.BinaryReader): CommandSubscription;
}

export namespace CommandSubscription {
    export type AsObject = {
        messageId: string,
        command: string,
        componentName: string,
        clientId: string,
        loadFactor: number,
    }
}
