/** * Created by WebStorm. * User: chrischen * Date: 2020/7/13 * Time: 11:58 下午 */function EventBus() {    // 缓存的实例    let instance = this;        // 其它内容    this.events = {};        // 重写构造函数    EventBus = function () {        return instance;    };}let event1 = new EventBus();let event2 = new EventBus();console.log(event1 === event2);