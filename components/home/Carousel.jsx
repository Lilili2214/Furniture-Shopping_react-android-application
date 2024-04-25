import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import useFetch from '../../hook/useFetch';

const Carousel = React.memo(() => {
  const {data, isLoading, error}= useFetch()
  console.log(data)
  
  
  const slides = data.slice(0, 4).map(item => item.imageUrl);
  console.log(slides)

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.gray}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 20, width: '95%', marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
});

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Carousel;
