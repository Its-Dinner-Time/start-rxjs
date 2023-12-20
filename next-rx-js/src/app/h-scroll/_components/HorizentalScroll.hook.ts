/**
 * 가로 스크롤 hook
 */
export function useHScrollHook() {
  /**
   * scroll 위치를 %로 계산
   */
  const getScrollWidth = () => {
    const doc = document.documentElement;
    // https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
    const winScroll = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;

    return (winScroll / height) * 100;
  };

  /**
   * 주어진 요소의 넓이를 계산된 사이즈로 정의
   */
  const setScrollWidth = (scrollBar: HTMLElement | null) => {
    if (scrollBar) {
      scrollBar.style.width = `${getScrollWidth()}%`;
    }
  };

  return {
    getScrollWidth,
    setScrollWidth,
  };
}
