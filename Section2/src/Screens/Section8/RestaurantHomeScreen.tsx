import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';

const RestaurantItem = ({
  data,
  navigation,
}: {
  data: RestaurantType;
  navigation: NavigationProp<any, any>;
}) => {
  const {image_url, name, rating, review_count, id} = data;

  return (
    <Pressable
      onPress={() => navigation.navigate('FoodDetailScreen', {id: id})}>
      <View style={{marginHorizontal: 10}}>
        <Image
          source={{uri: image_url}}
          style={{
            width: 250,
            height: 120,
            borderRadius: 4,
            marginBottom: 5,
          }}
        />
        <Text style={{fontWeight: 'bold', color: 'black'}}>{name}</Text>
        <Text>
          {rating} Stars, {review_count} Reviews
        </Text>
      </View>
    </Pressable>
  );
};

interface RestaurantType {
  id: string;
  name: string;
  price: string;
  image_url: string;
  rating: number;
  review_count: number;
}

const RestaurantHomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const restaurantsLocation = 'New York City';

  useEffect(() => {
    fetchRestaurants(null);
  }, []);

  const fetchRestaurants = async (term: string | null) => {
    try {
      const {data} = await axios.get(
        'https://api.yelp.com/v3/businesses/search',
        {
          params: {
            limit: 20,
            location: restaurantsLocation,
            term: term,
          },
          headers: {
            Authorization:
              'Bearer YoHfsH88McxwulYCXf0YwmAUCswNe-4TO0pHYG2uMrjUvYEJt8TOVgfNwAN9HJPfNJohkl5h9WSBGTaL7FJ-JvYLVMtk-U1St3H8gE_yzyECE5bG3ph5mGvVsLWQX3Yx',
          },
        },
      );

      setRestaurants(data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  const filterRestaurantsByPrice = (price: string) => {
    return restaurants.filter(restaurant => restaurant.price === price);
  };

  const renderRestaurantsBasedOnPrice = (price: string) => {
    let title = '';
    switch (price) {
      case '$':
        title = 'Cost Effective';
        break;
      case '$$':
        title = 'Bit Pricier';
        break;
      case '$$$':
        title = 'Big Spender';
        break;
    }

    const filteredRestaurants = filterRestaurantsByPrice(price);

    return (
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft: 10,
            color: 'black',
            marginBottom: 5,
          }}>
          {title}
        </Text>
        {filteredRestaurants.length > 0 ? (
          <FlatList
            horizontal={true}
            data={filterRestaurantsByPrice(price)}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <RestaurantItem data={item} navigation={navigation} />
            )}
          />
        ) : (
          <Text style={{alignSelf: 'center', fontSize: 20, color: 'black'}}>
            {' '}
            No Items{' '}
          </Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView>
      <TextInput
        style={{
          margin: 10,
          padding: 10,
          height: 40,
          backgroundColor: '#e3e1e1',
        }}
        autoCorrect={false}
        placeholder="Search for your favourite restaurant"
        value={searchTerm}
        onChangeText={new_value => setSearchTerm(new_value)}
        onEndEditing={event => fetchRestaurants(event.nativeEvent.text)}
      />
      {renderRestaurantsBasedOnPrice('$')}
      {renderRestaurantsBasedOnPrice('$$')}
      {renderRestaurantsBasedOnPrice('$$$')}
    </ScrollView>
  );
};

export default RestaurantHomeScreen;
