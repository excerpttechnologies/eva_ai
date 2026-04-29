import { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import api from '../api/client'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useApi<T>(url: string) {
  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })

  const fetch = useCallback(async (params?: object) => {
    setState(s => ({ ...s, loading: true, error: null }))
    try {
      const { data } = await api.get<T>(url, { params })
      setState({ data, loading: false, error: null })
      return data
    } catch (err) {
      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'
      setState(s => ({ ...s, loading: false, error: msg }))
      toast.error(msg)
    }
  }, [url])

  return { ...state, fetch }
}