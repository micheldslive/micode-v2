import { bindActionCreators, Dispatch } from 'redux'
import { State } from '@/reducer/types'
import * as action from '@/reducer/actions'

export const mapStateToProps = (state: State) => ({ state })

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch)
