import styled, { css } from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export type ButtonTypeStyleProps = {
  showBackButton?: boolean;
}

export const Container = styled.View<ButtonTypeStyleProps>`
  width: 100%;

  height: 55px;

  flex-direction: row;
  align-items: center;

  ${({ showBackButton }) => showBackButton ? css`
    justify-content: space-between;
  ` : css `
    justify-content: center;
  `};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 46px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``;