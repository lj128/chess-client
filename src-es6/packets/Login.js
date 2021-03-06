/**
 * Created by zhuangjianjia on 17-6-7.
 */
import cc from '@cc'
import {LOGIN} from 'packets/sender'
import Packet from 'datastructs/Packet'

export default (socket, loginKey) => {
  let packet = new Packet(LOGIN)

  packet.writeString(loginKey)

  socket.send(packet.toArrayBuffer())
  cc.log('发送登录封包', packet.toHexString())
}
