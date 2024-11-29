import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3, // count of attepmtions to get data ;  default 3
//       cacheTime: 300_000, //every time after specified period, refresh data ;  deafult 300_00 (5min)
//       staleTime: 10 * 1000, // determinates how long after data has been feteched, it becomes "old" ; deafult 10sec (10 * 1000ms)
//       refetchOnWindowFocus: false, //default true, refetch on window focus
//       refetchOnReconnect: false, //default true, refetch on network reconnect
//       refetchOnMount: false, //default true, refetch when element has changed
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
