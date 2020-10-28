// package: io.axoniq.axonserver.grpc.event
// file: event.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as event_pb from "./event_pb";
import * as common_pb from "./common_pb";

interface IEventStoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    appendEvent: IEventStoreService_IAppendEvent;
    appendSnapshot: IEventStoreService_IAppendSnapshot;
    listAggregateEvents: IEventStoreService_IListAggregateEvents;
    listAggregateSnapshots: IEventStoreService_IListAggregateSnapshots;
    listEvents: IEventStoreService_IListEvents;
    readHighestSequenceNr: IEventStoreService_IReadHighestSequenceNr;
    queryEvents: IEventStoreService_IQueryEvents;
    getFirstToken: IEventStoreService_IGetFirstToken;
    getLastToken: IEventStoreService_IGetLastToken;
    getTokenAt: IEventStoreService_IGetTokenAt;
}

interface IEventStoreService_IAppendEvent extends grpc.MethodDefinition<event_pb.Event, event_pb.Confirmation> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/AppendEvent";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.Event>;
    requestDeserialize: grpc.deserialize<event_pb.Event>;
    responseSerialize: grpc.serialize<event_pb.Confirmation>;
    responseDeserialize: grpc.deserialize<event_pb.Confirmation>;
}
interface IEventStoreService_IAppendSnapshot extends grpc.MethodDefinition<event_pb.Event, event_pb.Confirmation> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/AppendSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.Event>;
    requestDeserialize: grpc.deserialize<event_pb.Event>;
    responseSerialize: grpc.serialize<event_pb.Confirmation>;
    responseDeserialize: grpc.deserialize<event_pb.Confirmation>;
}
interface IEventStoreService_IListAggregateEvents extends grpc.MethodDefinition<event_pb.GetAggregateEventsRequest, event_pb.Event> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/ListAggregateEvents";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<event_pb.GetAggregateEventsRequest>;
    requestDeserialize: grpc.deserialize<event_pb.GetAggregateEventsRequest>;
    responseSerialize: grpc.serialize<event_pb.Event>;
    responseDeserialize: grpc.deserialize<event_pb.Event>;
}
interface IEventStoreService_IListAggregateSnapshots extends grpc.MethodDefinition<event_pb.GetAggregateSnapshotsRequest, event_pb.Event> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/ListAggregateSnapshots";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<event_pb.GetAggregateSnapshotsRequest>;
    requestDeserialize: grpc.deserialize<event_pb.GetAggregateSnapshotsRequest>;
    responseSerialize: grpc.serialize<event_pb.Event>;
    responseDeserialize: grpc.deserialize<event_pb.Event>;
}
interface IEventStoreService_IListEvents extends grpc.MethodDefinition<event_pb.GetEventsRequest, event_pb.EventWithToken> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/ListEvents";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<event_pb.GetEventsRequest>;
    requestDeserialize: grpc.deserialize<event_pb.GetEventsRequest>;
    responseSerialize: grpc.serialize<event_pb.EventWithToken>;
    responseDeserialize: grpc.deserialize<event_pb.EventWithToken>;
}
interface IEventStoreService_IReadHighestSequenceNr extends grpc.MethodDefinition<event_pb.ReadHighestSequenceNrRequest, event_pb.ReadHighestSequenceNrResponse> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/ReadHighestSequenceNr";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.ReadHighestSequenceNrRequest>;
    requestDeserialize: grpc.deserialize<event_pb.ReadHighestSequenceNrRequest>;
    responseSerialize: grpc.serialize<event_pb.ReadHighestSequenceNrResponse>;
    responseDeserialize: grpc.deserialize<event_pb.ReadHighestSequenceNrResponse>;
}
interface IEventStoreService_IQueryEvents extends grpc.MethodDefinition<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/QueryEvents";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<event_pb.QueryEventsRequest>;
    requestDeserialize: grpc.deserialize<event_pb.QueryEventsRequest>;
    responseSerialize: grpc.serialize<event_pb.QueryEventsResponse>;
    responseDeserialize: grpc.deserialize<event_pb.QueryEventsResponse>;
}
interface IEventStoreService_IGetFirstToken extends grpc.MethodDefinition<event_pb.GetFirstTokenRequest, event_pb.TrackingToken> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/GetFirstToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.GetFirstTokenRequest>;
    requestDeserialize: grpc.deserialize<event_pb.GetFirstTokenRequest>;
    responseSerialize: grpc.serialize<event_pb.TrackingToken>;
    responseDeserialize: grpc.deserialize<event_pb.TrackingToken>;
}
interface IEventStoreService_IGetLastToken extends grpc.MethodDefinition<event_pb.GetLastTokenRequest, event_pb.TrackingToken> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/GetLastToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.GetLastTokenRequest>;
    requestDeserialize: grpc.deserialize<event_pb.GetLastTokenRequest>;
    responseSerialize: grpc.serialize<event_pb.TrackingToken>;
    responseDeserialize: grpc.deserialize<event_pb.TrackingToken>;
}
interface IEventStoreService_IGetTokenAt extends grpc.MethodDefinition<event_pb.GetTokenAtRequest, event_pb.TrackingToken> {
    path: "/io.axoniq.axonserver.grpc.event.EventStore/GetTokenAt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.GetTokenAtRequest>;
    requestDeserialize: grpc.deserialize<event_pb.GetTokenAtRequest>;
    responseSerialize: grpc.serialize<event_pb.TrackingToken>;
    responseDeserialize: grpc.deserialize<event_pb.TrackingToken>;
}

export const EventStoreService: IEventStoreService;

export interface IEventStoreServer {
    appendEvent: handleClientStreamingCall<event_pb.Event, event_pb.Confirmation>;
    appendSnapshot: grpc.handleUnaryCall<event_pb.Event, event_pb.Confirmation>;
    listAggregateEvents: grpc.handleServerStreamingCall<event_pb.GetAggregateEventsRequest, event_pb.Event>;
    listAggregateSnapshots: grpc.handleServerStreamingCall<event_pb.GetAggregateSnapshotsRequest, event_pb.Event>;
    listEvents: grpc.handleBidiStreamingCall<event_pb.GetEventsRequest, event_pb.EventWithToken>;
    readHighestSequenceNr: grpc.handleUnaryCall<event_pb.ReadHighestSequenceNrRequest, event_pb.ReadHighestSequenceNrResponse>;
    queryEvents: grpc.handleBidiStreamingCall<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse>;
    getFirstToken: grpc.handleUnaryCall<event_pb.GetFirstTokenRequest, event_pb.TrackingToken>;
    getLastToken: grpc.handleUnaryCall<event_pb.GetLastTokenRequest, event_pb.TrackingToken>;
    getTokenAt: grpc.handleUnaryCall<event_pb.GetTokenAtRequest, event_pb.TrackingToken>;
}

export interface IEventStoreClient {
    appendEvent(callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    appendEvent(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    appendEvent(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    appendEvent(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    appendSnapshot(request: event_pb.Event, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientUnaryCall;
    appendSnapshot(request: event_pb.Event, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientUnaryCall;
    appendSnapshot(request: event_pb.Event, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientUnaryCall;
    listAggregateEvents(request: event_pb.GetAggregateEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    listAggregateEvents(request: event_pb.GetAggregateEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    listAggregateSnapshots(request: event_pb.GetAggregateSnapshotsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    listAggregateSnapshots(request: event_pb.GetAggregateSnapshotsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    listEvents(): grpc.ClientDuplexStream<event_pb.GetEventsRequest, event_pb.EventWithToken>;
    listEvents(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.GetEventsRequest, event_pb.EventWithToken>;
    listEvents(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.GetEventsRequest, event_pb.EventWithToken>;
    readHighestSequenceNr(request: event_pb.ReadHighestSequenceNrRequest, callback: (error: grpc.ServiceError | null, response: event_pb.ReadHighestSequenceNrResponse) => void): grpc.ClientUnaryCall;
    readHighestSequenceNr(request: event_pb.ReadHighestSequenceNrRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.ReadHighestSequenceNrResponse) => void): grpc.ClientUnaryCall;
    readHighestSequenceNr(request: event_pb.ReadHighestSequenceNrRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.ReadHighestSequenceNrResponse) => void): grpc.ClientUnaryCall;
    queryEvents(): grpc.ClientDuplexStream<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse>;
    queryEvents(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse>;
    queryEvents(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse>;
    getFirstToken(request: event_pb.GetFirstTokenRequest, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getFirstToken(request: event_pb.GetFirstTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getFirstToken(request: event_pb.GetFirstTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getLastToken(request: event_pb.GetLastTokenRequest, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getLastToken(request: event_pb.GetLastTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getLastToken(request: event_pb.GetLastTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getTokenAt(request: event_pb.GetTokenAtRequest, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getTokenAt(request: event_pb.GetTokenAtRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    getTokenAt(request: event_pb.GetTokenAtRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
}

export class EventStoreClient extends grpc.Client implements IEventStoreClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public appendEvent(callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    public appendEvent(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    public appendEvent(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    public appendEvent(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientWritableStream<event_pb.Event>;
    public appendSnapshot(request: event_pb.Event, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientUnaryCall;
    public appendSnapshot(request: event_pb.Event, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientUnaryCall;
    public appendSnapshot(request: event_pb.Event, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.Confirmation) => void): grpc.ClientUnaryCall;
    public listAggregateEvents(request: event_pb.GetAggregateEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    public listAggregateEvents(request: event_pb.GetAggregateEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    public listAggregateSnapshots(request: event_pb.GetAggregateSnapshotsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    public listAggregateSnapshots(request: event_pb.GetAggregateSnapshotsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_pb.Event>;
    public listEvents(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.GetEventsRequest, event_pb.EventWithToken>;
    public listEvents(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.GetEventsRequest, event_pb.EventWithToken>;
    public readHighestSequenceNr(request: event_pb.ReadHighestSequenceNrRequest, callback: (error: grpc.ServiceError | null, response: event_pb.ReadHighestSequenceNrResponse) => void): grpc.ClientUnaryCall;
    public readHighestSequenceNr(request: event_pb.ReadHighestSequenceNrRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.ReadHighestSequenceNrResponse) => void): grpc.ClientUnaryCall;
    public readHighestSequenceNr(request: event_pb.ReadHighestSequenceNrRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.ReadHighestSequenceNrResponse) => void): grpc.ClientUnaryCall;
    public queryEvents(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse>;
    public queryEvents(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_pb.QueryEventsRequest, event_pb.QueryEventsResponse>;
    public getFirstToken(request: event_pb.GetFirstTokenRequest, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getFirstToken(request: event_pb.GetFirstTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getFirstToken(request: event_pb.GetFirstTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getLastToken(request: event_pb.GetLastTokenRequest, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getLastToken(request: event_pb.GetLastTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getLastToken(request: event_pb.GetLastTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getTokenAt(request: event_pb.GetTokenAtRequest, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getTokenAt(request: event_pb.GetTokenAtRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
    public getTokenAt(request: event_pb.GetTokenAtRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.TrackingToken) => void): grpc.ClientUnaryCall;
}

interface IEventSchedulerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    scheduleEvent: IEventSchedulerService_IScheduleEvent;
    rescheduleEvent: IEventSchedulerService_IRescheduleEvent;
    cancelScheduledEvent: IEventSchedulerService_ICancelScheduledEvent;
}

interface IEventSchedulerService_IScheduleEvent extends grpc.MethodDefinition<event_pb.ScheduleEventRequest, event_pb.ScheduleToken> {
    path: "/io.axoniq.axonserver.grpc.event.EventScheduler/ScheduleEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.ScheduleEventRequest>;
    requestDeserialize: grpc.deserialize<event_pb.ScheduleEventRequest>;
    responseSerialize: grpc.serialize<event_pb.ScheduleToken>;
    responseDeserialize: grpc.deserialize<event_pb.ScheduleToken>;
}
interface IEventSchedulerService_IRescheduleEvent extends grpc.MethodDefinition<event_pb.RescheduleEventRequest, event_pb.ScheduleToken> {
    path: "/io.axoniq.axonserver.grpc.event.EventScheduler/RescheduleEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.RescheduleEventRequest>;
    requestDeserialize: grpc.deserialize<event_pb.RescheduleEventRequest>;
    responseSerialize: grpc.serialize<event_pb.ScheduleToken>;
    responseDeserialize: grpc.deserialize<event_pb.ScheduleToken>;
}
interface IEventSchedulerService_ICancelScheduledEvent extends grpc.MethodDefinition<event_pb.CancelScheduledEventRequest, common_pb.InstructionAck> {
    path: "/io.axoniq.axonserver.grpc.event.EventScheduler/CancelScheduledEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_pb.CancelScheduledEventRequest>;
    requestDeserialize: grpc.deserialize<event_pb.CancelScheduledEventRequest>;
    responseSerialize: grpc.serialize<common_pb.InstructionAck>;
    responseDeserialize: grpc.deserialize<common_pb.InstructionAck>;
}

export const EventSchedulerService: IEventSchedulerService;

export interface IEventSchedulerServer {
    scheduleEvent: grpc.handleUnaryCall<event_pb.ScheduleEventRequest, event_pb.ScheduleToken>;
    rescheduleEvent: grpc.handleUnaryCall<event_pb.RescheduleEventRequest, event_pb.ScheduleToken>;
    cancelScheduledEvent: grpc.handleUnaryCall<event_pb.CancelScheduledEventRequest, common_pb.InstructionAck>;
}

export interface IEventSchedulerClient {
    scheduleEvent(request: event_pb.ScheduleEventRequest, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    scheduleEvent(request: event_pb.ScheduleEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    scheduleEvent(request: event_pb.ScheduleEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    rescheduleEvent(request: event_pb.RescheduleEventRequest, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    rescheduleEvent(request: event_pb.RescheduleEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    rescheduleEvent(request: event_pb.RescheduleEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    cancelScheduledEvent(request: event_pb.CancelScheduledEventRequest, callback: (error: grpc.ServiceError | null, response: common_pb.InstructionAck) => void): grpc.ClientUnaryCall;
    cancelScheduledEvent(request: event_pb.CancelScheduledEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.InstructionAck) => void): grpc.ClientUnaryCall;
    cancelScheduledEvent(request: event_pb.CancelScheduledEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.InstructionAck) => void): grpc.ClientUnaryCall;
}

export class EventSchedulerClient extends grpc.Client implements IEventSchedulerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public scheduleEvent(request: event_pb.ScheduleEventRequest, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    public scheduleEvent(request: event_pb.ScheduleEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    public scheduleEvent(request: event_pb.ScheduleEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    public rescheduleEvent(request: event_pb.RescheduleEventRequest, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    public rescheduleEvent(request: event_pb.RescheduleEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    public rescheduleEvent(request: event_pb.RescheduleEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_pb.ScheduleToken) => void): grpc.ClientUnaryCall;
    public cancelScheduledEvent(request: event_pb.CancelScheduledEventRequest, callback: (error: grpc.ServiceError | null, response: common_pb.InstructionAck) => void): grpc.ClientUnaryCall;
    public cancelScheduledEvent(request: event_pb.CancelScheduledEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.InstructionAck) => void): grpc.ClientUnaryCall;
    public cancelScheduledEvent(request: event_pb.CancelScheduledEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.InstructionAck) => void): grpc.ClientUnaryCall;
}
