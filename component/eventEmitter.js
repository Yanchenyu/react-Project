import events from 'events'

const eventEmitter = new events.EventEmitter();
// 引入nodejs的events模块并且单独初始化EventEmitter实例

export default eventEmitter;