export const removeEmptyParams = params => {
  for (const key in params) {
    if (
      params[key] === '' ||
      (Array.isArray(params[key]) && params[key].length === 0)
    ) {
      delete params[key]
    }
  }
  return params
}
