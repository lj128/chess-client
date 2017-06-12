/**
 * Created by zhuangjianjia on 17-6-1.
 */
import {mapButtons} from 'utils/resources'

export const ui = {
  prompt_sm: 'res/ui/bg/alert.png',
  prompt_md: 'res/ui/bg/alert_md.png',
  prompt_lg: 'res/ui/bg/alert_lg.png',
  prompt_close: 'res/ui/button/close.png',
  prompt_close_on: 'res/ui/button/close_on.png',
  loading_icon: 'res/ui/icon/load-g.png',

  cards_plist: 'res/game/cards.plist',
  cards_bg: 'res/game/cards.png',

  ...mapButtons('game/common/buttons/ready'),
  ...mapButtons('game/common/buttons/unready'),
  ...mapButtons('ui/button/checkbox1', false),
  ...mapButtons('ui/button/checkbox2', false),

  progress: 'res/ui/bg/progress.png',
  progress_bg: 'res/ui/bg/progress_bg.png',
  sieve: 'res/ui/button/sieve.png',

  message_bar: 'res/ui/bg/message_bar.png',
  message_icon: 'res/ui/icon/message.png',
}

export const audio = {
  bg: 'res/audio/background.mp3',
  click: 'res/audio/click.mp3',
}

export const cards = {
  undefined: '0x00.png',
  0: '0x00.png',
  null: '0x00.png',
  beimian: '0x00.png',
  heitao2: '0x01.png',
  heitao3: '0x02.png',
  heitao4: '0x03.png',
  heitao5: '0x04.png',
  heitao6: '0x05.png',
  heitao7: '0x06.png',
  heitao8: '0x07.png',
  heitao9: '0x08.png',
  heitao10: '0x09.png',
  heitao11: '0x0A.png',
  heitao12: '0x0B.png',
  heitao13: '0x0C.png',
  heitao1: '0x0D.png',
  hongxin2: '0x11.png',
  hongxin3: '0x12.png',
  hongxin4: '0x13.png',
  hongxin5: '0x14.png',
  hongxin6: '0x15.png',
  hongxin7: '0x16.png',
  hongxin8: '0x17.png',
  hongxin9: '0x18.png',
  hongxin10: '0x19.png',
  hongxin11: '0x1A.png',
  hongxin12: '0x1B.png',
  hongxin13: '0x1C.png',
  hongxin1: '0x1D.png',
  meihua2: '0x21.png',
  meihua3: '0x22.png',
  meihua4: '0x23.png',
  meihua5: '0x24.png',
  meihua6: '0x25.png',
  meihua7: '0x26.png',
  meihua8: '0x27.png',
  meihua9: '0x28.png',
  meihua10: '0x29.png',
  meihua11: '0x2A.png',
  meihua12: '0x2B.png',
  meihua13: '0x2C.png',
  meihua1: '0x2D.png',
  fangkuai2: '0x31.png',
  fangkuai3: '0x32.png',
  fangkuai4: '0x33.png',
  fangkuai5: '0x34.png',
  fangkuai6: '0x35.png',
  fangkuai7: '0x36.png',
  fangkuai8: '0x37.png',
  fangkuai9: '0x38.png',
  fangkuai10: '0x39.png',
  fangkuai11: '0x3A.png',
  fangkuai12: '0x3B.png',
  fangkuai13: '0x3C.png',
  fangkuai1: '0x3D.png',
  heigui: '0x4E.png',
  honggui: '0x4F.png',
}