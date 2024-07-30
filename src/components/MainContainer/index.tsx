/* eslint-disable react/react-in-jsx-scope */
import * as Styled from './styled';

export type MainContainerPorps = {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerPorps) => {
  return <Styled.Container> {children} </Styled.Container>
}
