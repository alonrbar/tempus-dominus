import { DateTime, Unit } from './datetime';

interface BaseEvent {
  name: string;
}

/**
 * Triggers when setValue fails because of validation rules etc.
 * @event FailEvent
 */
interface FailEvent extends BaseEvent {
  reason: string;
  date: DateTime;
  oldDate: DateTime;
}

/**
 * Triggers when the picker is hidden.
 */
interface HideEvent extends BaseEvent {
  date: DateTime;
}

/**
 * Triggers when a change is successful.
 */
interface ChangeEvent extends BaseEvent {
  date: DateTime | undefined;
  oldDate: DateTime;
  isClear: boolean;
  isValid: boolean;
}

/**
 * Triggers when the view is changed for instance from month to year.
 */
interface ViewUpdateEvent extends BaseEvent {
  change: Unit;
  viewDate: DateTime;
}

export { BaseEvent, FailEvent, HideEvent, ChangeEvent, ViewUpdateEvent };
