import {Themes} from './enums/themes.enum';
import {Brand1Theme} from '../../config/themes/brand1.theme';
import {Brand2Theme} from '../../config/themes/brand2.theme';

export const ThemeSelector = (theme: string) => {
    switch (theme) {
        case Themes.Brand2:
            return Brand2Theme;
        case Themes.Brand1:
        default:
            return Brand1Theme;
    }
};