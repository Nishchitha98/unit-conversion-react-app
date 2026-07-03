document.addEventListener('DOMContentLoaded', () => {
    // Helper to format float output cleanly
    const formatValue = (val) => {
        if (isNaN(val) || val === '') return '';
        // Round to at most 4 decimal places, strip trailing zeros
        return parseFloat(Number(val).toFixed(4));
    };

    const triggerHighlight = (element) => {
        if (!element) return;
        element.classList.remove('highlight-pulse');
        void element.offsetWidth; // Trigger DOM reflow to restart animation
        element.classList.add('highlight-pulse');
    };

    // --- Temperature Conversion (Celsius <-> Fahrenheit) ---
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const tempBtn = document.getElementById('temp-convert-btn');

    const convertCelsiusToFahrenheit = () => {
        const val = celsiusInput.value;
        if (val === '') {
            fahrenheitInput.value = '';
            return;
        }
        const c = parseFloat(val);
        const f = c * 1.8 + 32;
        fahrenheitInput.value = formatValue(f);
        triggerHighlight(fahrenheitInput);
    };

    const convertFahrenheitToCelsius = () => {
        const val = fahrenheitInput.value;
        if (val === '') {
            celsiusInput.value = '';
            return;
        }
        const f = parseFloat(val);
        const c = (f - 32) / 1.8;
        celsiusInput.value = formatValue(c);
        triggerHighlight(celsiusInput);
    };

    celsiusInput.addEventListener('input', () => {
        const val = celsiusInput.value;
        if (val === '') {
            fahrenheitInput.value = '';
        } else {
            fahrenheitInput.value = formatValue(parseFloat(val) * 1.8 + 32);
        }
    });

    fahrenheitInput.addEventListener('input', () => {
        const val = fahrenheitInput.value;
        if (val === '') {
            celsiusInput.value = '';
        } else {
            celsiusInput.value = formatValue((parseFloat(val) - 32) / 1.8);
        }
    });

    tempBtn.addEventListener('click', () => {
        if (celsiusInput.value !== '') {
            convertCelsiusToFahrenheit();
        } else if (fahrenheitInput.value !== '') {
            convertFahrenheitToCelsius();
        } else {
            celsiusInput.value = '0';
            convertCelsiusToFahrenheit();
        }
    });


    // --- Weight Conversion (Kilograms <-> Pounds) ---
    const kilogramsInput = document.getElementById('kilograms');
    const poundsInput = document.getElementById('pounds');
    const weightBtn = document.getElementById('weight-convert-btn');

    const kgToLb = 2.20462262;

    const convertKgToLbs = () => {
        const val = kilogramsInput.value;
        if (val === '') {
            poundsInput.value = '';
            return;
        }
        const kg = parseFloat(val);
        const lbs = kg * kgToLb;
        poundsInput.value = formatValue(lbs);
        triggerHighlight(poundsInput);
    };

    const convertLbsToKg = () => {
        const val = poundsInput.value;
        if (val === '') {
            kilogramsInput.value = '';
            return;
        }
        const lbs = parseFloat(val);
        const kg = lbs / kgToLb;
        kilogramsInput.value = formatValue(kg);
        triggerHighlight(kilogramsInput);
    };

    kilogramsInput.addEventListener('input', () => {
        const val = kilogramsInput.value;
        if (val === '') {
            poundsInput.value = '';
        } else {
            poundsInput.value = formatValue(parseFloat(val) * kgToLb);
        }
    });

    poundsInput.addEventListener('input', () => {
        const val = poundsInput.value;
        if (val === '') {
            kilogramsInput.value = '';
        } else {
            kilogramsInput.value = formatValue(parseFloat(val) / kgToLb);
        }
    });

    weightBtn.addEventListener('click', () => {
        if (kilogramsInput.value !== '') {
            convertKgToLbs();
        } else if (poundsInput.value !== '') {
            convertLbsToKg();
        } else {
            kilogramsInput.value = '1';
            convertKgToLbs();
        }
    });


    // --- Distance Conversion (Kilometers <-> Miles) ---
    const kilometersInput = document.getElementById('kilometers');
    const milesInput = document.getElementById('miles');
    const distanceBtn = document.getElementById('distance-convert-btn');

    const kmToMi = 0.62137119;

    const convertKmToMiles = () => {
        const val = kilometersInput.value;
        if (val === '') {
            milesInput.value = '';
            return;
        }
        const km = parseFloat(val);
        const mi = km * kmToMi;
        milesInput.value = formatValue(mi);
        triggerHighlight(milesInput);
    };

    const convertMilesToKm = () => {
        const val = milesInput.value;
        if (val === '') {
            kilometersInput.value = '';
            return;
        }
        const mi = parseFloat(val);
        const km = mi / kmToMi;
        kilometersInput.value = formatValue(km);
        triggerHighlight(kilometersInput);
    };

    kilometersInput.addEventListener('input', () => {
        const val = kilometersInput.value;
        if (val === '') {
            milesInput.value = '';
        } else {
            milesInput.value = formatValue(parseFloat(val) * kmToMi);
        }
    });

    milesInput.addEventListener('input', () => {
        const val = milesInput.value;
        if (val === '') {
            kilometersInput.value = '';
        } else {
            kilometersInput.value = formatValue(parseFloat(val) / kmToMi);
        }
    });

    distanceBtn.addEventListener('click', () => {
        if (kilometersInput.value !== '') {
            convertKmToMiles();
        } else if (milesInput.value !== '') {
            convertMilesToKm();
        } else {
            kilometersInput.value = '1';
            convertKmToMiles();
        }
    });
});
