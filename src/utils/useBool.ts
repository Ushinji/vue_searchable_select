import { ref } from 'vue';

const useBool = (defaultValue: boolean = false) => {
  const active = ref(defaultValue);
  const activate = () => {
    active.value = true;
  };
  const inactivate = () => {
    active.value = false;
  };
  return { active, activate, inactivate };
};

export default useBool;
