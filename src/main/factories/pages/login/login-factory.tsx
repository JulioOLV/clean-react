import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '../usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'
import { makeLocalSaveAccessToken } from '../usecases/save-access-token/local-save-access-token-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
