import { useState, useEffect } from 'react'
import axios from 'axios'

const useApiData = url => {
  const [data, setData] = useState([])
  const [params, setParams] = useState({ page: 1 })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url, { params })
        setData(data => [...data, ...result.data.data])
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [params, url])
  return [{ data, isLoading, isError }, setParams]
}

export default useApiData
