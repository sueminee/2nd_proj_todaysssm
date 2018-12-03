import React, { Component } from 'react';
import { StyleSheet, View, WebView, Text } from 'react-native';
import { colors, fonts } from '../../theme'
import API_KEY from '../../environment/API_KEY.json';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
        function initMap() {
          if (${this.props.index === 0}) {
            var map = new google.maps.Map(document.getElementById('map'), {
              disableDefaultUI: true,  //각종 라벨을 제거합니다
              center: JSON.parse('${this.props.coordinates}')[0],
              zoom: 15,
            });
            var pickupMarkerImage = {
              url: 'https://www.clker.com/cliparts/q/I/Q/u/Z/1/marker-th.png',
              scaledSize: new google.maps.Size(25,40),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(0,32)
            }
            new google.maps.Marker({
              position: JSON.parse('${this.props.coordinates}')[0],
              icon: pickupMarkerImage,
              map: map
            });
            return;
          }
          var map = new google.maps.Map(document.getElementById('map'), {
            disableDefaultUI: true,  //각종 라벨을 제거합니다
          });
          var bounds = new google.maps.LatLngBounds();  //구글맵의 경계를 지정합니다.
          var coordinates = JSON.parse('${this.props.coordinates}');
          var from = coordinates[${this.props.index - 1}];
          var to = coordinates[${this.props.index}];
          new google.maps.Marker({
            position: from,
            label: '출발',
            map: map
          });
          new google.maps.Marker({
            position: to,
            label: '도착',
            map: map
          });
          bounds.extend(from);
          bounds.extend(to);
          
          map.fitBounds(bounds);  //지도 안에 모든 마커가 들어오게 합니다
        }
      </script>
      <script src="https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap"
      async defer></script>
    </body>
    </html>`
    return (
      <View style={styles.container}>
        <WebView originWhitelist={['*']} source={{ html, baseUrl: '' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: colors.main.light,
  },
});
