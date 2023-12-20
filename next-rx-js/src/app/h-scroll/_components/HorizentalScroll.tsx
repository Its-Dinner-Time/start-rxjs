'use client';

import { useEffect, useRef } from 'react';
import { fromEvent, tap, throttleTime } from 'rxjs';
import { useHScrollHook } from './HorizentalScroll.hook';

export function HorizentalScroll() {
  const { setScrollWidth } = useHScrollHook();
  const hScrollBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('scrollbar-none');
    setScrollWidth(hScrollBar.current);

    fromEvent(document, 'scroll') // scroll 이벤트 구독
      .pipe(
        throttleTime(20), // 0.02초 만큼 throttle
        tap(() => setScrollWidth(hScrollBar.current)) // scroll 사이즈 세팅
      )
      .subscribe();

    return () => {
      document.body.classList.remove('scrollbar-none');
    };
  }, []);

  return <div ref={hScrollBar} className="fixed h-2 top-0 left-0 right-0 bg-blue-700 w-0 transition-all duration-200 ease-linear"></div>;
}
