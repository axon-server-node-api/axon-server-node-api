// package: io.axoniq.axonserver.grpc.event
// file: event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class ScheduleEventRequest extends jspb.Message { 
    getInstant(): number;
    setInstant(value: number): ScheduleEventRequest;


    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): Event | undefined;
    setEvent(value?: Event): ScheduleEventRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleEventRequest): ScheduleEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleEventRequest;
    static deserializeBinaryFromReader(message: ScheduleEventRequest, reader: jspb.BinaryReader): ScheduleEventRequest;
}

export namespace ScheduleEventRequest {
    export type AsObject = {
        instant: number,
        event?: Event.AsObject,
    }
}

export class RescheduleEventRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): RescheduleEventRequest;

    getInstant(): number;
    setInstant(value: number): RescheduleEventRequest;


    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): Event | undefined;
    setEvent(value?: Event): RescheduleEventRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RescheduleEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RescheduleEventRequest): RescheduleEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RescheduleEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RescheduleEventRequest;
    static deserializeBinaryFromReader(message: RescheduleEventRequest, reader: jspb.BinaryReader): RescheduleEventRequest;
}

export namespace RescheduleEventRequest {
    export type AsObject = {
        token: string,
        instant: number,
        event?: Event.AsObject,
    }
}

export class CancelScheduledEventRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CancelScheduledEventRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelScheduledEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelScheduledEventRequest): CancelScheduledEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelScheduledEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelScheduledEventRequest;
    static deserializeBinaryFromReader(message: CancelScheduledEventRequest, reader: jspb.BinaryReader): CancelScheduledEventRequest;
}

export namespace CancelScheduledEventRequest {
    export type AsObject = {
        token: string,
    }
}

export class ScheduleToken extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ScheduleToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleToken.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleToken): ScheduleToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleToken;
    static deserializeBinaryFromReader(message: ScheduleToken, reader: jspb.BinaryReader): ScheduleToken;
}

export namespace ScheduleToken {
    export type AsObject = {
        token: string,
    }
}

export class GetFirstTokenRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFirstTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFirstTokenRequest): GetFirstTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFirstTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFirstTokenRequest;
    static deserializeBinaryFromReader(message: GetFirstTokenRequest, reader: jspb.BinaryReader): GetFirstTokenRequest;
}

export namespace GetFirstTokenRequest {
    export type AsObject = {
    }
}

export class GetLastTokenRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastTokenRequest): GetLastTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastTokenRequest;
    static deserializeBinaryFromReader(message: GetLastTokenRequest, reader: jspb.BinaryReader): GetLastTokenRequest;
}

export namespace GetLastTokenRequest {
    export type AsObject = {
    }
}

export class GetTokenAtRequest extends jspb.Message { 
    getInstant(): number;
    setInstant(value: number): GetTokenAtRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenAtRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenAtRequest): GetTokenAtRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenAtRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenAtRequest;
    static deserializeBinaryFromReader(message: GetTokenAtRequest, reader: jspb.BinaryReader): GetTokenAtRequest;
}

export namespace GetTokenAtRequest {
    export type AsObject = {
        instant: number,
    }
}

export class TrackingToken extends jspb.Message { 
    getToken(): number;
    setToken(value: number): TrackingToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrackingToken.AsObject;
    static toObject(includeInstance: boolean, msg: TrackingToken): TrackingToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrackingToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrackingToken;
    static deserializeBinaryFromReader(message: TrackingToken, reader: jspb.BinaryReader): TrackingToken;
}

export namespace TrackingToken {
    export type AsObject = {
        token: number,
    }
}

export class EventWithToken extends jspb.Message { 
    getToken(): number;
    setToken(value: number): EventWithToken;


    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): Event | undefined;
    setEvent(value?: Event): EventWithToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventWithToken.AsObject;
    static toObject(includeInstance: boolean, msg: EventWithToken): EventWithToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventWithToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventWithToken;
    static deserializeBinaryFromReader(message: EventWithToken, reader: jspb.BinaryReader): EventWithToken;
}

export namespace EventWithToken {
    export type AsObject = {
        token: number,
        event?: Event.AsObject,
    }
}

export class QueryEventsRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): QueryEventsRequest;

    getNumberOfPermits(): number;
    setNumberOfPermits(value: number): QueryEventsRequest;

    getLiveEvents(): boolean;
    setLiveEvents(value: boolean): QueryEventsRequest;

    getForceReadFromLeader(): boolean;
    setForceReadFromLeader(value: boolean): QueryEventsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEventsRequest): QueryEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEventsRequest;
    static deserializeBinaryFromReader(message: QueryEventsRequest, reader: jspb.BinaryReader): QueryEventsRequest;
}

export namespace QueryEventsRequest {
    export type AsObject = {
        query: string,
        numberOfPermits: number,
        liveEvents: boolean,
        forceReadFromLeader: boolean,
    }
}

export class QueryEventsResponse extends jspb.Message { 

    hasColumns(): boolean;
    clearColumns(): void;
    getColumns(): ColumnsResponse | undefined;
    setColumns(value?: ColumnsResponse): QueryEventsResponse;


    hasRow(): boolean;
    clearRow(): void;
    getRow(): RowResponse | undefined;
    setRow(value?: RowResponse): QueryEventsResponse;


    hasFilesCompleted(): boolean;
    clearFilesCompleted(): void;
    getFilesCompleted(): Confirmation | undefined;
    setFilesCompleted(value?: Confirmation): QueryEventsResponse;


    getDataCase(): QueryEventsResponse.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEventsResponse): QueryEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEventsResponse;
    static deserializeBinaryFromReader(message: QueryEventsResponse, reader: jspb.BinaryReader): QueryEventsResponse;
}

export namespace QueryEventsResponse {
    export type AsObject = {
        columns?: ColumnsResponse.AsObject,
        row?: RowResponse.AsObject,
        filesCompleted?: Confirmation.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
    
    COLUMNS = 1,

    ROW = 2,

    FILES_COMPLETED = 3,

    }

}

export class ColumnsResponse extends jspb.Message { 
    clearColumnList(): void;
    getColumnList(): Array<string>;
    setColumnList(value: Array<string>): ColumnsResponse;
    addColumn(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ColumnsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ColumnsResponse): ColumnsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ColumnsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ColumnsResponse;
    static deserializeBinaryFromReader(message: ColumnsResponse, reader: jspb.BinaryReader): ColumnsResponse;
}

export namespace ColumnsResponse {
    export type AsObject = {
        columnList: Array<string>,
    }
}

export class RowResponse extends jspb.Message { 
    clearIdValuesList(): void;
    getIdValuesList(): Array<QueryValue>;
    setIdValuesList(value: Array<QueryValue>): RowResponse;
    addIdValues(value?: QueryValue, index?: number): QueryValue;

    clearSortValuesList(): void;
    getSortValuesList(): Array<QueryValue>;
    setSortValuesList(value: Array<QueryValue>): RowResponse;
    addSortValues(value?: QueryValue, index?: number): QueryValue;


    getValuesMap(): jspb.Map<string, QueryValue>;
    clearValuesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RowResponse): RowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RowResponse;
    static deserializeBinaryFromReader(message: RowResponse, reader: jspb.BinaryReader): RowResponse;
}

export namespace RowResponse {
    export type AsObject = {
        idValuesList: Array<QueryValue.AsObject>,
        sortValuesList: Array<QueryValue.AsObject>,

        valuesMap: Array<[string, QueryValue.AsObject]>,
    }
}

export class ReadHighestSequenceNrRequest extends jspb.Message { 
    getAggregateId(): string;
    setAggregateId(value: string): ReadHighestSequenceNrRequest;

    getFromSequenceNr(): number;
    setFromSequenceNr(value: number): ReadHighestSequenceNrRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadHighestSequenceNrRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadHighestSequenceNrRequest): ReadHighestSequenceNrRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadHighestSequenceNrRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadHighestSequenceNrRequest;
    static deserializeBinaryFromReader(message: ReadHighestSequenceNrRequest, reader: jspb.BinaryReader): ReadHighestSequenceNrRequest;
}

export namespace ReadHighestSequenceNrRequest {
    export type AsObject = {
        aggregateId: string,
        fromSequenceNr: number,
    }
}

export class ReadHighestSequenceNrResponse extends jspb.Message { 
    getToSequenceNr(): number;
    setToSequenceNr(value: number): ReadHighestSequenceNrResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadHighestSequenceNrResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadHighestSequenceNrResponse): ReadHighestSequenceNrResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadHighestSequenceNrResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadHighestSequenceNrResponse;
    static deserializeBinaryFromReader(message: ReadHighestSequenceNrResponse, reader: jspb.BinaryReader): ReadHighestSequenceNrResponse;
}

export namespace ReadHighestSequenceNrResponse {
    export type AsObject = {
        toSequenceNr: number,
    }
}

export class Confirmation extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): Confirmation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Confirmation.AsObject;
    static toObject(includeInstance: boolean, msg: Confirmation): Confirmation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Confirmation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Confirmation;
    static deserializeBinaryFromReader(message: Confirmation, reader: jspb.BinaryReader): Confirmation;
}

export namespace Confirmation {
    export type AsObject = {
        success: boolean,
    }
}

export class GetAggregateEventsRequest extends jspb.Message { 
    getAggregateId(): string;
    setAggregateId(value: string): GetAggregateEventsRequest;

    getInitialSequence(): number;
    setInitialSequence(value: number): GetAggregateEventsRequest;

    getAllowSnapshots(): boolean;
    setAllowSnapshots(value: boolean): GetAggregateEventsRequest;

    getMaxSequence(): number;
    setMaxSequence(value: number): GetAggregateEventsRequest;

    getMinToken(): number;
    setMinToken(value: number): GetAggregateEventsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAggregateEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAggregateEventsRequest): GetAggregateEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAggregateEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAggregateEventsRequest;
    static deserializeBinaryFromReader(message: GetAggregateEventsRequest, reader: jspb.BinaryReader): GetAggregateEventsRequest;
}

export namespace GetAggregateEventsRequest {
    export type AsObject = {
        aggregateId: string,
        initialSequence: number,
        allowSnapshots: boolean,
        maxSequence: number,
        minToken: number,
    }
}

export class GetAggregateSnapshotsRequest extends jspb.Message { 
    getAggregateId(): string;
    setAggregateId(value: string): GetAggregateSnapshotsRequest;

    getInitialSequence(): number;
    setInitialSequence(value: number): GetAggregateSnapshotsRequest;

    getMaxSequence(): number;
    setMaxSequence(value: number): GetAggregateSnapshotsRequest;

    getMaxResults(): number;
    setMaxResults(value: number): GetAggregateSnapshotsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAggregateSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAggregateSnapshotsRequest): GetAggregateSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAggregateSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAggregateSnapshotsRequest;
    static deserializeBinaryFromReader(message: GetAggregateSnapshotsRequest, reader: jspb.BinaryReader): GetAggregateSnapshotsRequest;
}

export namespace GetAggregateSnapshotsRequest {
    export type AsObject = {
        aggregateId: string,
        initialSequence: number,
        maxSequence: number,
        maxResults: number,
    }
}

export class GetEventsRequest extends jspb.Message { 
    getTrackingToken(): number;
    setTrackingToken(value: number): GetEventsRequest;

    getNumberOfPermits(): number;
    setNumberOfPermits(value: number): GetEventsRequest;

    getClientId(): string;
    setClientId(value: string): GetEventsRequest;

    getComponentName(): string;
    setComponentName(value: string): GetEventsRequest;

    getProcessor(): string;
    setProcessor(value: string): GetEventsRequest;

    clearBlacklistList(): void;
    getBlacklistList(): Array<PayloadDescription>;
    setBlacklistList(value: Array<PayloadDescription>): GetEventsRequest;
    addBlacklist(value?: PayloadDescription, index?: number): PayloadDescription;

    getForceReadFromLeader(): boolean;
    setForceReadFromLeader(value: boolean): GetEventsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventsRequest): GetEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventsRequest;
    static deserializeBinaryFromReader(message: GetEventsRequest, reader: jspb.BinaryReader): GetEventsRequest;
}

export namespace GetEventsRequest {
    export type AsObject = {
        trackingToken: number,
        numberOfPermits: number,
        clientId: string,
        componentName: string,
        processor: string,
        blacklistList: Array<PayloadDescription.AsObject>,
        forceReadFromLeader: boolean,
    }
}

export class Event extends jspb.Message { 
    getMessageIdentifier(): string;
    setMessageIdentifier(value: string): Event;

    getAggregateIdentifier(): string;
    setAggregateIdentifier(value: string): Event;

    getAggregateSequenceNumber(): number;
    setAggregateSequenceNumber(value: number): Event;

    getAggregateType(): string;
    setAggregateType(value: string): Event;

    getTimestamp(): number;
    setTimestamp(value: number): Event;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): common_pb.SerializedObject | undefined;
    setPayload(value?: common_pb.SerializedObject): Event;


    getMetaDataMap(): jspb.Map<string, common_pb.MetaDataValue>;
    clearMetaDataMap(): void;

    getSnapshot(): boolean;
    setSnapshot(value: boolean): Event;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        messageIdentifier: string,
        aggregateIdentifier: string,
        aggregateSequenceNumber: number,
        aggregateType: string,
        timestamp: number,
        payload?: common_pb.SerializedObject.AsObject,

        metaDataMap: Array<[string, common_pb.MetaDataValue.AsObject]>,
        snapshot: boolean,
    }
}

export class QueryValue extends jspb.Message { 

    hasTextValue(): boolean;
    clearTextValue(): void;
    getTextValue(): string;
    setTextValue(value: string): QueryValue;


    hasNumberValue(): boolean;
    clearNumberValue(): void;
    getNumberValue(): number;
    setNumberValue(value: number): QueryValue;


    hasBooleanValue(): boolean;
    clearBooleanValue(): void;
    getBooleanValue(): boolean;
    setBooleanValue(value: boolean): QueryValue;


    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): QueryValue;


    getDataCase(): QueryValue.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryValue.AsObject;
    static toObject(includeInstance: boolean, msg: QueryValue): QueryValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryValue;
    static deserializeBinaryFromReader(message: QueryValue, reader: jspb.BinaryReader): QueryValue;
}

export namespace QueryValue {
    export type AsObject = {
        textValue: string,
        numberValue: number,
        booleanValue: boolean,
        doubleValue: number,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
    
    TEXT_VALUE = 1,

    NUMBER_VALUE = 2,

    BOOLEAN_VALUE = 3,

    DOUBLE_VALUE = 4,

    }

}

export class PayloadDescription extends jspb.Message { 
    getType(): string;
    setType(value: string): PayloadDescription;

    getRevision(): string;
    setRevision(value: string): PayloadDescription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadDescription.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadDescription): PayloadDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadDescription;
    static deserializeBinaryFromReader(message: PayloadDescription, reader: jspb.BinaryReader): PayloadDescription;
}

export namespace PayloadDescription {
    export type AsObject = {
        type: string,
        revision: string,
    }
}
