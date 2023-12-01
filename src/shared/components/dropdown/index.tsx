import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useLanguageContext } from '../../../providers/language';
import { AppLanguage } from '../../localization';

const LanguageDropdown = () => {
    const {switchLanguage } = useLanguageContext();

    const languageOptions = [
      { label: "English", value: AppLanguage.en},
      { label: "Viet Nam", value: AppLanguage.vi},
    ];
    const handleLanguageChange = (value: AppLanguage) => {
      if (value) {
        switchLanguage(value);
      }
    };

    return <>
      <RNPickerSelect onValueChange={handleLanguageChange}
            items={languageOptions}>
      </RNPickerSelect>
    </>
  };

export default LanguageDropdown;
