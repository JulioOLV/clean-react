import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeLocalSaveAccessToken } from '../usecases/save-access-token/local-save-access-token-factory'
import { makeRemoteAddAccount } from '../usecases/add-account/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
