// GENERATED CODE -- DO NOT EDIT!

'use strict';
var event_pb = require('./event_pb.js');
var common_pb = require('./common_pb.js');

function serialize_io_axoniq_axonserver_grpc_InstructionAck(arg) {
  if (!(arg instanceof common_pb.InstructionAck)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.InstructionAck');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_InstructionAck(buffer_arg) {
  return common_pb.InstructionAck.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_CancelScheduledEventRequest(arg) {
  if (!(arg instanceof event_pb.CancelScheduledEventRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.CancelScheduledEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_CancelScheduledEventRequest(buffer_arg) {
  return event_pb.CancelScheduledEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_Confirmation(arg) {
  if (!(arg instanceof event_pb.Confirmation)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.Confirmation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_Confirmation(buffer_arg) {
  return event_pb.Confirmation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_Event(arg) {
  if (!(arg instanceof event_pb.Event)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_Event(buffer_arg) {
  return event_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_EventWithToken(arg) {
  if (!(arg instanceof event_pb.EventWithToken)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.EventWithToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_EventWithToken(buffer_arg) {
  return event_pb.EventWithToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_GetAggregateEventsRequest(arg) {
  if (!(arg instanceof event_pb.GetAggregateEventsRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.GetAggregateEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_GetAggregateEventsRequest(buffer_arg) {
  return event_pb.GetAggregateEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_GetAggregateSnapshotsRequest(arg) {
  if (!(arg instanceof event_pb.GetAggregateSnapshotsRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.GetAggregateSnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_GetAggregateSnapshotsRequest(buffer_arg) {
  return event_pb.GetAggregateSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_GetEventsRequest(arg) {
  if (!(arg instanceof event_pb.GetEventsRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.GetEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_GetEventsRequest(buffer_arg) {
  return event_pb.GetEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_GetFirstTokenRequest(arg) {
  if (!(arg instanceof event_pb.GetFirstTokenRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.GetFirstTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_GetFirstTokenRequest(buffer_arg) {
  return event_pb.GetFirstTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_GetLastTokenRequest(arg) {
  if (!(arg instanceof event_pb.GetLastTokenRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.GetLastTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_GetLastTokenRequest(buffer_arg) {
  return event_pb.GetLastTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_GetTokenAtRequest(arg) {
  if (!(arg instanceof event_pb.GetTokenAtRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.GetTokenAtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_GetTokenAtRequest(buffer_arg) {
  return event_pb.GetTokenAtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_QueryEventsRequest(arg) {
  if (!(arg instanceof event_pb.QueryEventsRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.QueryEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_QueryEventsRequest(buffer_arg) {
  return event_pb.QueryEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_QueryEventsResponse(arg) {
  if (!(arg instanceof event_pb.QueryEventsResponse)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.QueryEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_QueryEventsResponse(buffer_arg) {
  return event_pb.QueryEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrRequest(arg) {
  if (!(arg instanceof event_pb.ReadHighestSequenceNrRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.ReadHighestSequenceNrRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrRequest(buffer_arg) {
  return event_pb.ReadHighestSequenceNrRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrResponse(arg) {
  if (!(arg instanceof event_pb.ReadHighestSequenceNrResponse)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.ReadHighestSequenceNrResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrResponse(buffer_arg) {
  return event_pb.ReadHighestSequenceNrResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_RescheduleEventRequest(arg) {
  if (!(arg instanceof event_pb.RescheduleEventRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.RescheduleEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_RescheduleEventRequest(buffer_arg) {
  return event_pb.RescheduleEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_ScheduleEventRequest(arg) {
  if (!(arg instanceof event_pb.ScheduleEventRequest)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.ScheduleEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_ScheduleEventRequest(buffer_arg) {
  return event_pb.ScheduleEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_ScheduleToken(arg) {
  if (!(arg instanceof event_pb.ScheduleToken)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.ScheduleToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_ScheduleToken(buffer_arg) {
  return event_pb.ScheduleToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_axoniq_axonserver_grpc_event_TrackingToken(arg) {
  if (!(arg instanceof event_pb.TrackingToken)) {
    throw new Error('Expected argument of type io.axoniq.axonserver.grpc.event.TrackingToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_axoniq_axonserver_grpc_event_TrackingToken(buffer_arg) {
  return event_pb.TrackingToken.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service providing operations against the EventStore functionality of Axon Server 
var EventStoreService = exports['io.axoniq.axonserver.grpc.event.EventStore'] = {
  // Accepts a stream of Events returning a Confirmation when completed.
appendEvent: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/AppendEvent',
    requestStream: true,
    responseStream: false,
    requestType: event_pb.Event,
    responseType: event_pb.Confirmation,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_Event,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_Event,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_Confirmation,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_Confirmation,
  },
  // Accepts a Snapshot event returning a Confirmation when completed.
appendSnapshot: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/AppendSnapshot',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.Event,
    responseType: event_pb.Confirmation,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_Event,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_Event,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_Confirmation,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_Confirmation,
  },
  // Retrieves the Events for a given aggregate. Results are streamed rather than returned at once.
listAggregateEvents: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/ListAggregateEvents',
    requestStream: false,
    responseStream: true,
    requestType: event_pb.GetAggregateEventsRequest,
    responseType: event_pb.Event,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_GetAggregateEventsRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_GetAggregateEventsRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_Event,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_Event,
  },
  // Retrieves the Snapshots for a given aggregate. Results are streamed rather than returned at once.
listAggregateSnapshots: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/ListAggregateSnapshots',
    requestStream: false,
    responseStream: true,
    requestType: event_pb.GetAggregateSnapshotsRequest,
    responseType: event_pb.Event,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_GetAggregateSnapshotsRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_GetAggregateSnapshotsRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_Event,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_Event,
  },
  // Retrieves the Events from a given tracking token. However, if several GetEventsRequests are sent in the stream
// only first one will create the tracker, others are used for increasing number of permits or blacklisting. Results
// are streamed rather than returned at once. 
listEvents: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/ListEvents',
    requestStream: true,
    responseStream: true,
    requestType: event_pb.GetEventsRequest,
    responseType: event_pb.EventWithToken,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_GetEventsRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_GetEventsRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_EventWithToken,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_EventWithToken,
  },
  // Gets the highest sequence number for a specific aggregate.
readHighestSequenceNr: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/ReadHighestSequenceNr',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.ReadHighestSequenceNrRequest,
    responseType: event_pb.ReadHighestSequenceNrResponse,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrResponse,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_ReadHighestSequenceNrResponse,
  },
  // Performs a query on the event store, returns a stream of results. Input is a stream to allow flow control from the
// client
queryEvents: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/QueryEvents',
    requestStream: true,
    responseStream: true,
    requestType: event_pb.QueryEventsRequest,
    responseType: event_pb.QueryEventsResponse,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_QueryEventsRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_QueryEventsRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_QueryEventsResponse,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_QueryEventsResponse,
  },
  // Retrieves the first token available in event store (typically 0). Returns 0 when no events in store.
getFirstToken: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/GetFirstToken',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetFirstTokenRequest,
    responseType: event_pb.TrackingToken,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_GetFirstTokenRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_GetFirstTokenRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_TrackingToken,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_TrackingToken,
  },
  // Retrieves the last committed token in event store. Returns -1 when no events in store.
getLastToken: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/GetLastToken',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetLastTokenRequest,
    responseType: event_pb.TrackingToken,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_GetLastTokenRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_GetLastTokenRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_TrackingToken,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_TrackingToken,
  },
  // Retrieves the token of the first token of an event from specified time in event store. Returns -1 when no events in store.
getTokenAt: {
    path: '/io.axoniq.axonserver.grpc.event.EventStore/GetTokenAt',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetTokenAtRequest,
    responseType: event_pb.TrackingToken,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_GetTokenAtRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_GetTokenAtRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_TrackingToken,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_TrackingToken,
  },
};

// Service to use AxonServer as a provider of an EventScheduler 
var EventSchedulerService = exports['io.axoniq.axonserver.grpc.event.EventScheduler'] = {
  //  Schedule the given event for publication at the given time}. The returned ScheduleToken can be used to cancel the planned publication.
scheduleEvent: {
    path: '/io.axoniq.axonserver.grpc.event.EventScheduler/ScheduleEvent',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.ScheduleEventRequest,
    responseType: event_pb.ScheduleToken,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_ScheduleEventRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_ScheduleEventRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_ScheduleToken,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_ScheduleToken,
  },
  //  Cancel a scheduled event and schedule another in its place.
rescheduleEvent: {
    path: '/io.axoniq.axonserver.grpc.event.EventScheduler/RescheduleEvent',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.RescheduleEventRequest,
    responseType: event_pb.ScheduleToken,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_RescheduleEventRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_RescheduleEventRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_event_ScheduleToken,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_event_ScheduleToken,
  },
  //  Cancel the publication of a scheduled event. If the events has already been published, this method does nothing.
cancelScheduledEvent: {
    path: '/io.axoniq.axonserver.grpc.event.EventScheduler/CancelScheduledEvent',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.CancelScheduledEventRequest,
    responseType: common_pb.InstructionAck,
    requestSerialize: serialize_io_axoniq_axonserver_grpc_event_CancelScheduledEventRequest,
    requestDeserialize: deserialize_io_axoniq_axonserver_grpc_event_CancelScheduledEventRequest,
    responseSerialize: serialize_io_axoniq_axonserver_grpc_InstructionAck,
    responseDeserialize: deserialize_io_axoniq_axonserver_grpc_InstructionAck,
  },
};

