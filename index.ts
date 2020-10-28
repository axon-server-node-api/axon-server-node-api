export * from './lib/common_pb'
export * from './lib/control_pb'
export * from './lib/command_pb'
export * from './lib/query_pb'
export * from './lib/event_pb'

import * as control_grpc_pb from  './lib/control_grpc_pb'
import * as command_grpc_pb from  './lib/command_grpc_pb'
import * as query_grpc_pb from  './lib/query_grpc_pb'
import * as event_grpc_pb from  './lib/event_grpc_pb'

export type PlatformService = control_grpc_pb.PlatformServiceClient
export type CommandService = command_grpc_pb.CommandServiceClient
export type QueryService = query_grpc_pb.QueryServiceClient
export type EventStore = event_grpc_pb.EventStoreClient
export type EventScheduler = event_grpc_pb.EventSchedulerClient

export type AxonClient = {
  PlatformService: typeof control_grpc_pb.PlatformServiceClient
  CommandService: typeof command_grpc_pb.CommandServiceClient
  QueryService: typeof query_grpc_pb.QueryServiceClient
  EventStore: typeof event_grpc_pb.EventStoreClient
  EventScheduler: typeof event_grpc_pb.EventSchedulerClient
}

let client: AxonClient
export function loadAxonClient(loadProto: (def: any) => any): AxonClient {
  if (client) return client

  const control = loadProto(control_grpc_pb)
  const command = loadProto(command_grpc_pb)
  const query = loadProto(query_grpc_pb)
  const event = loadProto(event_grpc_pb)

  client = {
    PlatformService: control.io.axoniq.axonserver.grpc.control.PlatformService,
    CommandService: command.io.axoniq.axonserver.grpc.command.CommandService,
    QueryService: query.io.axoniq.axonserver.grpc.query.QueryService,
    EventStore: event.io.axoniq.axonserver.grpc.event.EventStore,
    EventScheduler: event.io.axoniq.axonserver.grpc.event.EventScheduler,
  }

  return client
}
