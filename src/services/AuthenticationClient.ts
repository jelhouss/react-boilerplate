import { AxiosError } from "axios"

import {
  AuthenticationPayload,
  AuthenticationResponse,
  RefreshAuthenticationResponse
} from "../types/authentication"
import BaseClient from "./BaseClient"

class AuthenticationClient extends BaseClient {
  async signIn({
    email,
    password
  }: AuthenticationPayload): Promise<AuthenticationResponse | AxiosError> {
    const {
      data: { token, user }
    } = await this.client.post("/authenticate", {
      email,
      password
    })

    this.setAccessToken(token)

    const response: AuthenticationResponse = { token, user }

    return response
  }

  async signOut(): Promise<void> {
    this.setAccessToken(null)
  }

  async refresh(): Promise<RefreshAuthenticationResponse | AxiosError> {
    const {
      data: { user }
    } = await this.client.get("/authenticate/refresh")

    const response: RefreshAuthenticationResponse = { user }

    return response
  }
}

export default new AuthenticationClient({
  baseURL: `${process.env.REACT_APP_SERVER_API_URL}/api`,
  headers: { Accept: "application/json" }
})
