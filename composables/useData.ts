export const getEnv = () => {
    const config = useRuntimeConfig().contenfulApiToken
    return config
}