"use client"

import { useState } from "react"
import axios from "axios"

export interface IGravityFormState {
  loading: boolean
  error: undefined | string
  success: boolean
}

export type IUseGravityFormReturn = [IGravityFormState, (v: unknown) => void]

export interface IUseGravityFormParams {
  id: string | number
}

// Hook
function useGravityForm(params: IUseGravityFormParams): IUseGravityFormReturn {
  const { id } = params
  const [state, setState] = useState({
    error: undefined,
    loading: false,
    success: false,
  })

  /**
   * Handle Submitting
   *
   * @param fields
   */
  const handleSubmit = async (fields: unknown) => {
    setState({
      loading: true,
      error: undefined,
      success: false,
    })

    try {
      const res = await axios.post(`/api/form/${id}`, fields)
      const { status, data } = res

      // Redirect
      if (status !== 200) {
        setState({
          loading: false,
          error: data.message ?? "Error Has Occurred",
          success: false,
        })
      }

      // Redirect To New Page
      setState({
        loading: false,
        error: undefined,
        success: true,
      })
    } catch (e: any) {
      console.error({ e })
      setState({
        loading: false,
        error: e.message ?? "Error Has Occurred",
        success: false,
      })
    }
  }

  return [state, handleSubmit]
}

export default useGravityForm
