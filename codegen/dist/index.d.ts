/**
 * @author ChenTao
 *
 * 'graphql-ts-client' is a graphql client for TypeScript, it has two functionalities:
 *
 * 1. Supports GraphQL queries with strongly typed code
 *
 * 2. Automatically infers the type of the returned data according to the strongly typed query
 */
export { Generator } from './Generator';
export type { GeneratorConfig } from './GeneratorConfig';
export { loadRemoteSchema } from './RemoteSchemaLoader';
