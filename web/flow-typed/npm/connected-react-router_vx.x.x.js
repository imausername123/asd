// flow-typed signature: 12997804355a656d67739bbe223dcbd9
// flow-typed version: <<STUB>>/connected-react-router_v4.3.0/flow_v0.75.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'connected-react-router'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

import { Reducer } from 'redux';
import {
  History,
  Location,
  Path,
  LocationState,
  LocationDescriptor
} from 'history';

declare module 'connected-react-router' {
  declare interface ConnectedRouterProps {
    history: History
  }
  declare export interface RouterState {
    location: {
      pathname: string,
      search: string,
      hash: string,
      key: string
    },
    action: 'POP' | 'PUSH',
  }
  declare export var LOCATION_CHANGE: string;
  declare export var CALL_HISTORY_METHOD: string;

  declare export type RouterAction = {
    type: string,
  }

  declare export function push(path: Path, state?: LocationState): RouterAction
  declare export function replace(path: Path, state?: LocationState): RouterAction
  declare export function go(n: number): RouterAction
  declare export function goBack(): RouterAction
  declare export function goForward(): RouterAction

  declare export var routerActions: {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward
  };
  declare export class ConnectedRouter mixins React$Component<ConnectedRouterProps, {}>{}
  declare export function connectRouter(history: History):<S, A>(reducer: Reducer<S, A>) => Reducer<S, A>

  declare export function routerMiddleware(history: History): Middleware
}