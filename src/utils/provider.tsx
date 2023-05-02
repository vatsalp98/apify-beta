"use client"

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ProviderParams {
    children: React.ReactNode;
}

function Providers({children}: ProviderParams) {
    const [client] = useState(new QueryClient({defaultOptions: {queries: {staleTime: 5000}}}));

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default Providers;