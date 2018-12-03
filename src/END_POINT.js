/**
 * @Document
 *
 * -----
 * 회원/인증 관련 API
 *
 * 배송원 로그인 (변경예정)
 * POST /code_states/couriers/1/session
 *
 * 배송원 로그아웃 (변경예정)
 * DELETE /code_states/couriers/1/session
 *
 * 배송원 회원 가입
 * POST /code_states/couriers
 *
 * 배송원 회원 정보 조회 (변경 예정)
 * GET /code_states/couriers/1
 *
 * 배송원 회원 정보 변경 (변경예정)
 * PUT /code_states/couriers/1
 *
 * 배송원 회원탈퇴 (변경예정)
 * DELETE /code_states/couriers/1
 *
 *
 * -----
 * 미션/배송 관련 API
 *
 * 매칭되지 않은 전체 미션 조회
 * GET /code_states/missions
 *
 * 배송원 자신의 미션 리스트 조회 (변경예정)
 * GET /code_states/missions/couriers/7
 *
 * 배송원이 미션을 잡을 때
 * PUT /code_states/missions/7
 *
 * 배송원이 미션을 취소할 때
 * PUT /code_states/missions/7/cancel
 *
 * 한 미션에 포함된 배송 리스트 조회
 * GET /code_states/missions/7/deliveries
 *
 * 배송 하나가 완료되었을 때
 * PUT /code_states/deliveries/1
 *
 * 완료한 배송에 대해 완료상태를 취소할 때
 * PUT /code_states/deliveries/1/cancel
 */

 const END_POINT = {
  auth: {
    login: 'http://admin.onul-hoi.com/code_states/couriers/1/session',
    logout: 'http://admin.onul-hoi.com/code_states/couriers/1/session',
    signup: 'http://admin.onul-hoi.com/code_states/couriers', // post
    profile: 'http://admin.onul-hoi.com/code_states/couriers/1/session',
    editprofile: 'http://admin.onul-hoi.com/code_states/couriers/1/session',
    unregister: 'http://admin.onul-hoi.com/code_states/couriers/1/session',
  }, 
  delivery: {
    
  }
 }

 export { END_POINT }