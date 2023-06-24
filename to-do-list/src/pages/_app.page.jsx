import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});


function App({Component, pageProps}){
    return <QueryClientProvider client={queryClient}>

            <Component {...pageProps} />

    </QueryClientProvider>
}
export default App;