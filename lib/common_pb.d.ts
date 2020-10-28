// package: io.axoniq.axonserver.grpc
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class SerializedObject extends jspb.Message { 
    getType(): string;
    setType(value: string): SerializedObject;

    getRevision(): string;
    setRevision(value: string): SerializedObject;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): SerializedObject;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SerializedObject.AsObject;
    static toObject(includeInstance: boolean, msg: SerializedObject): SerializedObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SerializedObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SerializedObject;
    static deserializeBinaryFromReader(message: SerializedObject, reader: jspb.BinaryReader): SerializedObject;
}

export namespace SerializedObject {
    export type AsObject = {
        type: string,
        revision: string,
        data: Uint8Array | string,
    }
}

export class MetaDataValue extends jspb.Message { 

    hasTextValue(): boolean;
    clearTextValue(): void;
    getTextValue(): string;
    setTextValue(value: string): MetaDataValue;


    hasNumberValue(): boolean;
    clearNumberValue(): void;
    getNumberValue(): number;
    setNumberValue(value: number): MetaDataValue;


    hasBooleanValue(): boolean;
    clearBooleanValue(): void;
    getBooleanValue(): boolean;
    setBooleanValue(value: boolean): MetaDataValue;


    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): MetaDataValue;


    hasBytesValue(): boolean;
    clearBytesValue(): void;
    getBytesValue(): SerializedObject | undefined;
    setBytesValue(value?: SerializedObject): MetaDataValue;


    getDataCase(): MetaDataValue.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetaDataValue.AsObject;
    static toObject(includeInstance: boolean, msg: MetaDataValue): MetaDataValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetaDataValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetaDataValue;
    static deserializeBinaryFromReader(message: MetaDataValue, reader: jspb.BinaryReader): MetaDataValue;
}

export namespace MetaDataValue {
    export type AsObject = {
        textValue: string,
        numberValue: number,
        booleanValue: boolean,
        doubleValue: number,
        bytesValue?: SerializedObject.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
    
    TEXT_VALUE = 1,

    NUMBER_VALUE = 2,

    BOOLEAN_VALUE = 3,

    DOUBLE_VALUE = 4,

    BYTES_VALUE = 5,

    }

}

export class ProcessingInstruction extends jspb.Message { 
    getKey(): ProcessingKey;
    setKey(value: ProcessingKey): ProcessingInstruction;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): MetaDataValue | undefined;
    setValue(value?: MetaDataValue): ProcessingInstruction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessingInstruction.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessingInstruction): ProcessingInstruction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessingInstruction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessingInstruction;
    static deserializeBinaryFromReader(message: ProcessingInstruction, reader: jspb.BinaryReader): ProcessingInstruction;
}

export namespace ProcessingInstruction {
    export type AsObject = {
        key: ProcessingKey,
        value?: MetaDataValue.AsObject,
    }
}

export class ErrorMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ErrorMessage;

    getLocation(): string;
    setLocation(value: string): ErrorMessage;

    clearDetailsList(): void;
    getDetailsList(): Array<string>;
    setDetailsList(value: Array<string>): ErrorMessage;
    addDetails(value: string, index?: number): string;

    getErrorCode(): string;
    setErrorCode(value: string): ErrorMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorMessage): ErrorMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorMessage;
    static deserializeBinaryFromReader(message: ErrorMessage, reader: jspb.BinaryReader): ErrorMessage;
}

export namespace ErrorMessage {
    export type AsObject = {
        message: string,
        location: string,
        detailsList: Array<string>,
        errorCode: string,
    }
}

export class FlowControl extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): FlowControl;

    getPermits(): number;
    setPermits(value: number): FlowControl;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlowControl.AsObject;
    static toObject(includeInstance: boolean, msg: FlowControl): FlowControl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlowControl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlowControl;
    static deserializeBinaryFromReader(message: FlowControl, reader: jspb.BinaryReader): FlowControl;
}

export namespace FlowControl {
    export type AsObject = {
        clientId: string,
        permits: number,
    }
}

export class InstructionAck extends jspb.Message { 
    getInstructionId(): string;
    setInstructionId(value: string): InstructionAck;

    getSuccess(): boolean;
    setSuccess(value: boolean): InstructionAck;


    hasError(): boolean;
    clearError(): void;
    getError(): ErrorMessage | undefined;
    setError(value?: ErrorMessage): InstructionAck;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstructionAck.AsObject;
    static toObject(includeInstance: boolean, msg: InstructionAck): InstructionAck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstructionAck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstructionAck;
    static deserializeBinaryFromReader(message: InstructionAck, reader: jspb.BinaryReader): InstructionAck;
}

export namespace InstructionAck {
    export type AsObject = {
        instructionId: string,
        success: boolean,
        error?: ErrorMessage.AsObject,
    }
}

export class InstructionResult extends jspb.Message { 
    getInstructionId(): string;
    setInstructionId(value: string): InstructionResult;

    getSuccess(): boolean;
    setSuccess(value: boolean): InstructionResult;


    hasError(): boolean;
    clearError(): void;
    getError(): ErrorMessage | undefined;
    setError(value?: ErrorMessage): InstructionResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstructionResult.AsObject;
    static toObject(includeInstance: boolean, msg: InstructionResult): InstructionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstructionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstructionResult;
    static deserializeBinaryFromReader(message: InstructionResult, reader: jspb.BinaryReader): InstructionResult;
}

export namespace InstructionResult {
    export type AsObject = {
        instructionId: string,
        success: boolean,
        error?: ErrorMessage.AsObject,
    }
}

export enum ProcessingKey {
    ROUTING_KEY = 0,
    PRIORITY = 1,
    TIMEOUT = 2,
    NR_OF_RESULTS = 3,
}

export enum TaskStatus {
    SCHEDULED = 0,
    COMPLETED = 1,
    FAILED = 2,
    RUNNING = 3,
    CANCELLED = 4,
}
