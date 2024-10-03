import GoogleProvider from "next-auth/providers/google"

export const config =  {
  providers : [
    GoogleProvider({
      clientId: process.env.FIRESTORE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.FIRESTORE_GOOGLE_CLIENT_SECRET
    })
  ]
}