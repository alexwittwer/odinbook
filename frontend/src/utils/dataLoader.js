import { useState, useEffect } from 'react'

export default function (url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { loading, data, error }
}