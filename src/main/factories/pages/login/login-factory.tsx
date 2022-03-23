import React from 'react'
import { Login } from '@/presentation/pages'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  // const validationComposite = criar builder
  return (
    <Login
      authentication={remoteAuthentication}
      validation={null}
    />
  )
}
