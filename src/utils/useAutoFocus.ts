import { Ref, onMounted } from 'vue';

const useAutoFocus = (refElement: Ref<HTMLElement | undefined>) => {
  onMounted(() => {
    const element = refElement.value;
    if (!element) return;
    element.focus();
  });
};

export default useAutoFocus;
