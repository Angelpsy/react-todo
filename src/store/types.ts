/**
 * Общий State
 */
export interface RootState {
  app: AppState;
}

export type GetRootState = () => RootState;

export interface AppState {
  status: Status;
}

export enum Status {
  /**
   * Отсутствует статус - дефолтное значение перед инициализацией
   */
  IDLE = "idle",
  /**
   * Модуль инициализирован - с ним начата работа
   */
  INIT = "init",
  /**
   * Модуль очищен или с ним закончили работать,
   * перед установки статуса данные, связанные с этим модулем должны быть удалены
   */
  DESTROY = "destroy",
}
