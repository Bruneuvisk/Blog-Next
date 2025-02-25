/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styled';

export type PostContainerProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
