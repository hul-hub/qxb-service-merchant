import Cookies from 'js-cookie'

const TokenKey = 'token'
const Nickname = 'nickname'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}


export function getNickname() {
    return Cookies.get(Nickname)
}

export function setNickname(nickname) {
    return Cookies.set(Nickname, nickname)
}

export function removeNickname() {
    return Cookies.remove(Nickname)
}
