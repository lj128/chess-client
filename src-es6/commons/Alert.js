/**
 * Created by zhuangjianjia on 17-6-5.
 */
import cc, {LabelTTF} from '@cc'
import Prompt, {TYPE_SM} from 'commons/Prompt'
import {offsetCenter} from 'utils/core'

const Class = Prompt.extend({
  ctor() {
    this._super(TYPE_SM)

    this.message = new LabelTTF('', '', 40)
    this.message.setColor(cc.color('#000000'))
    offsetCenter(this.message, 0, -20)
    this.addChild(this.message)
  },
  show(title) {
    this.message.setString(title)
    let {width, height} = this.message.getContentSize()
    if (width <= 450) {
      this.message.setDimensions(cc.size(0, 0))
    } else {
      this.message.setDimensions(cc.size(450, Math.ceil(width / 450) * height))
    }
    this._super()
  },
  async hide() {
    await this._super()
  },
})

export default Class