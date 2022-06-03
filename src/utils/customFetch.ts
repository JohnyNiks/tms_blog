import jwtDecode, { JwtPayload } from 'jwt-decode'

interface IError {
  detail: string
}

const refreshToken = async (refresh: string) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
  const response = await fetch(
    'https://studapi.teachmeskills.by/auth/jwt/refresh/',
    {
      method: 'POST',
      body: JSON.stringify({ refresh }),
      headers,
    }
  )
  const data = await response.json()

  if (!response.ok) {
    return Promise.reject(data as IError)
  }

  localStorage.setItem('access', JSON.stringify(data.access))

  return JSON.stringify(data.access) as string
}

export const customFetch = async (url: string, config: any = {}) => {
  let access = localStorage.getItem('access')

  try {
    if (access) {
      const accessToken = jwtDecode<JwtPayload>(JSON.parse(access))

      const expirationMillisTime = accessToken?.exp ? accessToken.exp * 1000 : 0
      const isAccessExpired = expirationMillisTime
        ? expirationMillisTime - Date.now() < 0
        : false
      console.log(isAccessExpired, expirationMillisTime - Date.now())
      if (isAccessExpired) {
        try {
          const refresh = localStorage.getItem('refresh')

          if (refresh) {
            access = await refreshToken(JSON.parse(refresh))
          }
        } catch (error) {
          console.log('Error with getting token', error)
        }
      }

      config.headers = {
        Authorization: `Bearer ${JSON.parse(access)}`,
      }
      const response = await fetch(url, config)
      return await response.json()
    }
  } catch (error) {
    console.log(`Error with fetching resource ${url}`, error)
  }
}
