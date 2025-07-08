import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/context/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>(null)
  const error = state[`${(props || {}).name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  return (
    <div className={Styles['input-wrap']}>
      <input
        {...props}
        placeholder=''
        data-testid={(props || {}).name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
        ref={inputRef}
      />
      <label onClick={() => inputRef.current.focus()}>{props.placeholder}</label>
      <span
        data-testid={`${(props || {}).name}-status`}
        title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
