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

  return (
    <div
      data-testid={`${props.name}-wrap`}
      data-status={error ? 'invalid' : 'valid'}
      className={Styles['input-wrap']}
    >
      <input
        {...props}
        title={error}
        placeholder=''
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
        ref={inputRef}
      />
      <label
        title={error}
        data-testid={`${props.name}-label`}
        onClick={() => inputRef.current.focus()}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
