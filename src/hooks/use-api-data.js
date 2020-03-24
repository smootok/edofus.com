import { useState, useEffect } from 'react'
import axios from 'axios'

const useApiData = (url, initParams = {}) => {
  const [data, setData] = useState([])
  const [params, setParams] = useState(initParams)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const isNew = params.isNew
        delete params.isNew
        const result = await axios(url, { params })
        if (isNew) {
          setData(result.data.data)
        } else {
          setData(data => [...data, ...result.data.data])
        }
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
