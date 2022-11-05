import { mapDispatchToProps, mapStateToProps } from '@/reducer/maps'

export interface State {
  page?: number
  change?: number
  menu?: boolean
}

export type Action = {
  type: string
  state: State
}

export type DispatchType = (args: Action) => Action

export type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export const SET_PAGE = 'SET_PAGE'

export const SET_CHANGE = 'SET_CHANGE'

export const SET_MENU = 'SET_MENU'
