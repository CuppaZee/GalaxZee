export default {
  //
  date: '2019-12-05',
  user: localStorage.selectedUserID || null,
  cryptoken: JSON.parse(localStorage.cryptokens || '{}')[localStorage.selectedUserID],
  allCryptokens: JSON.parse(localStorage.cryptokens || '{}'),
  requestInfo: []
}
