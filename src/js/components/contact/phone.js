import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import Inputmask from 'inputmask';

export const usePhone = () => {
    const input = document.querySelector('#phone');

    // Инициализация intlTelInput
    const iti = intlTelInput(input, {
        initialCountry: 'auto',
        geoIpLookup: (callback) => {
            fetch('https://ipapi.co/json')
                .then((res) => res.json())
                .then((data) => callback(data.country_code))
                .catch(() => callback('us'));
        },
        utilsScript:
            'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });

    // Событие countrychange, чтобы изменять маску в зависимости от страны
    input.addEventListener('countrychange', function () {
        const selectedCountryData = iti.getSelectedCountryData();
        const dialCode = selectedCountryData.dialCode ? '+' + selectedCountryData.dialCode : '';
        
        // Устанавливаем маску для номера телефона
        const inputMask = new Inputmask(dialCode + " 999 999 9999");  // Маска по умолчанию с форматированием
        inputMask.mask(input);
    });
};
