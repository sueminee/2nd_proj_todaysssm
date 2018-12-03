import React, { Component } from 'react';
import { StyleSheet, View, WebView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../theme'
import API_KEY from '../../environment/API_KEY.json';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    if (this.props.coordinates.length === 0) {
      return (
        <ActivityIndicator style={styles.container} />
      )
    }

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="initial-scale=1.0">
      <meta charset="utf-8">
      <style>
        #map {
          height: 100%;
        }
        /* Optional: Makes the sample page fill the window. */
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var coordinates = JSON.parse('${this.props.coordinates}');  //배송지의 좌표값을 받아옵니다
        function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            disableDefaultUI: true  //각종 라벨을 제거합니다
          });
          var bounds = new google.maps.LatLngBounds();  //구글맵의 경계를 지정합니다.

          var pickupPlace = coordinates[0]; //픽업장소의 좌표를 받습니다
          var pickupMarkerImage = {
            url: 'https://www.clker.com/cliparts/q/I/Q/u/Z/1/marker-th.png',
            scaledSize: new google.maps.Size(25,40),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,32)
          }
          new google.maps.Marker({  //픽업 장소의 마커를 찍습니다
            position: pickupPlace,
            icon: pickupMarkerImage,
            map: map
          });
          bounds.extend(pickupPlace); //지도에 픽업 장소가 들어가게 합니다

          coordinates.slice(1).map((marker, index) => {
            if (marker === null) { return }
            bounds.extend(marker);  //지도에 배송지가 들어오게 합니다
            return new google.maps.Marker({ //배송지의 마커를 찍습니다
              position: marker,
              label: '' + (index + 1),
              map: map
            })
          })
          
          map.fitBounds(bounds);  //지도 안에 모든 마커가 들어오게 합니다
        }
      </script>
      <script src="https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap"
      async defer></script>
    </body>
    </html>`
    return (
      <WebView style={styles.container} originWhitelist={['*']} source={{ html }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.light,
    position: 'relative',
    zIndex: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
