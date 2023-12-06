import 'styled-components';
import theme from './Theme';

declare module 'styled-components'{ //acessa o modulo de styled-component e sobrescreve
    type ThemeType = typeof theme //cria um novo tipo, typeof copia o tipo de dado

    export interface DefaultTheme extends ThemeType{} //pega a interface, extende com o nosso próprio tipo que já tinha as caracteristicas
}