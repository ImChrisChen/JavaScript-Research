/**
 * Created by WebStorm.
 * User: chrischen
 * Date: 2021/2/18
 * Time: 6:30 下午
 */


// 创建随机数组
export function createRandomArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        let random = window.Math.floor(window.Math.random() * length);
        arr.push(random);
    }
    return notRepeat(arr);
}

// 数组去重
export function notRepeat(arr) {
    let temp = [];
    for (const item of arr) {
        if (!temp.includes(item)) {
            temp.push(item);
        }
    }
    return temp;
}

