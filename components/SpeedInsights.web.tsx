import { usePathname } from 'expo-router';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { useEffect, useRef } from 'react';

export default function WebSpeedInsights() {
  const pathname = usePathname();
  const speedInsightsRef = useRef<ReturnType<typeof injectSpeedInsights>>(null);

  useEffect(() => {
    if (!speedInsightsRef.current) {
      speedInsightsRef.current = injectSpeedInsights({
        framework: 'react',
        route: pathname,
      });
      return;
    }

    speedInsightsRef.current.setRoute(pathname);
  }, [pathname]);

  return null;
}
