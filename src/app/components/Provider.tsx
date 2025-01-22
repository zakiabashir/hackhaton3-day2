"use client";
// components/Providers.tsx

import { Provider } from 'react-redux';
import store from '@/app/redux/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
