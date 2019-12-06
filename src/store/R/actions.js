/*
export function someAction (context) {
}
*/
import axios from 'axios'

async function forceRefresh (context) {
  for (let requestInfo of context.state.requestInfo.filter(i => i.expiryTime < Date.now())) {
    context.commit('setRequestInfo', { id: requestInfo.id, time: Date.now })
    await axios.get(requestInfo.url.replace(/{user}/g, context.state.user).replace(/{token}/g, context.state.cryptoken).replace(/{date}/g, context.state.date))
  }
}

export function rSetup (context, pageData = []) {
  setInterval(forceRefresh, 5000, context)
}

export function switchPage (context, pageData = []) {
  context.commit('setFullRequestInfo', pageData)
  forceRefresh(context)
}
