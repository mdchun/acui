import './Time.scss';
/**
 * Time Component for AMUI
 * @param stamp {Number} time
 * @param past {Boolean}  是否显示‘x天前’格式
 * @param maxPastDays {Number} past为true时,此项才有效
 * @param format {String}
 * @author mdc
 * 
 */
var classnames = require('classnames');
import React from 'react';
// 定义时间常量
const S = 1000;
const M = S * 60;
const H = M * 60;
const D = H * 24;

let arr = new Map([
    ['分钟', M],
    ['小时', H],
    ['天', D]
]);
/*低版本安卓需要用下面方法*/
// import _ from 'lodash';
// let arr = _.map([
//     ['分钟', M],
//     ['小时', H],
//     ['天', D]
// ]);

// 年月日分隔符
let [yc, mc, dc] = ['-', '-', '-'];

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            past: props.past,
            maxPastDays: props.maxPastDays,
            format: props.format,
            pastTime: this._format(true),
            formatTime: this._format(false)
        }
    }

    _format(isPast) {
        let t = this;
        let displayTime;
        let format = t.props.format.toUpperCase();

        if (isPast) {
            /**
             * 1天前;1小时前;1分钟前
             */
            // 当前时间
            let nowTime = +new Date();

            // 传输入时间与当前时间的时间差
            let rangeTime = nowTime - this.props.stamp;

            let flag = false
            arr.forEach((value, key) => {
                let rangeRate = Math.floor(rangeTime/value);
                if (rangeRate >= 1) {

                    // FIXME: 中午12:00相对于昨天23:00，也会走'1小时前’的逻辑,因为一天(24小时)没到；
                    displayTime = `1${key}前`;

                    // TODO: 这里有没有更好办法
                    if (rangeRate >= t.props.maxPastDays && key === '天') {
                        flag = true;
                    } else {
                        displayTime = `${rangeRate}${key}前`
                    }
                }
            });

            return flag ? t._normalFormat(format) : displayTime;

        } else {
            return t._normalFormat(format);
        }
    }

    _normalFormat(format) {
        let displayTime;
        let time = new Date(this.props.stamp);
        // 年,月,日,时,分,秒
        let [year, month, day, hour, minute, second] = [
            time.getFullYear(),
            time.getMonth() + 1,
            time.getDate(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ];
        /**
         * 默认格式:YYYY—MM-DD
         * 支持格式如下:
         * YYYY/MM/DD; YYYY年MM月DD日; YYYY-MM-DD hh:mm:ss
         * 支持简写 eg: YY-M-D 15-1-9
         */
        if (/(Y+)/.test(format)) {
            let reg$ = RegExp.$1.length;
            if (reg$ === 2) {
                year = String(year).slice(2, 4);
            }
            yc = format.substr(reg$, 1);
        }
        if (/(M+)/.test(format)) {
            let reg$ = RegExp.$1.length;
            if (reg$ === 2 && month < 10) month = '0' + month;
            mc = format.substr(format.indexOf('M') + reg$, 1);
        }
        if (/(D+)/.test(format)) {
            let reg$ = RegExp.$1.length;
            if (reg$ === 2 && day < 10) day = '0' + day;
            dc = format.substr(format.indexOf('D') + reg$, 1);
        }

        displayTime = `${year}${yc}${month}${mc}${day}${dc}`;

        if (format == 'YYYY-MM-DD HH:MM') {
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            displayTime +=` ${hour}:${minute}`;
        }
        
        if (format.indexOf('HH:MM:SS') > -1) {
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            displayTime +=` ${hour}:${minute}:${second}`;
        }

        // 08.01
        if(format == `MM${mc}DD` ) {
            displayTime = `${month}${mc}${day}`
        }

        return displayTime;
    }

    handleToggleFormat() {
        let t = this;

        // 传入的props.past为false; 不需要切换显示方式
        if(!t.props.past)  return false;

        t.setState({
            past: !t.state.past
        });
    }

    render() {
        let t = this;
        return (
            <div className={classnames('tTime', {
                [t.props.className]: !!t.props.className
            })} onClick={t.handleToggleFormat.bind(t)}>
                {t.state.past ? t.state.pastTime : t.state.formatTime}
            </div>
        );
    }
}

Time.defaultProps = {
    stamp: +new Date(),
    past: false,
    maxPastDays: 7,
    format: 'YYYY-MM-DD'
}

Time.propTypes = {
    stamp: React.PropTypes.number,
    past: React.PropTypes.bool,
    maxPastDays: React.PropTypes.number,
    format: React.PropTypes.string
}

Time.displayName = 'Time';

module.exports = Time;
