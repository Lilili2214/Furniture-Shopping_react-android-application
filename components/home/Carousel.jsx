import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://media.istockphoto.com/id/1413428981/vi/anh/n%E1%BB%99i-th%E1%BA%A5t-ph%C3%B2ng-kh%C3%A1ch-hi%E1%BB%87n-%C4%91%E1%BA%A1i-k%E1%BA%BFt-xu%E1%BA%A5t-3d.jpg?s=1024x1024&w=is&k=20&c=pUu5jnZPpGwA3rI_Zny2d_zI13D9JFPMhKcRqjP3o7I=",
        "https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203_640.jpg",
        "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
    ]
    return (
    <View style ={styles.carouselContainer}>
      <SliderBox images={slides}
      dotColor= {COLORS.gray}
      inactiveDotColor = {COLORS.secondary}
      ImageComponentStyle = {{borderRadius: 20, width: "95%", marginTop:15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel
const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})