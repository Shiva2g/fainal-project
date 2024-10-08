import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const config =  {
  providers : [
    GoogleProvider({
      clientId: process.env.FIRESTORE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.FIRESTORE_GOOGLE_CLIENT_SECRET,
    })
  ]
};

export default NextAuth(config);

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const config = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.FIRESTORE_GOOGLE_CLIENT_ID,
//       clientSecret: process.env.FIRESTORE_GOOGLE_CLIENT_SECRET,
//     }),
//     GitHubProvider({
//       clientId: process.env.FIRESTORE_GITHUB_CLIENT_ID,
//       clientSecret: process.env.FIRESTORE_GITHUB_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "Enter your username" },
//         password: { label: "Password", type: "password", placeholder: "Enter your password" },
//       },
//       async authorize(credentials) {
//         // Here, you check if the user exists
//         const user = await getUserFromDatabase(credentials.username, credentials.password);
        
//         if (user) {
//           // If user exists, return user data
//           return user;
//         } else {
//           // Otherwise, return null to indicate failed login
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/auth/signin', // Custom sign-in page
//     error: '/auth/error', // Custom error page
//     newUser: '/auth/signup' // Custom sign-up page for new users
//   }
// };

// export default NextAuth(config);

// // Function to fetch user from database
// async function getUserFromDatabase(username, password) {
//   // Logic to fetch the user from your database
//   // Assume you check the database and find the correct user
//   const user = { id: 1, name: 'John Doe', username: 'johndoe' };
//   if (username === "johndoe" && password === "secret") {
//     return user;
//   }
//   return null;
// }
