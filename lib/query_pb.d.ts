// package: io.axoniq.axonserver.grpc.query
// file: query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class QueryProviderOutbound extends jspb.Message { 

    hasSubscribe(): boolean;
    clearSubscribe(): void;
    getSubscribe(): QuerySubscription | undefined;
    setSubscribe(value?: QuerySubscription): QueryProviderOutbound;


    hasUnsubscribe(): boolean;
    clearUnsubscribe(): void;
    getUnsubscribe(): QuerySubscription | undefined;
    setUnsubscribe(value?: QuerySubscription): QueryProviderOutbound;


    hasFlowControl(): boolean;
    clearFlowControl(): void;
    getFlowControl(): common_pb.FlowControl | undefined;
    setFlowControl(value?: common_pb.FlowControl): QueryProviderOutbound;


    hasQueryResponse(): boolean;
    clearQueryResponse(): void;
    getQueryResponse(): QueryResponse | undefined;
    setQueryResponse(value?: QueryResponse): QueryProviderOutbound;


    hasQueryComplete(): boolean;
    clearQueryComplete(): void;
    getQueryComplete(): QueryComplete | undefined;
    setQueryComplete(value?: QueryComplete): QueryProviderOutbound;


    hasSubscriptionQueryResponse(): boolean;
    clearSubscriptionQueryResponse(): void;
    getSubscriptionQueryResponse(): SubscriptionQueryResponse | undefined;
    setSubscriptionQueryResponse(value?: SubscriptionQueryResponse): QueryProviderOutbound;


    hasAck(): boolean;
    clearAck(): void;
    getAck(): common_pb.InstructionAck | undefined;
    setAck(value?: common_pb.InstructionAck): QueryProviderOutbound;

    getInstructionId(): string;
    setInstructionId(value: string): QueryProviderOutbound;


    getRequestCase(): QueryProviderOutbound.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryProviderOutbound.AsObject;
    static toObject(includeInstance: boolean, msg: QueryProviderOutbound): QueryProviderOutbound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryProviderOutbound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryProviderOutbound;
    static deserializeBinaryFromReader(message: QueryProviderOutbound, reader: jspb.BinaryReader): QueryProviderOutbound;
}

export namespace QueryProviderOutbound {
    export type AsObject = {
        subscribe?: QuerySubscription.AsObject,
        unsubscribe?: QuerySubscription.AsObject,
        flowControl?: common_pb.FlowControl.AsObject,
        queryResponse?: QueryResponse.AsObject,
        queryComplete?: QueryComplete.AsObject,
        subscriptionQueryResponse?: SubscriptionQueryResponse.AsObject,
        ack?: common_pb.InstructionAck.AsObject,
        instructionId: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    SUBSCRIBE = 1,

    UNSUBSCRIBE = 2,

    FLOW_CONTROL = 3,

    QUERY_RESPONSE = 4,

    QUERY_COMPLETE = 5,

    SUBSCRIPTION_QUERY_RESPONSE = 6,

    ACK = 7,

    }

}

export class QueryProviderInbound extends jspb.Message { 

    hasAck(): boolean;
    clearAck(): void;
    getAck(): common_pb.InstructionAck | undefined;
    setAck(value?: common_pb.InstructionAck): QueryProviderInbound;


    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): QueryRequest | undefined;
    setQuery(value?: QueryRequest): QueryProviderInbound;


    hasSubscriptionQueryRequest(): boolean;
    clearSubscriptionQueryRequest(): void;
    getSubscriptionQueryRequest(): SubscriptionQueryRequest | undefined;
    setSubscriptionQueryRequest(value?: SubscriptionQueryRequest): QueryProviderInbound;

    getInstructionId(): string;
    setInstructionId(value: string): QueryProviderInbound;


    getRequestCase(): QueryProviderInbound.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryProviderInbound.AsObject;
    static toObject(includeInstance: boolean, msg: QueryProviderInbound): QueryProviderInbound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryProviderInbound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryProviderInbound;
    static deserializeBinaryFromReader(message: QueryProviderInbound, reader: jspb.BinaryReader): QueryProviderInbound;
}

export namespace QueryProviderInbound {
    export type AsObject = {
        ack?: common_pb.InstructionAck.AsObject,
        query?: QueryRequest.AsObject,
        subscriptionQueryRequest?: SubscriptionQueryRequest.AsObject,
        instructionId: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    ACK = 1,

    QUERY = 2,

    SUBSCRIPTION_QUERY_REQUEST = 3,

    }

}

export class QueryComplete extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): QueryComplete;

    getRequestId(): string;
    setRequestId(value: string): QueryComplete;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryComplete.AsObject;
    static toObject(includeInstance: boolean, msg: QueryComplete): QueryComplete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryComplete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryComplete;
    static deserializeBinaryFromReader(message: QueryComplete, reader: jspb.BinaryReader): QueryComplete;
}

export namespace QueryComplete {
    export type AsObject = {
        messageId: string,
        requestId: string,
    }
}

export class QueryRequest extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): QueryRequest;

    getQuery(): string;
    setQuery(value: string): QueryRequest;

    getTimestamp(): number;
    setTimestamp(value: number): QueryRequest;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): common_pb.SerializedObject | undefined;
    setPayload(value?: common_pb.SerializedObject): QueryRequest;


    getMetaDataMap(): jspb.Map<string, common_pb.MetaDataValue>;
    clearMetaDataMap(): void;


    hasResponseType(): boolean;
    clearResponseType(): void;
    getResponseType(): common_pb.SerializedObject | undefined;
    setResponseType(value?: common_pb.SerializedObject): QueryRequest;

    clearProcessingInstructionsList(): void;
    getProcessingInstructionsList(): Array<common_pb.ProcessingInstruction>;
    setProcessingInstructionsList(value: Array<common_pb.ProcessingInstruction>): QueryRequest;
    addProcessingInstructions(value?: common_pb.ProcessingInstruction, index?: number): common_pb.ProcessingInstruction;

    getClientId(): string;
    setClientId(value: string): QueryRequest;

    getComponentName(): string;
    setComponentName(value: string): QueryRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryRequest;
    static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
    export type AsObject = {
        messageIdentifier: string,
        query: string,
        timestamp: number,
        payload?: common_pb.SerializedObject.AsObject,

        metaDataMap: Array<[string, common_pb.MetaDataValue.AsObject]>,
        responseType?: common_pb.SerializedObject.AsObject,
        processingInstructionsList: Array<common_pb.ProcessingInstruction.AsObject>,
        clientId: string,
        componentName: string,
    }
}

export class QueryResponse extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): QueryResponse;

    getErrorCode(): string;
    setErrorCode(value: string): QueryResponse;


    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): common_pb.ErrorMessage | undefined;
    setErrorMessage(value?: common_pb.ErrorMessage): QueryResponse;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): common_pb.SerializedObject | undefined;
    setPayload(value?: common_pb.SerializedObject): QueryResponse;


    getMetaDataMap(): jspb.Map<string, common_pb.MetaDataValue>;
    clearMetaDataMap(): void;

    clearProcessingInstructionsList(): void;
    getProcessingInstructionsList(): Array<common_pb.ProcessingInstruction>;
    setProcessingInstructionsList(value: Array<common_pb.ProcessingInstruction>): QueryResponse;
    addProcessingInstructions(value?: common_pb.ProcessingInstruction, index?: number): common_pb.ProcessingInstruction;

    getRequestIdentifier(): string;
    setRequestIdentifier(value: string): QueryResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryResponse;
    static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
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

export class SubscriptionQuery extends jspb.Message { 
    getSubscriptionIdentifier(): string;
    setSubscriptionIdentifier(value: string): SubscriptionQuery;

    getNumberOfPermits(): number;
    setNumberOfPermits(value: number): SubscriptionQuery;


    hasQueryRequest(): boolean;
    clearQueryRequest(): void;
    getQueryRequest(): QueryRequest | undefined;
    setQueryRequest(value?: QueryRequest): SubscriptionQuery;


    hasUpdateResponseType(): boolean;
    clearUpdateResponseType(): void;
    getUpdateResponseType(): common_pb.SerializedObject | undefined;
    setUpdateResponseType(value?: common_pb.SerializedObject): SubscriptionQuery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionQuery.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionQuery): SubscriptionQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriptionQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionQuery;
    static deserializeBinaryFromReader(message: SubscriptionQuery, reader: jspb.BinaryReader): SubscriptionQuery;
}

export namespace SubscriptionQuery {
    export type AsObject = {
        subscriptionIdentifier: string,
        numberOfPermits: number,
        queryRequest?: QueryRequest.AsObject,
        updateResponseType?: common_pb.SerializedObject.AsObject,
    }
}

export class QueryUpdate extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): QueryUpdate;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): common_pb.SerializedObject | undefined;
    setPayload(value?: common_pb.SerializedObject): QueryUpdate;


    getMetaDataMap(): jspb.Map<string, common_pb.MetaDataValue>;
    clearMetaDataMap(): void;

    getClientId(): string;
    setClientId(value: string): QueryUpdate;

    getComponentName(): string;
    setComponentName(value: string): QueryUpdate;

    getErrorCode(): string;
    setErrorCode(value: string): QueryUpdate;


    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): common_pb.ErrorMessage | undefined;
    setErrorMessage(value?: common_pb.ErrorMessage): QueryUpdate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: QueryUpdate): QueryUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryUpdate;
    static deserializeBinaryFromReader(message: QueryUpdate, reader: jspb.BinaryReader): QueryUpdate;
}

export namespace QueryUpdate {
    export type AsObject = {
        messageIdentifier: string,
        payload?: common_pb.SerializedObject.AsObject,

        metaDataMap: Array<[string, common_pb.MetaDataValue.AsObject]>,
        clientId: string,
        componentName: string,
        errorCode: string,
        errorMessage?: common_pb.ErrorMessage.AsObject,
    }
}

export class QueryUpdateComplete extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): QueryUpdateComplete;

    getComponentName(): string;
    setComponentName(value: string): QueryUpdateComplete;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryUpdateComplete.AsObject;
    static toObject(includeInstance: boolean, msg: QueryUpdateComplete): QueryUpdateComplete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryUpdateComplete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryUpdateComplete;
    static deserializeBinaryFromReader(message: QueryUpdateComplete, reader: jspb.BinaryReader): QueryUpdateComplete;
}

export namespace QueryUpdateComplete {
    export type AsObject = {
        clientId: string,
        componentName: string,
    }
}

export class QueryUpdateCompleteExceptionally extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): QueryUpdateCompleteExceptionally;

    getComponentName(): string;
    setComponentName(value: string): QueryUpdateCompleteExceptionally;

    getErrorCode(): string;
    setErrorCode(value: string): QueryUpdateCompleteExceptionally;


    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): common_pb.ErrorMessage | undefined;
    setErrorMessage(value?: common_pb.ErrorMessage): QueryUpdateCompleteExceptionally;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryUpdateCompleteExceptionally.AsObject;
    static toObject(includeInstance: boolean, msg: QueryUpdateCompleteExceptionally): QueryUpdateCompleteExceptionally.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryUpdateCompleteExceptionally, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryUpdateCompleteExceptionally;
    static deserializeBinaryFromReader(message: QueryUpdateCompleteExceptionally, reader: jspb.BinaryReader): QueryUpdateCompleteExceptionally;
}

export namespace QueryUpdateCompleteExceptionally {
    export type AsObject = {
        clientId: string,
        componentName: string,
        errorCode: string,
        errorMessage?: common_pb.ErrorMessage.AsObject,
    }
}

export class SubscriptionQueryRequest extends jspb.Message { 

    hasSubscribe(): boolean;
    clearSubscribe(): void;
    getSubscribe(): SubscriptionQuery | undefined;
    setSubscribe(value?: SubscriptionQuery): SubscriptionQueryRequest;


    hasUnsubscribe(): boolean;
    clearUnsubscribe(): void;
    getUnsubscribe(): SubscriptionQuery | undefined;
    setUnsubscribe(value?: SubscriptionQuery): SubscriptionQueryRequest;


    hasGetInitialResult(): boolean;
    clearGetInitialResult(): void;
    getGetInitialResult(): SubscriptionQuery | undefined;
    setGetInitialResult(value?: SubscriptionQuery): SubscriptionQueryRequest;


    hasFlowControl(): boolean;
    clearFlowControl(): void;
    getFlowControl(): SubscriptionQuery | undefined;
    setFlowControl(value?: SubscriptionQuery): SubscriptionQueryRequest;


    getRequestCase(): SubscriptionQueryRequest.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionQueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionQueryRequest): SubscriptionQueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriptionQueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionQueryRequest;
    static deserializeBinaryFromReader(message: SubscriptionQueryRequest, reader: jspb.BinaryReader): SubscriptionQueryRequest;
}

export namespace SubscriptionQueryRequest {
    export type AsObject = {
        subscribe?: SubscriptionQuery.AsObject,
        unsubscribe?: SubscriptionQuery.AsObject,
        getInitialResult?: SubscriptionQuery.AsObject,
        flowControl?: SubscriptionQuery.AsObject,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    SUBSCRIBE = 1,

    UNSUBSCRIBE = 2,

    GET_INITIAL_RESULT = 3,

    FLOW_CONTROL = 4,

    }

}

export class SubscriptionQueryResponse extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): SubscriptionQueryResponse;

    getSubscriptionIdentifier(): string;
    setSubscriptionIdentifier(value: string): SubscriptionQueryResponse;


    hasInitialResult(): boolean;
    clearInitialResult(): void;
    getInitialResult(): QueryResponse | undefined;
    setInitialResult(value?: QueryResponse): SubscriptionQueryResponse;


    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): QueryUpdate | undefined;
    setUpdate(value?: QueryUpdate): SubscriptionQueryResponse;


    hasComplete(): boolean;
    clearComplete(): void;
    getComplete(): QueryUpdateComplete | undefined;
    setComplete(value?: QueryUpdateComplete): SubscriptionQueryResponse;


    hasCompleteExceptionally(): boolean;
    clearCompleteExceptionally(): void;
    getCompleteExceptionally(): QueryUpdateCompleteExceptionally | undefined;
    setCompleteExceptionally(value?: QueryUpdateCompleteExceptionally): SubscriptionQueryResponse;


    getResponseCase(): SubscriptionQueryResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionQueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionQueryResponse): SubscriptionQueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriptionQueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionQueryResponse;
    static deserializeBinaryFromReader(message: SubscriptionQueryResponse, reader: jspb.BinaryReader): SubscriptionQueryResponse;
}

export namespace SubscriptionQueryResponse {
    export type AsObject = {
        messageIdentifier: string,
        subscriptionIdentifier: string,
        initialResult?: QueryResponse.AsObject,
        update?: QueryUpdate.AsObject,
        complete?: QueryUpdateComplete.AsObject,
        completeExceptionally?: QueryUpdateCompleteExceptionally.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
    
    INITIAL_RESULT = 3,

    UPDATE = 4,

    COMPLETE = 5,

    COMPLETE_EXCEPTIONALLY = 6,

    }

}

export class QuerySubscription extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): QuerySubscription;

    getQuery(): string;
    setQuery(value: string): QuerySubscription;

    getResultName(): string;
    setResultName(value: string): QuerySubscription;

    getComponentName(): string;
    setComponentName(value: string): QuerySubscription;

    getClientId(): string;
    setClientId(value: string): QuerySubscription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySubscription.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySubscription): QuerySubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySubscription;
    static deserializeBinaryFromReader(message: QuerySubscription, reader: jspb.BinaryReader): QuerySubscription;
}

export namespace QuerySubscription {
    export type AsObject = {
        messageId: string,
        query: string,
        resultName: string,
        componentName: string,
        clientId: string,
    }
}
