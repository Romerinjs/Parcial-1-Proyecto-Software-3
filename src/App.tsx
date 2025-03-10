import { useState } from 'react';
import { Layout } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;