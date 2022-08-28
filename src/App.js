import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/common/Header";
import QuerySearchPage from "./components/querySearchPage/QuerySearchPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="antialiased selection:bg-brand-200 text-body text-dark">
        <Header />
        <main>
          <QuerySearchPage />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
