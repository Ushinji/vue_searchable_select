import { onMounted, onUnmounted, Ref } from 'vue';

const useClickAway = (
  refElemet: Ref<HTMLElement | undefined>,
  onClickAway: () => void
) => {
  const handler = (event: MouseEvent) => {
    const current = refElemet.value;
    if ((event.target as HTMLElement) && current !== undefined) {
      const element: HTMLElement = current;
      if (!element.contains(event.target as HTMLElement)) {
        onClickAway();
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handler);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });
};

export default useClickAway;
