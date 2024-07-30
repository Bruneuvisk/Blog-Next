/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};
