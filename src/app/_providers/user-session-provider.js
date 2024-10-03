"use client"

import { SessionProvider } from 'next-auth/react';

const UserSessionProvider = ({children}) => <SessionProvider>{children}</SessionProvider>

export default UserSessionProvider;