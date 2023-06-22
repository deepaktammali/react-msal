import { PublicClientApplication, Configuration } from "@azure/msal-browser"

const config: Configuration = {
    auth: {
        clientId: import.meta.env.VITE_MSAL_AUTH_CLIENT_ID,
        redirectUri: import.meta.env.VITE_MSAL_AUTH_REDIRECT_URI,
        navigateToLoginRequestUrl: false,
    }
}

const publicClientApplication = new PublicClientApplication(config)

export { publicClientApplication }