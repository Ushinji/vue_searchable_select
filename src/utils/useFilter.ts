import { ref, computed } from 'vue';

const filter = <T>(
  items: T[],
  filterText: string,
  match: (item: T, filterWord: string) => boolean
): T[] => {
  const filterWords = filterText.trim().split(/\s+/);
  if (filterWords.length === 0) return items;

  return items.filter((item) => {
    return filterWords.every((filterWord) => {
      return match(item, filterWord);
    });
  });
};

const useFilter = <T>(
  items: T[],
  match: (item: T, filterWord: string) => boolean
) => {
  const filterText = ref('');
  const filteredItems = computed(() => {
    return filter(items, filterText.value, match);
  });
  return {
    filterText,
    filteredItems,
  };
};

export default useFilter;
