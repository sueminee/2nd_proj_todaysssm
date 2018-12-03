import mockDeliveries from '../environment/mockDeliveries.json';

export async function searchCoordinates(address) {
  try {
    const response = await fetch('https://maps.google.com/maps/api/geocode/json?address=' + address);
    const responseJson = await response.json();
    return responseJson.results.length ? responseJson.results[0].geometry.location : null;
  } catch (error) {
    console.error(error)
  }
};

export async function getDeliveries() {
  //지금은 mockDeliveries.json에 넣어놓은 deliveries array 하나를 가져옵니다.
  //추후에 this.props.deliveriesId를 이용해 적절한 deliveries array를 가져오도록 합니다.
  return mockDeliveries;
}

export async function getAddresses(deliveries) {
  return deliveries.map(delivery => delivery.address)
}

export async function getCoordinates(addresses) {
  //픽업 장소의 좌표를 받아옵니다
  const pickupPlaceCoordinates = {
    "lat": 37.48201359999999,
    "lng": 127.0133651
  } //나중에 픽업 플레이스가 여러 군데 생기면 DB에서 적절히 받아올 수 있도록 해주세요.

  //배송 주소로부터 배송 좌표를 받아옵니다
  const coordinates = await Promise.all(addresses.map(async address => {
    const coordinates = await searchCoordinates(address)
    return coordinates;
  }));

  //픽업 좌표와 배송 좌표를 합합니다
  coordinates.unshift(pickupPlaceCoordinates);

  //스트링화하여 스테이트에 입력합니다
  const stringifiedCoordinates = JSON.stringify(coordinates);
  return stringifiedCoordinates
}

export async function getPickupAndDeliveries(deliveries, pickup_place) {
  const pickupAndDeliveries = [...deliveries];
  pickupAndDeliveries.unshift({
    name: '오늘회',
    phone: "1661-1319", // 나중에 픽업 플레이스가 여러 군데 생기면 적절한 번호를 넣어주세요
    address: '오늘회 ' + pickup_place + "에서 화물을 받아 주세요",
  });
  return pickupAndDeliveries
}
