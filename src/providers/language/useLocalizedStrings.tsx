import { useLanguageContext } from ".";

const useLocalizedStrings = () => {
  const { strings } = useLanguageContext();
  return strings;
};

export default useLocalizedStrings;
