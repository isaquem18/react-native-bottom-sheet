import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import api from '../../api';
import { ProductContainer } from '../../components/ProductContainer';
import {
  Container,
  ProductList
} from './styles';
import { ActivityIndicator, Alert, Button, LayoutAnimation, RefreshControl, Text } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  SlideInRight,
  FadeInRight,
  FadeOutLeft,
  ZoomIn
} from 'react-native-reanimated';


const newProduct =   {
  id: uuid.v4(),
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120
  }
};


interface ProductProps {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  }
}

export function Tela4() {
  const [ productsList, setProductsList ] = useState<ProductProps[]>([] as ProductProps[]); 
  const [ isReloading, setIsReloading ] = useState(true);
  const count = useRef(100);
  let mounted = true;

  useFocusEffect(useCallback(() => {
  
    LoadData();

    return () => { mounted = false };
  }, []));

  useEffect(() => {
    setIsReloading(false);
  },[isReloading])

  async function LoadData() {

    try {
      const response = await api({
        method: 'get',
        url: '/products'
      });
      
      if (mounted) {
        setProductsList(response?.data);
      }
    } catch(e) {
      
    }
  }

  async function handleDeleteProduct(id: number) {
    LayoutAnimation.easeInEaseOut(); 
    try {      
      if (mounted) {
        const filteredList = productsList.filter(item => id !== item?.id);
        setProductsList(filteredList);
      }
    } catch(e) {
      Alert.alert('nao foi possivel deletar', JSON.stringify(e));
    }
  }
 

  return (
    <Container>
        <Button 
          title="add product"
          onPress={() => {
            Layout.springify();
            setProductsList((oldValue) => [{
              id: ++count.current,
              title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              price: 109.95,
              description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
              category: "men's clothing",
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              rating: {
                rate: 3.9,
                count: 120
              }
            }, ...oldValue])
          }}
        />
          <ProductList
            data={productsList}
            numColumns={2}
            horizontal={false}
            keyExtractor={(item: ProductProps) => item.id.toString()}
            renderItem={({ item, index }) => (

                <ProductContainer 
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  onDelete={handleDeleteProduct}
                />

            )}
            refreshControl={
            <RefreshControl 
              refreshing={isReloading}
              onRefresh={() => LoadData()}
              title="Pull to refresh"
              tintColor="#fff"
              titleColor="#fff"
            />}
          />
    </Container>
  )
}








