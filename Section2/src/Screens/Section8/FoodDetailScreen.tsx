import React, {useState, useEffect} from 'react';
import {ScrollView, Image, Text} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const FoodDetailScreen = (props: any) => {
  const [restaurantInfo, setRestaurantInfo] = useState<{
    id: string;
    name: string;
    photos: string[];
  } | null>(null);
  const {route} = props;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      try {
        const {data} = await axios.get(
          `https://api.yelp.com/v3/businesses/${route.params?.id}`,
          {
            headers: {
              Authorization:
                'Bearer YoHfsH88McxwulYCXf0YwmAUCswNe-4TO0pHYG2uMrjUvYEJt8TOVgfNwAN9HJPfNJohkl5h9WSBGTaL7FJ-JvYLVMtk-U1St3H8gE_yzyECE5bG3ph5mGvVsLWQX3Yx',
            },
          },
        );
        setRestaurantInfo(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchRestaurantInfo();
  }, [route.params?.id]);

  return (
    <ScrollView>
      <Text> {restaurantInfo?.name} </Text>
      {restaurantInfo?.photos.map(photo => (
        <Image
          source={{uri: photo}}
          style={{width: 200, height: 200}}
          key={photo}
        />
      ))}
    </ScrollView>
  );
};

export default FoodDetailScreen;
