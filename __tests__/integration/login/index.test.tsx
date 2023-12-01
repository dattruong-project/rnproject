import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SCREENS } from '../../../src/shared/constants';
import { AppStatus } from '../../../src/shared/type/app';
import { useLoginContext } from '../../../src/providers/login';
import LoginScreen from '../../../src/screens/login/loginScreen';
import { Alert } from 'react-native';
import { useLanguageContext } from '../../../src/providers/language';

jest.mock('../../../src/providers/login');
jest.mock('../../../src/providers/language');

jest.mock('../../../src/navigations/navigationHelper', () => ({
  navigate: jest.fn(),
}));

jest.mock('react-native-vector-icons/FontAwesome', () => ({
  Icon: jest.fn(),
}));


jest.mock('../../../src/shared/localization', () => ({
  setLanguage: jest.fn(() => jest.fn()),
  localStrings: jest.fn()
}));

(useLanguageContext as jest.Mock).mockReturnValue({
  switchLanguage: jest.fn(),
  strings: jest.fn()
});

jest.mock('../../../src/services', () => ({
  LoginService: {
    loginBySSO: jest.fn(() => Promise.resolve(true)),
  },
}));

describe('LoginScreen', () => {
  
  it('should navigate to HOME screen on login success', async () => { 

    (useLoginContext as jest.Mock).mockReturnValue({
      pressLoginSSO: jest.fn(),
      state: {
        status: AppStatus.success,
      },
      pressLogoutSSO: jest.fn
    });

    jest.mock('../../../src/providers/language/useLocalizedStrings', () => ({
      useLocalizedStrings: jest.fn(() => jest.fn())
    }));

    const { getByTestId } = render(<LoginScreen></LoginScreen>);
    const ssoButton = getByTestId('sso');

    fireEvent.press(ssoButton);

    await waitFor(() => {
      expect(require('../../../src/navigations/navigationHelper').navigate).toHaveBeenCalledWith(SCREENS.HOME);
    });
  });

  it('should display an alert on login failure', async () => {
    jest.spyOn(Alert, 'alert');

    (useLoginContext as jest.Mock).mockReturnValue({
      pressLoginSSO: jest.fn(() => Promise.resolve(false)),
      state: {
        status: AppStatus.error,
      },
    });

    const { getByTestId } = render(<LoginScreen></LoginScreen>);
    const ssoButton = getByTestId('sso');

    fireEvent.press(ssoButton);


    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Failure');
    });
  });
});
