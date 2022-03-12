import { Pressable } from 'react-native';
import Animated, { Layout, FadeIn, FadeOutUp,
  SlideInRight,
  SlideOutDown,
  SlideOutUp,
  FadeOut,
  SlideInUp,
  Transition

} from 'react-native-reanimated'; 

import {
  Container,
  TitleProduct,
  ImageProduct,
  InnerContainerProduct,
  TrashIcon
} from './styles';

interface ProductProps {
  id: number;
  title?: string;
  price?: number;
  image?: string;
  onDelete: (id: number) => void; 
}

export function ProductContainer({
  id,
  title="",
  price=0,
  image,
  onDelete
}: ProductProps) {

  const handleDeleteProduct = () => onDelete(id);


  return (
    <Container>
        <InnerContainerProduct>
          { image && <ImageProduct source={{ uri: image }} /> }
          <TitleProduct>{title}</TitleProduct>
        </InnerContainerProduct>
        <Pressable onPress={handleDeleteProduct}>
          <TrashIcon />
        </Pressable>
    </Container>
  )
}